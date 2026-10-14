import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, SectionHeader, Serif } from '../Section'
import ExperienceCard from '../Cards/ExperienceCard'
import { experiences, awards, testimonials } from '../../data/constants'

const Recognition = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 32px;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.line};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 32px 0;
  }
`

const Label = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.ink_2};
  padding-top: 4px;
`

const Awards = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const Award = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px dashed ${({ theme }) => theme.line_strong};
  font-size: 16px;
  color: ${({ theme }) => theme.ink};
  span {
    flex-shrink: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.ink_3};
  }
`

const Quotes = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(${({ count }) => Math.min(count, 2)}, 1fr);
  gap: 20px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Quote = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  padding: 36px;
  border-radius: 28px;
  background: ${({ theme }) => theme.surface};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line};
  blockquote {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: clamp(22px, 2.2vw, 28px);
    line-height: 1.3;
    color: ${({ theme }) => theme.ink};
    &::before {
      content: '“';
      display: block;
      height: 36px;
      font-size: 64px;
      line-height: 1;
      color: ${({ theme }) => theme.accent};
    }
  }
  figcaption {
    font-size: 15px;
    color: ${({ theme }) => theme.ink_2};
    strong {
      display: block;
      font-weight: 500;
      color: ${({ theme }) => theme.ink};
    }
  }
  @media (max-width: 480px) {
    padding: 26px 22px;
  }
`

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionHeader
          index="03"
          label="Experience"
          title={<>7.5 years, from engineer <Serif>to lead.</Serif></>}
        />
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
        <Recognition data-reveal>
          <Label>Recognition</Label>
          <Awards>
            {awards.map((a) => (
              <Award key={a.title}>{a.title}<span>{a.date}</span></Award>
            ))}
          </Awards>
        </Recognition>
        {testimonials.length > 0 &&
          <Quotes count={testimonials.length} data-reveal>
            {testimonials.map((t) => (
              <Quote key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <figcaption><strong>{t.name}</strong>{t.title}</figcaption>
              </Quote>
            ))}
          </Quotes>
        }
      </Wrapper>
    </Container>
  )
}

export default Experience
