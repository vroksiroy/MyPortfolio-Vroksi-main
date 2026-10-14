import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';

const FooterContainer = styled.footer`
  margin-top: 64px;
  padding: 28px 32px 40px;
  @media (max-width: 768px) {
    padding: 24px 20px 32px;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.ink_3};
`

const Top = styled.a`
  color: ${({ theme }) => theme.ink_2};
  &:hover {
    color: ${({ theme }) => theme.ink};
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Inner>
        <span>© {new Date().getFullYear()} {Bio.name}. Designed and built by me.</span>
        <Top href="#top">Back to top ↑</Top>
      </Inner>
    </FooterContainer>
  );
}

export default Footer;
