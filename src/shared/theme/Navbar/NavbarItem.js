import { NavLink } from 'react-router-dom'

const NavBarItem = ({ to, name }) => {
  return (<li className=' hover:text-blue-500 '>
    <NavLink className='flex m-0 py-1 px-5 rounded-sm' exact to={to} activeClassName='border-b-4 border-blue-500 font-medium text-blue-500'>{name}</NavLink>
  </li>)
}

export default NavBarItem