import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 140px 32px 0;
  @media (max-width: 768px) {
    padding: 96px 20px 0;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Serif = styled.em`
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: ${({ upright }) => upright ? 'normal' : 'italic'};
  font-weight: 400;
  letter-spacing: -0.01em;
`

export const Mono = styled.span`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.ink_3};
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 32px;
  padding-top: 20px;
  margin-bottom: 64px;
  border-top: 1px solid ${({ theme }) => theme.line_strong};
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
`

const Index = styled(Mono)`
  color: ${({ theme }) => theme.ink_2};
  padding-top: 10px;
`

const Title = styled.h2`
  font-size: 56px;
  line-height: 1.02;
  letter-spacing: -0.035em;
  max-width: 820px;
  color: ${({ theme }) => theme.ink};
  @media (max-width: 860px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 34px;
  }
`

const Desc = styled.p`
  margin-top: 20px;
  max-width: 600px;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.ink_2};
  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const SectionHeader = ({ index, label, title, desc }) => (
  <Header data-reveal>
    <Index>({index}) {label}</Index>
    <div>
      <Title>{title}</Title>
      {desc && <Desc>{desc}</Desc>}
    </div>
  </Header>
)

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  svg {
    font-size: 18px;
    transition: transform 0.2s ease;
  }
  &:hover svg {
    transform: translate(2px, -2px);
  }
`

export const PrimaryButton = styled.a`
  ${buttonBase}
  border: none;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.bg};
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.on_accent};
  }
`

export const GhostButton = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${({ theme }) => theme.ink};
  border: 1px solid ${({ theme }) => theme.line_strong};
  &:hover {
    border-color: ${({ theme }) => theme.ink};
  }
`
