import NavbarItem from './NavbarItem'

import Logo from '../../../asset/may-logo.png'

const Navbar = () => {
  const route = [
    { to: '/', name: 'Home' },
    { to: '/basic', name: 'Basic' },
    { to: '/joke', name: 'Joke' },
    { to: '/marathon', name: 'Marathon' },
  ]
  return (
    <nav className='flex my-16  w-9/12 m-auto justify-between'>
      <ul className='flex '>
        <li>
          <img className='h-7' src={Logo} alt='logo' />
        </li>
      </ul>
      <ul className='flex '>
        {route.map(i => (
          <NavbarItem key={i.name} to={i.to} name={i.name} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar