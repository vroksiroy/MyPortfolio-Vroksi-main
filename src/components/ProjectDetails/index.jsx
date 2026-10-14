import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Mono, Serif, PrimaryButton, GhostButton } from '../Section'
import PhoneMock, { ProjectVisual, StoreShot } from '../Cards/PhoneMock'
import { projects, Bio } from '../../data/constants'

const slideUp = keyframes`
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: none; }
`

const Sheet = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.ink};
    outline: none;
    animation: ${slideUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`

const Bar = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    height: 64px;
    padding: 0 32px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    background: ${({ theme }) => theme.nav_bg};
    backdrop-filter: saturate(180%) blur(16px);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
    border-bottom: 1px solid ${({ theme }) => theme.line};
    @media (max-width: 640px) {
        padding: 0 12px 0 16px;
        grid-template-columns: 1fr auto;
    }
`

const BackLink = styled.button`
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14.5px;
    color: ${({ theme }) => theme.ink_2};
    &:hover {
        color: ${({ theme }) => theme.ink};
    }
    svg {
        font-size: 18px;
    }
`

const Counter = styled(Mono)`
    @media (max-width: 640px) {
        display: none;
    }
`

const BarActions = styled.div`
    justify-self: end;
    display: flex;
    gap: 4px;
`

const Round = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.ink_2};
    transition: background 0.2s ease, color 0.2s ease;
    &:hover:not(:disabled) {
        color: ${({ theme }) => theme.ink};
        background: ${({ theme }) => theme.surface_2};
    }
    &:disabled {
        opacity: 0.3;
        cursor: default;
    }
    svg {
        font-size: 19px;
    }
`

const Content = styled.article`
    max-width: 1120px;
    margin: 0 auto;
    padding: 72px 32px 96px;
    @media (max-width: 640px) {
        padding: 48px 20px 72px;
    }
`

const Title = styled.h1`
    margin-top: 20px;
    font-size: clamp(52px, 9vw, 120px);
    line-height: 0.92;
    letter-spacing: -0.05em;
    font-weight: 500;
`

const Tagline = styled.p`
    margin-top: 20px;
    max-width: 760px;
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: clamp(26px, 3.4vw, 40px);
    line-height: 1.15;
    color: ${({ theme }) => theme.ink_2};
`

const Overview = styled.dl`
    margin-top: 56px;
    display: grid;
    grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
    border-top: 1px solid ${({ theme }) => theme.line_strong};
    @media (max-width: 760px) {
        grid-template-columns: 1fr 1fr;
    }
`

const OverviewItem = styled.div`
    padding: 18px 24px 0 0;
    @media (max-width: 760px) {
        padding-bottom: 18px;
    }
    dt {
        font-size: 13px;
        color: ${({ theme }) => theme.ink_3};
    }
    dd {
        margin-top: 8px;
        font-size: 15.5px;
        line-height: 1.5;
        color: ${({ theme }) => theme.ink};
    }
    a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-color: ${({ theme }) => theme.accent};
        svg {
            font-size: 15px;
        }
    }
`

const Visual = styled.div`
    position: relative;
    margin-top: 56px;
    height: 600px;
    border-radius: 36px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background:
        radial-gradient(60% 80% at 50% 100%, ${({ c }) => c}55 0%, transparent 70%),
        linear-gradient(180deg, ${({ c }) => c}12, ${({ c }) => c}30);
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line};
    > div:first-child {
        margin-bottom: -60px;
        transform: scale(1.18);
        transform-origin: bottom center;
    }
    @media (max-width: 640px) {
        height: 440px;
        border-radius: 24px;
        > div:first-child {
            margin-bottom: -90px;
            transform: none;
        }
    }
`

const VisualStat = styled.div`
    position: absolute;
    ${({ side }) => side}: 40px;
    top: ${({ side }) => side === 'left' ? '64px' : '50%'};
    padding: 18px 22px;
    border-radius: 20px;
    background: ${({ theme }) => theme.surface};
    box-shadow: ${({ theme }) => theme.shadow};
    @media (max-width: 860px) {
        display: none;
    }
`

const StatValue = styled.div`
    font-size: 40px;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.04em;
`

const StatLabel = styled.div`
    margin-top: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.ink_2};
`

const Block = styled.section`
    margin-top: 96px;
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 32px;
    @media (max-width: 860px) {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 72px;
    }
