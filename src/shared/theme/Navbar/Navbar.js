import styled from '@emotion/styled'

import NavbarItem from './NavbarItem'

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`
const Content = styled.ul`
  display: flex;
  margin: 60px 0;
`

const Navbar = () => {
  const route = [
    { to: '/', name: 'Home' },
    { to: '/basic', name: 'Basic' },
    { to: '/joke', name: 'Joke' },
    { to: '/marathon', name: 'Marathon' },
  ]
  return (
    <Nav>
      <Content>
        <p>logo</p>
        {/* <img src='' alt='logo' /> */}
      </Content>
      <Content>
        {route.map(i => (
          <NavbarItem key={i.name} to={i.to} name={i.name} />
        ))}
      </Content>
    </Nav>
  )
}

export default Navbar