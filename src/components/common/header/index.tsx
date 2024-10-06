import Logo from '@/assets/images/logo.png'
import Container from '../container'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

function Header() {

  return (
    <nav className='h-16 flex items-center'>
      <Container className='flex items-center flex-row justify-between' >
        <img src={Logo} className='h-6' />
        {/* <div className=''>
          <a href="#">Logout</a>
        </div> */}
        <a href='#' className=''>
          <GitHubLogoIcon className="h-6 w-6 " />
        </a>
      </Container>
    </nav>
  )
}

export default Header
