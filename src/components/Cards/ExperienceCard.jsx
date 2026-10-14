import React from 'react'
import styled from 'styled-components'

const Row = styled.article`
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 32px;
    padding: 40px 0;
    border-top: 1px solid ${({ theme }) => theme.line};
    @media (max-width: 860px) {
        grid-template-columns: 1fr;
        gap: 12px;
        padding: 32px 0;
    }
`

const Date = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.ink_2};
    padding-top: 6px;
    font-variant-numeric: tabular-nums;
`

const Role = styled.h3`
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.ink};
    @media (max-width: 480px) {
        font-size: 24px;
    }
`

const Company = styled.div`
    margin-top: 6px;
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 22px;
    color: ${({ theme }) => theme.ink_2};
`

const List = styled.ul`
    margin-top: 24px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 40px;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.li`
    position: relative;
    padding-left: 22px;
    font-size: 15.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.ink_2};
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 10px;
        height: 1px;
        background: ${({ theme }) => theme.ink_3};
    }
    strong {
        font-weight: 500;
        color: ${({ theme }) => theme.ink};
    }
`

const renderHighlight = (text) =>
    text.split('**').map((part, i) => i % 2 ? <strong key={i}>{part}</strong> : part)

const ExperienceCard = ({ experience }) => {
    return (
        <Row data-reveal>
            <Date>{experience.date}</Date>
            <div>
                <Role>{experience.role}</Role>
                <Company>{experience.company}, {experience.location}</Company>
                <List>
                    {experience.highlights.map((h) => <Item key={h}>{renderHighlight(h)}</Item>)}
                </List>
            </div>
        </Row>
    )
}

export default ExperienceCard
