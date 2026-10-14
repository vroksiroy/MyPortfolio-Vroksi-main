import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  background: ${({ theme }) => theme.nav_bg};
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  border-bottom: 1px solid ${({ scrolled, theme }) => scrolled ? theme.line : 'transparent'};
  transition: border-color 0.2s ease;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Logo = styled.a`
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.ink};
  span {
    color: ${({ theme }) => theme.accent};
  }
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
  @media (max-width: 900px) {
    display: none;
  }
`

export const NavLink = styled.a`
  display: block;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.ink_2};
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.ink};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.ink_2};
  transition: color 0.2s ease, background 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.ink};
    background: ${({ theme }) => theme.surface_2};
  }
  svg {
    font-size: 19px;
  }
`

export const MenuButton = styled(IconButton)`
  display: none;
  @media (max-width: 900px) {
    display: inline-flex;
  }
`

export const TextLink = styled(NavLink)`
  @media (max-width: 560px) {
    display: none;
  }
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 18px;
  margin-left: 4px;
  border-radius: 999px;
  font-size: 14.5px;
  font-weight: 500;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.bg};
  transition: background 0.2s ease, color 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.on_accent};
  }
  @media (max-width: 400px) {
    padding: 0 14px;
  }
`

export const MobileMenu = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 20px 24px;
  background: ${({ theme }) => theme.bg};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  ${NavLink} {
    padding: 16px 0;
    font-size: 22px;
    font-family: 'Instrument Serif', Georgia, serif;
    color: ${({ theme }) => theme.ink};
    border-bottom: 1px solid ${({ theme }) => theme.line};
    border-radius: 0;
  }
`