`

const BlockLabel = styled.div`
    padding-top: 14px;
    border-top: 1px solid ${({ theme }) => theme.line_strong};
    font-size: 14px;
    color: ${({ theme }) => theme.ink_2};
    align-self: start;
`

const Lead = styled.p`
    font-size: clamp(22px, 2.4vw, 30px);
    line-height: 1.35;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.ink};
`

const Steps = styled.ol`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

const Step = styled.li`
    padding: 28px;
    border-radius: 24px;
    background: ${({ theme }) => theme.surface};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line};
    h3 {
        margin-top: 28px;
        font-size: 21px;
        letter-spacing: -0.02em;
    }
    p {
        margin-top: 10px;
        font-size: 15.5px;
        line-height: 1.6;
        color: ${({ theme }) => theme.ink_2};
    }
`

const StepNumber = styled.span`
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 28px;
    line-height: 1;
    color: ${({ c }) => c};
`

const Gallery = styled.div`
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding: 8px 4px 24px;
    scroll-snap-type: x mandatory;
    > div {
        flex-shrink: 0;
        scroll-snap-align: start;
    }
`

const Credit = styled.p`
    margin-top: 4px;
    font-size: 13px;
    color: ${({ theme }) => theme.ink_3};
`

const Results = styled.div`
    padding: 40px;
    border-radius: 28px;
    background: ${({ theme }) => theme.mode === 'light' ? theme.ink : theme.surface};
    color: ${({ theme }) => theme.mode === 'light' ? theme.bg : theme.ink};
    @media (max-width: 640px) {
        padding: 28px 22px;
    }
`

const ResultNumbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 28px 64px;
`

const ResultValue = styled.div`
    font-size: clamp(48px, 6vw, 80px);
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.05em;
`

const ResultLabel = styled.div`
    margin-top: 10px;
    font-size: 15px;
    opacity: 0.65;
`

const Outcome = styled.p`
    margin-top: 36px;
    padding-top: 24px;
    max-width: 720px;
    border-top: 1px solid ${({ theme }) => theme.mode === 'light' ? 'rgba(246,245,241,0.18)' : theme.line};
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: clamp(22px, 2.4vw, 28px);
    line-height: 1.3;
`

const Stack = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    li {
        padding: 10px 16px;
        border-radius: 999px;
        font-size: 15px;
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line_strong};
    }
`

const NextCard = styled.button`
    margin-top: 120px;
    width: 100%;
    padding: 40px;
    border: none;
    border-radius: 32px;
    cursor: pointer;
    text-align: left;
    color: ${({ theme }) => theme.ink};
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    background: linear-gradient(135deg, ${({ c }) => c}14, ${({ c }) => c}33);
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.line};
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    &:hover {
        transform: translateY(-4px);
    }
    &:hover > svg {
        transform: translateX(6px);
    }
    > svg {
        flex-shrink: 0;
        font-size: 44px;
        transition: transform 0.3s ease;
    }
    @media (max-width: 640px) {
        margin-top: 80px;
        padding: 28px 22px;
        border-radius: 24px;
        > svg {
            font-size: 32px;
        }
    }
`

const NextTitle = styled.div`
    margin-top: 12px;
    font-size: clamp(40px, 6vw, 80px);
    line-height: 0.95;
    letter-spacing: -0.05em;
    font-weight: 500;
`

const NextTagline = styled.div`
    margin-top: 10px;
    font-size: 16px;
    color: ${({ theme }) => theme.ink_2};
`

