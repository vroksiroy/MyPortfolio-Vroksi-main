import React, { useEffect, useState } from 'react'
import { Nav, NavInner, Logo, NavItems, NavLink, Actions, IconButton, MenuButton, TextLink, CtaButton, MobileMenu } from './NavbarStyledComponent'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Bio } from '../../data/constants';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#toolbox', label: 'Toolbox' },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Nav scrolled={scrolled || isOpen}>
      <NavInner>
        <Logo href="#top">Vroksi Roy<span>.</span></Logo>
        <NavItems>
          {links.map((l) => (
            <li key={l.href}><NavLink href={l.href}>{l.label}</NavLink></li>
          ))}
        </NavItems>
        <Actions>
          <IconButton onClick={toggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
          <TextLink href={Bio.resume} target="_blank" rel="noreferrer">Résumé</TextLink>
          <CtaButton href="#contact">Get in touch</CtaButton>
          <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </Actions>
      </NavInner>
      {isOpen &&
        <MobileMenu>
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} onClick={() => setIsOpen(false)}>{l.label}</NavLink>
          ))}
          <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink href={Bio.resume} target="_blank" rel="noreferrer">Résumé</NavLink>
        </MobileMenu>
      }
    </Nav>
  )
}

export default Navbar
