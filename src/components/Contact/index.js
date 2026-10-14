import React, { useState } from 'react'
import styled from 'styled-components'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { Container, Wrapper, Serif, Mono } from '../Section'
import { Bio } from '../../data/constants'

const Panel = styled.div`
  padding: 72px 64px 56px;
  border-radius: 36px;
  background: ${({ theme }) => theme.mode === 'light' ? theme.ink : theme.surface};
  color: ${({ theme }) => theme.mode === 'light' ? theme.bg : theme.ink};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line};
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    right: -180px;
    top: -220px;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    opacity: 0.22;
    filter: blur(120px);
    pointer-events: none;
  }
  @media (max-width: 768px) {
    padding: 44px 24px 32px;
    border-radius: 28px;
  }
`

const Label = styled(Mono)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  opacity: 0.7;
`

const Title = styled.h2`
  position: relative;
  margin-top: 28px;
  max-width: 900px;
  font-size: clamp(40px, 6.4vw, 88px);
  line-height: 1;
  letter-spacing: -0.045em;
`

const EmailRow = styled.div`
  position: relative;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
`

const Email = styled.a`
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1.1;
  overflow-wrap: anywhere;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 8px;
  text-decoration-color: ${({ theme }) => theme.accent};
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 14px;
  color: inherit;
  background: transparent;
  border: 1px solid currentColor;
  opacity: 0.75;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
  svg {
    font-size: 16px;
  }
`

const Bottom = styled.div`
  position: relative;
  margin-top: 72px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.mode === 'light' ? 'rgba(246,245,241,0.18)' : theme.line};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    margin-top: 48px;
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 28px;
`

const LinkOut = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  opacity: 0.85;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.accent};
  }
  svg {
    font-size: 16px;
  }
`

const Note = styled.div`
  font-size: 15px;
  opacity: 0.6;
`

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(Bio.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Panel data-reveal>
          <Label>(05) Contact</Label>
          <Title>Building something people will rely on? <Serif>Let's talk.</Serif></Title>
          <EmailRow>
            <Email href={`mailto:${Bio.email}`}>{Bio.email}</Email>
            <CopyButton onClick={copy} aria-live="polite">
              {copied ? <><CheckIcon /> Copied</> : <><ContentCopyIcon /> Copy</>}
            </CopyButton>
          </EmailRow>
          <Bottom>
            <Links>
              <LinkOut href={Bio.linkedin} target="_blank" rel="noreferrer">LinkedIn <NorthEastIcon /></LinkOut>
              <LinkOut href={Bio.github} target="_blank" rel="noreferrer">GitHub <NorthEastIcon /></LinkOut>
              <LinkOut href={Bio.resume} target="_blank" rel="noreferrer">Résumé <NorthEastIcon /></LinkOut>
            </Links>
            <Note>Based in {Bio.location} (IST)</Note>
          </Bottom>
        </Panel>
      </Wrapper>
    </Container>
  )
}

export default Contact
