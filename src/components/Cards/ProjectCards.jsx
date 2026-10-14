import React from 'react'
import styled from 'styled-components'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Mono, GhostButton } from '../Section'
import { ProjectVisual } from './PhoneMock'

const Article = styled.article`
    display: grid;
    grid-template-columns: ${({ reverse }) => reverse ? '7fr 5fr' : '5fr 7fr'};
    gap: 64px;
    align-items: center;
    padding: 56px 0;
    border-top: 1px solid ${({ theme }) => theme.line};
    &:first-child {
        border-top: none;
        padding-top: 0;
    }
    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        gap: 36px;
        padding: 48px 0;
    }
`

const Text = styled.div`
    order: ${({ reverse }) => reverse ? 2 : 1};
    @media (max-width: 960px) {
        order: 2;
    }
`

const Meta = styled(Mono)`
    display: block;
`

const Title = styled.h3`
    margin-top: 18px;
    font-size: 48px;
    line-height: 1;
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.ink};
    @media (max-width: 480px) {
        font-size: 38px;
    }
`

const Tagline = styled.p`
    margin-top: 12px;
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 26px;
    line-height: 1.2;
    color: ${({ theme }) => theme.ink_2};
`

const Problem = styled.p`
    margin-top: 20px;
    font-size: 16.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.ink_2};
`

const Metrics = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid ${({ theme }) => theme.line_strong};
`

const Metric = styled.div`
    padding-top: 16px;
    padding-right: 16px;
`

const MetricValue = styled.div`
    font-size: 36px;
    line-height: 1;
    letter-spacing: -0.04em;
    font-weight: 500;
    color: ${({ theme }) => theme.ink};
`

const MetricLabel = styled.div`
    margin-top: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.ink_2};
`

const Stack = styled.div`
    margin-top: 28px;
    font-size: 14px;
    color: ${({ theme }) => theme.ink_3};
    line-height: 1.6;
`

const Actions = styled.div`
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
`

const StoreLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 48px;
    padding: 0 8px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.ink};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.line_strong};
    text-underline-offset: 5px;
    &:hover {
        text-decoration-color: ${({ theme }) => theme.accent};
    }
    svg {
        font-size: 16px;
    }
`

const Visual = styled.div`
    order: ${({ reverse }) => reverse ? 1 : 2};
    position: relative;
    width: 100%;
    aspect-ratio: 7 / 6;
    border: none;
    border-radius: 32px;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background:
        radial-gradient(80% 70% at 50% 100%, ${({ c }) => c}40 0%, transparent 70%),
        linear-gradient(180deg, ${({ c }) => c}14, ${({ c }) => c}26);
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line};
    > div:first-child {
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateY(36px);
    }
    &:hover > div:first-child {
        transform: translateY(16px);
    }
    @media (max-width: 960px) {
        order: 1;
    }
    @media (max-width: 480px) {
        aspect-ratio: 5 / 6;
        border-radius: 24px;
    }
`

const Badge = styled.div`
    position: absolute;
    left: 24px;
    bottom: 24px;
    padding: 12px 16px;
    border-radius: 16px;
    text-align: left;
    background: ${({ theme }) => theme.surface};
    box-shadow: ${({ theme }) => theme.shadow};
    @media (max-width: 480px) {
        left: 14px;
        bottom: 14px;
        padding: 10px 14px;
    }
`

const BadgeValue = styled.div`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.ink};
`

const BadgeLabel = styled.div`
    font-size: 12.5px;
    color: ${({ theme }) => theme.ink_2};
`

export const CaseStudy = ({ project, index, reverse, onOpen }) => {
    const lead = project.metrics[0];
    return (
        <Article reverse={reverse} data-reveal>
            <Text reverse={reverse}>
                <Meta>{String(index + 1).padStart(2, '0')} / {project.domain} · {project.platform}</Meta>
                <Title>{project.title}</Title>
                <Tagline>{project.tagline}</Tagline>
                <Problem>{project.problem}</Problem>
                <Metrics>
                    {project.metrics.map((m) => (
                        <Metric key={m.label}>
                            <MetricValue>{m.value}</MetricValue>
                            <MetricLabel>{m.label}</MetricLabel>
                        </Metric>
                    ))}
                </Metrics>
                {project.stack.length > 0 && <Stack>{project.stack.join('  /  ')}</Stack>}
                <Actions>
                    <GhostButton as="button" onClick={onOpen}>Read case study <NorthEastIcon /></GhostButton>
                    {project.playstore &&
                        <StoreLink href={project.playstore} target="_blank" rel="noreferrer">Google Play <NorthEastIcon /></StoreLink>
                    }
                </Actions>
            </Text>
            <Visual reverse={reverse} c={project.color} onClick={onOpen} onKeyDown={(e) => e.key === 'Enter' && onOpen()} role="button" tabIndex={0} aria-label={`Open ${project.title} case study`}>
                <ProjectVisual project={project} />
                <Badge>
                    <BadgeValue>{lead.value}</BadgeValue>
                    <BadgeLabel>{lead.label}</BadgeLabel>
                </Badge>
            </Visual>
        </Article>
    )
}

const Row = styled.button`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 6fr 2fr 1fr 32px;
    gap: 24px;
    align-items: center;
    padding: 26px 0;
    text-align: left;
    cursor: pointer;
    background: transparent;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.line};
    color: ${({ theme }) => theme.ink};
    transition: padding 0.3s ease;
    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.line};
    }
    &:hover {
        padding-left: 12px;
    }
    &:hover svg {
        color: ${({ theme }) => theme.accent};
        transform: translate(2px, -2px);
    }
    svg {
        color: ${({ theme }) => theme.ink_3};
        transition: transform 0.2s ease, color 0.2s ease;
    }
    @media (max-width: 860px) {
        grid-template-columns: 1fr 32px;
        gap: 6px 16px;
        padding: 22px 0;
    }
`

const RowTitle = styled.span`
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 30px;
    line-height: 1;
`

const RowDesc = styled.span`
    font-size: 15.5px;
    color: ${({ theme }) => theme.ink_2};
    @media (max-width: 860px) {
        grid-column: 1;
        grid-row: 2;
    }
`

const RowMeta = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.ink_3};
    @media (max-width: 860px) {
        display: none;
    }
`

const RowArrow = styled.span`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 860px) {
        grid-column: 2;
        grid-row: 1 / span 2;
    }
`

export const ProjectRow = ({ project, onOpen }) => (
    <Row onClick={onOpen} aria-label={`Open ${project.title} details`}>
        <RowTitle>{project.title}</RowTitle>
        <RowDesc>{project.tagline}</RowDesc>
        <RowMeta>{project.domain}</RowMeta>
        <RowMeta>{project.date}</RowMeta>
        <RowArrow><NorthEastIcon /></RowArrow>
    </Row>
)
