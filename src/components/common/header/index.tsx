import Logo from '@/assets/images/logo.png'
import Container from '../container'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@TradeViewToken') as string;
    setIsLogged(!!token)

    if (!token) {
      navigate('/')
    }
  }, [localStorage]);

  return (
    <nav className='h-16 flex items-center'>
      <Container className='flex items-center flex-row justify-between' >
        <img src={Logo} className='h-6' />
        <div className='flex gap-6 items-center'>
          {isLogged && <Button variant='ghost' size='sm'
            onClick={() => {
              localStorage.clear();
              navigate('/')
            }}
          >Logout
          </Button>}
          <a href='#' className=''>
            <GitHubLogoIcon className="h-6 w-6 " />
          </a>
        </div>
      </Container>
    </nav>
  )
}

export default Header
