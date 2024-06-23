import React, { useState } from 'react';
import logoimg from '../../assets/logo/logo.png';
import { useNavigate } from "react-router-dom";

import { HeaderWrapper, Nav, Logo, Text, HamburgerMenu, MobileNav } from './styles';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const handleClickVideos = () => {
    navigate('/videos');
    setIsMobileMenuOpen(false);
  };

  const handleClickArtigos = () => {
    navigate('/articles');
    setIsMobileMenuOpen(false);
  };

  const handleClickHome = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <HeaderWrapper>
      <Logo src={logoimg} alt="Logo da Empresa" onClick={handleClickHome} />
      <HamburgerMenu onClick={toggleMobileMenu}>
        &#9776; {/* Código do menu hambúrguer */}
      </HamburgerMenu>
      <Nav isMobileMenuOpen={isMobileMenuOpen}>
        <ul>
          <li><Text onClick={handleClickHome}>Início</Text></li>
          <li><Text onClick={handleClickVideos}>Videos</Text></li>
          <li><Text onClick={handleClickArtigos}>Artigos</Text></li>
        </ul>
      </Nav>
      {isMobileMenuOpen && (
        <MobileNav>
          <ul>
            <li><Text onClick={handleClickHome}>Início</Text></li>
            <li><Text onClick={handleClickVideos}>Videos</Text></li>
            <li><Text onClick={handleClickArtigos}>Artigos</Text></li>
          </ul>
        </MobileNav>
      )}
    </HeaderWrapper>
  );
}

export { Header };