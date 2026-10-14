import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
    position: relative;
    width: 232px;
    height: 476px;
    padding: 9px;
    border-radius: 44px;
    background: #121212;
    box-shadow:
        inset 0 0 0 1.5px #3A3A3A,
        0 2px 4px rgba(0, 0, 0, 0.12),
        0 30px 60px -20px rgba(0, 0, 0, 0.45);
    @media (max-width: 480px) {
        transform: scale(0.86);
    }
`

const Screen = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    overflow: hidden;
    background: #FBFAF8;
    color: #18181B;
    font-family: 'Geist', sans-serif;
    padding: 46px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Island = styled.div`
    position: absolute;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);
    width: 76px;
    height: 22px;
    border-radius: 999px;
    background: #121212;
`

const Bar = styled.div`
    height: ${({ h }) => h || 8}px;
    width: ${({ w }) => w || '100%'};
    border-radius: 999px;
    background: ${({ c }) => c || '#E7E5E0'};
    flex-shrink: 0;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ gap }) => gap || 10}px;
`

const Col = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
`

const Box = styled.div`
    flex-shrink: 0;
    width: ${({ s }) => s}px;
    height: ${({ s }) => s}px;
    border-radius: ${({ r }) => r ?? 10}px;
    background: ${({ c }) => c};
`

const Card = styled.div`
    padding: 12px;
    border-radius: 16px;
    background: ${({ c }) => c || '#FFFFFF'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Label = styled.div`
    font-size: ${({ size }) => size || 11}px;
    font-weight: ${({ weight }) => weight || 600};
    color: ${({ c }) => c || '#18181B'};
    letter-spacing: -0.01em;
`

const Pill = styled.span`
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 9.5px;
    font-weight: 600;
    color: ${({ c }) => c};
    background: ${({ c }) => c}1A;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`

const Mood = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    background: ${({ active, c }) => active ? `${c}26` : '#F1EFEA'};
    box-shadow: ${({ active, c }) => active ? `inset 0 0 0 1.5px ${c}` : 'none'};
`

const Bubble = styled.div`
    max-width: 82%;
    padding: 8px 10px;
    border-radius: 14px;
    font-size: 10px;
    line-height: 1.35;
    align-self: ${({ me }) => me ? 'flex-end' : 'flex-start'};
    color: ${({ me }) => me ? '#FFFFFF' : '#18181B'};
    background: ${({ me, c }) => me ? c : '#F1EFEA'};
`

const Recovery = ({ c }) => (
    <>
        <Row style={{ justifyContent: 'space-between' }}>
            <Label size={15}>Hi, Sam</Label>
            <Pill c="#1F9D55">● Anonymous</Pill>
        </Row>
        <Card>
            <Label size={11}>How are you feeling today?</Label>
            <Row style={{ justifyContent: 'space-between' }}>
                {['😞', '😕', '😐', '🙂', '😊'].map((m, i) => <Mood key={m} c={c} active={i === 3}>{m}</Mood>)}
            </Row>
        </Card>
        <Card c={`${c}12`}>
            <Row gap={8}>
                <Box s={26} r={13} c={c} />
                <Col>
                    <Label size={11}>Your companion</Label>
                    <Label size={9.5} weight={500} c="#1F9D55">Online now</Label>
                </Col>
            </Row>
            <Bubble>Rough evening? I'm here. Want to talk it through?</Bubble>
            <Bubble me c={c}>Yes. Cravings are bad tonight.</Bubble>
        </Card>
        <Label size={12}>Community</Label>
        {['#F2C94C', '#6FCF97'].map((col) => (
            <Row key={col} style={{ padding: '2px' }}>
                <Box s={26} r={13} c={col} />
                <Col>
                    <Bar h={6} w="55%" c="#D4D1CA" />
                    <Bar h={5} w="85%" />
                </Col>
            </Row>
        ))}
    </>
)

const Inbox = ({ c }) => (
    <>
        <Label size={15}>Inbox</Label>
        <Row gap={6}>
            {['All', 'Gmail', 'Outlook', 'iCloud'].map((t, i) => (
                <Pill key={t} c={i === 0 ? c : '#71717A'}>{t}</Pill>
            ))}
        </Row>
        <Card c={`${c}14`}>
            <Pill c={c}>✦ AI summary</Pill>
            <Bar h={6} c={`${c}55`} />
            <Bar h={6} w="85%" c={`${c}55`} />
            <Bar h={6} w="60%" c={`${c}55`} />
        </Card>
        {[0, 1, 2, 3].map((i) => (
            <Row key={i} style={{ padding: '4px 2px' }}>
                <Box s={28} r={14} c={['#F2C94C', '#6FCF97', '#56CCF2', '#BB6BD9'][i]} />
                <Col>
                    <Bar h={6} w="45%" c="#D4D1CA" />
                    <Bar h={5} w="85%" />
                </Col>
            </Row>
        ))}
    </>
)

