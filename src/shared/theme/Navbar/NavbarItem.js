import { Link } from 'react-router-dom'

const NavBarItem = ({ to, name }) => {
  return (<li className='py-1 px-5 rounded-sm hover:bg-blue-500 hover:text-white'>
    <Link to={to}>{name}</Link>
  </li>)
}

export default NavBarItem