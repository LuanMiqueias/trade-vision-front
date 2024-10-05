import Logo from '../../../assets/images/logo.png'
import Container from '../container'

function Header() {

  return (
    <nav className='h-16 flex items-center'>
      <Container className='flex items-center flex-row justify-between' >
        <img src={Logo}/>
        <div className=''>
          <a href="#">Logout</a>
        </div>
      </Container>
    </nav>
  )
}

export default Header