const Cta = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    h2 {
        font-size: clamp(26px, 3vw, 36px);
        letter-spacing: -0.03em;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`

const ProjectDetails = ({ slug, onOpen, onClose }) => {
    const sheetRef = useRef(null);
    const index = projects.findIndex((p) => p.slug === slug);
    const project = projects[index];
    const prev = projects[index - 1];
    const next = projects[(index + 1) % projects.length];

    useEffect(() => {
        sheetRef.current?.scrollTo({ top: 0 });
    }, [slug]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight') onOpen(next);
            if (e.key === 'ArrowLeft' && prev) onOpen(prev);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [next, prev, onOpen]);

    if (!project) return null;

    const overview = [
        { label: 'My role', value: project.scope },
        { label: 'Platform', value: project.platform },
        { label: 'Industry', value: project.domain },
    ];
    if (project.playstore) {
        overview.push({ label: 'Availability', value: <a href={project.playstore} target="_blank" rel="noreferrer">Google Play <NorthEastIcon /></a> });
    } else if (project.date) {
        overview.push({ label: 'Year', value: project.date });
    }

    return (
        <Modal open={true} onClose={onClose} hideBackdrop>
            <Sheet ref={sheetRef} role="dialog" aria-modal="true" aria-labelledby="case-title">
                <Bar>
                    <BackLink onClick={onClose}><WestIcon /> All work</BackLink>
                    <Counter>Case study {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</Counter>
                    <BarActions>
                        <Round onClick={() => prev && onOpen(prev)} disabled={!prev} aria-label="Previous case study"><WestIcon /></Round>
                        <Round onClick={() => onOpen(next)} aria-label="Next case study"><EastIcon /></Round>
                        <Round onClick={onClose} aria-label="Close case study"><CloseIcon /></Round>
                    </BarActions>
                </Bar>

                <Content key={slug}>
                    <Mono>{project.domain} · {project.platform}</Mono>
                    <Title id="case-title">{project.title}</Title>
                    <Tagline>{project.tagline}</Tagline>

                    <Overview cols={overview.length}>
                        {overview.map((o) => (
                            <OverviewItem key={o.label}>
                                <dt>{o.label}</dt>
                                <dd>{o.value}</dd>
                            </OverviewItem>
                        ))}
                    </Overview>

                    {(project.screen || project.screenshots?.length > 0) &&
                        <Visual c={project.color}>
                            <ProjectVisual project={project} />
                            {project.metrics.slice(0, 2).map((m, i) => (
                                <VisualStat key={m.label} side={i === 0 ? 'left' : 'right'}>
                                    <StatValue>{m.value}</StatValue>
                                    <StatLabel>{m.label}</StatLabel>
                                </VisualStat>
                            ))}
                        </Visual>
                    }

                    <Block>
                        <BlockLabel>The challenge</BlockLabel>
                        <Lead>{project.problem}</Lead>
                    </Block>

                    <Block>
                        <BlockLabel>{project.approachLabel || 'My approach'}</BlockLabel>
                        <Steps>
                            {project.approach.map((step, i) => (
                                <Step key={step.title}>
                                    <StepNumber c={project.color}>{String(i + 1).padStart(2, '0')}</StepNumber>
                                    <h3>{step.title}</h3>
                                    <p>{step.body}</p>
                                </Step>
                            ))}
                        </Steps>
                    </Block>

                    {project.screenshots?.length > 1 &&
                        <Block>
                            <BlockLabel>Screens</BlockLabel>
                            <div>
                                <Gallery>
                                    {project.screenshots.map((src, i) => project.screenshotStyle === 'store'
                                        ? <StoreShot key={src} src={src} alt={`${project.title} screen ${i + 1}`} loading="lazy" />
                                        : <PhoneMock key={src} image={src} alt={`${project.title} screen ${i + 1}`} />
                                    )}
                                </Gallery>
                                {project.screenshotCredit && <Credit>Screens: {project.screenshotCredit}</Credit>}
                            </div>
                        </Block>
                    }

                    <Block>
                        <BlockLabel>Results</BlockLabel>
                        <Results>
                            <ResultNumbers>
                                {project.metrics.map((m) => (
                                    <div key={m.label}>
                                        <ResultValue>{m.value}</ResultValue>
                                        <ResultLabel>{m.label}</ResultLabel>
                                    </div>
                                ))}
                            </ResultNumbers>
                            {project.outcome && <Outcome>{project.outcome}</Outcome>}
                        </Results>
                    </Block>

                    {project.stack.length > 0 &&
                        <Block>
                            <BlockLabel>Tech stack</BlockLabel>
                            <Stack>
                                {project.stack.map((s) => <li key={s}>{s}</li>)}
                            </Stack>
                        </Block>
                    }

                    <NextCard c={next.color} onClick={() => onOpen(next)}>
                        <div>
                            <Mono>Next case study</Mono>
                            <NextTitle>{next.title}</NextTitle>
                            <NextTagline>{next.tagline}</NextTagline>
                        </div>
                        <EastIcon />
                    </NextCard>

                    <Cta>
                        <h2>Building something similar? <Serif>Let's talk.</Serif></h2>
                        <div>
                            <PrimaryButton href={`mailto:${Bio.email}`}>Email me <NorthEastIcon /></PrimaryButton>
                            <GhostButton href={Bio.resume} target="_blank" rel="noreferrer">Résumé <NorthEastIcon /></GhostButton>
                        </div>
                    </Cta>
                </Content>
            </Sheet>
        </Modal>
    )
}

export default ProjectDetails
