import styled from 'styled-components'

export const Header = styled.header``

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    height: var(--nav-height);
    background: var(--background-second);
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 0%;
    margin: 0 5px;
    max-width: var(--nav-width);
`

export const Aside = styled.aside`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 30px;
    margin: 0 5px;
`

export const Logo = styled.img`
  transition: all 0.1s ease-in-out 0s;

  &:hover {
    transform: scale(0.9);
  }
`