const Feed = ({ c }) => (
    <>
        <Row style={{ justifyContent: 'space-between' }}>
            <Label size={15}>Feed</Label>
            <Box s={22} r={11} c="#ECEAE5" />
        </Row>
        {[true, false].map((flagged, i) => (
            <Card key={i}>
                <Row gap={8}>
                    <Box s={24} r={12} c={i ? '#6FCF97' : '#F2994A'} />
                    <Col>
                        <Bar h={6} w="40%" c="#D4D1CA" />
                    </Col>
                </Row>
                <div style={{ height: 112, borderRadius: 12, background: i ? 'linear-gradient(135deg,#C9E7D5,#8FC9A8)' : `linear-gradient(135deg, ${c}55, ${c}AA)` }} />
                {flagged
                    ? <Pill c={c}>⚑ Reality Check: likely AI-generated</Pill>
                    : <Pill c="#1F9D55">✓ Authentic</Pill>}
            </Card>
        ))}
    </>
)

const Monitor = ({ c }) => (
    <>
        <Row style={{ justifyContent: 'space-between' }}>
            <Label size={15}>Cooling tower 2</Label>
            <Pill c="#1F9D55">● Live</Pill>
        </Row>
        <Grid>
            {[['pH', '7.4'], ['Cond.', '1,280'], ['ORP', '412'], ['Temp', '31°']].map(([k, v]) => (
                <Card key={k} style={{ padding: 10, gap: 2 }}>
                    <Label size={9.5} weight={500} c="#71717A">{k}</Label>
                    <Label size={18}>{v}</Label>
                </Card>
            ))}
        </Grid>
        <Card>
            <Row style={{ justifyContent: 'space-between' }}>
                <Label size={11}>Last 24h</Label>
                <Pill c={c}>Trend</Pill>
            </Row>
            <svg viewBox="0 0 180 70" width="100%" height="70">
                <path d="M0 50 C20 45 30 20 50 28 S80 55 100 40 S140 12 180 22" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
                <path d="M0 50 C20 45 30 20 50 28 S80 55 100 40 S140 12 180 22 L180 70 L0 70 Z" fill={c} opacity="0.12" />
            </svg>
        </Card>
        <Card c="#FFF7ED">
            <Row gap={8}>
                <Box s={22} r={11} c="#F59E0B" />
                <Col>
                    <Label size={10.5}>Inhibitor level low</Label>
                    <Bar h={5} w="70%" c="#FCD9A8" />
                </Col>
            </Row>
        </Card>
    </>
)

const Shot = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`

const screens = { recovery: Recovery, inbox: Inbox, feed: Feed, monitor: Monitor };

const PhoneMock = ({ screen, color, image, alt }) => {
    const Content = screens[screen] || Inbox;
    return (
        <Frame aria-hidden={image ? undefined : 'true'}>
            <Screen style={image ? { padding: 0 } : undefined}>
                {image ? <Shot src={image} alt={alt || ''} loading="lazy" /> : <Content c={color} />}
                {!image && <Island />}
            </Screen>
        </Frame>
    )
}

const Fan = styled.div`
    position: relative;
    width: 520px;
    height: 470px;
    @media (max-width: 480px) {
        width: 320px;
        height: 380px;
    }
`

const FanCard = styled.img`
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 210px;
    border-radius: 22px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 30px 60px -20px rgba(0, 0, 0, 0.45);
    transform: translateX(-50%) translateX(${({ x }) => x}px) translateY(${({ y }) => y}px) rotate(${({ r }) => r}deg);
    z-index: ${({ z }) => z};
    @media (max-width: 480px) {
        width: 150px;
        border-radius: 16px;
        transform: translateX(-50%) translateX(${({ x }) => x * 0.62}px) translateY(${({ y }) => y}px) rotate(${({ r }) => r}deg);
    }
`

const fan = [
    { x: -150, y: 40, r: -8, z: 1 },
    { x: 0, y: 0, r: 0, z: 2 },
    { x: 150, y: 40, r: 8, z: 1 },
];

export const ProjectVisual = ({ project }) => {
    const shots = project.screenshots || [];
    if (shots.length > 0 && project.screenshotStyle === 'store') {
        const picks = [shots[1] || shots[0], shots[0], shots[2] || shots[0]];
        return (
            <Fan>
                {picks.map((src, i) => (
                    <FanCard key={i} src={src} alt={i === 1 ? `${project.title} on Google Play` : ''} loading="lazy" {...fan[i]} />
                ))}
            </Fan>
        )
    }
    return <PhoneMock screen={project.screen} color={project.color} image={shots[0]} alt={`${project.title} app screen`} />
}

export const StoreShot = styled.img`
    flex-shrink: 0;
    width: 232px;
    border-radius: 24px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06), 0 12px 30px -12px rgba(0, 0, 0, 0.3);
    scroll-snap-align: start;
    @media (max-width: 480px) {
        width: 200px;
    }
`

export default PhoneMock
