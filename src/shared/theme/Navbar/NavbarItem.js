import { NavLink } from 'react-router-dom'

const NavBarItem = ({ to, name }) => {
  return (<li className='hover:bg-blue-500 hover:text-white '>
    <NavLink className='flex m-0 py-1 px-5 rounded-sm' exact to={to} activeClassName='bg-blue-500 text-white'>{name}</NavLink>
  </li>)
}

export default NavBarItem