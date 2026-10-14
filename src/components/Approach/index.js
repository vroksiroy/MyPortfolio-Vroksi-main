import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, SectionHeader, Serif, Mono } from '../Section'
import { principles } from '../../data/constants'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${({ theme }) => theme.line};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 28px 32px 0;
  & + & {
    padding-left: 28px;
    border-left: 1px solid ${({ theme }) => theme.line};
  }
  @media (max-width: 1000px) {
    &:nth-child(3) {
      padding-left: 0;
      border-left: none;
    }
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.line};
    }
  }
  @media (max-width: 560px) {
    padding: 28px 0;
    & + & {
      padding-left: 0;
      border-left: none;
      border-top: 1px solid ${({ theme }) => theme.line};
    }
  }
`

const Title = styled.h3`
  margin-top: 40px;
  font-size: 24px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.ink};
  @media (max-width: 560px) {
    margin-top: 16px;
  }
`

const Body = styled.p`
  margin-top: 12px;
  font-size: 15.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.ink_2};
  flex: 1;
`

const Proof = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.ink};
  &::before {
    content: '';
    width: 14px;
    height: 2px;
    margin-top: 10px;
    flex-shrink: 0;
    background: ${({ theme }) => theme.accent};
  }
`

const Approach = () => (
  <Container id="approach">
    <Wrapper>
      <SectionHeader
        index="02"
        label="How I work"
        title={<>Engineering leadership, <Serif>measured in outcomes.</Serif></>}
        desc="What a team gets when I lead a product: solid foundations, confident releases and engineers who keep getting better."
      />
      <Grid data-reveal>
        {principles.map((p, i) => (
          <Item key={p.title}>
            <Mono>{String(i + 1).padStart(2, '0')}</Mono>
            <Title>{p.title}</Title>
            <Body>{p.body}</Body>
            <Proof>{p.proof}</Proof>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  </Container>
)

export default Approach
