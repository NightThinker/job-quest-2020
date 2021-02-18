import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const NavItem = styled.li`
  list-style-type: none;
  padding: 6px 28px;
  :hover {
    border-bottom: 1px solid red;
  }
  a {
    text-decoration: none
  }
`

const NavBarItem = ({ to, name }) => {
  return (<NavItem>
    <Link to={to}>{name}</Link>
  </NavItem>)
}

export default NavBarItem