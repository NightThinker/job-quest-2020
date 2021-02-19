import { Link } from 'react-router-dom'

const NavBarItem = ({ to, name }) => {
  return (<li className='py-1 px-5 hover:border-b-2 hover:border-blue-500'>
    <Link to={to}>{name}</Link>
  </li>)
}

export default NavBarItem