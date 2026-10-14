import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroInner, TopRow, Identity, Avatar, Photo, Name, Role, Status, StatusItem, Title, Lower, Intro, Buttons, Facts, Fact, FactLabel, FactValue, FactUnit, Brands, BrandsLabel, Marquee, Track, Brand } from './HeroStyle'
import { Serif, PrimaryButton, GhostButton } from '../Section'
import SouthIcon from '@mui/icons-material/South';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Bio, facts, brands } from '../../data/constants';

const formatTime = () => new Intl.DateTimeFormat('en-US', {
    hour: 'numeric', minute: '2-digit', timeZone: Bio.timezone,
}).format(new Date());

const HeroSection = () => {
    const [time, setTime] = useState(formatTime);

    useEffect(() => {
        const id = setInterval(() => setTime(formatTime()), 30000);
        return () => clearInterval(id);
    }, []);

    return (
        <HeroContainer id="top">
            <HeroInner>
                <TopRow>
                    <Identity>
                        {Bio.photo
                            ? <Photo src={Bio.photo} alt={Bio.name} />
                            : <Avatar aria-hidden="true">V<span>R</span></Avatar>}
                        <div>
                            <Name>{Bio.name}</Name>
                            <Role>{Bio.role} · React Native & Next.js</Role>
                        </div>
                    </Identity>
                    <Status>
                        <StatusItem>{Bio.location} · {time} IST</StatusItem>
                    </Status>
                </TopRow>

                <Title>
                    I build <Serif>mobile products</Serif> people rely on, from architecture to App&nbsp;Store.
                </Title>

                <Lower>
                    <div>
                        <Intro>{Bio.intro}</Intro>
                        <Buttons>
                            <PrimaryButton href="#work">See case studies <SouthIcon /></PrimaryButton>
                            <GhostButton href={Bio.resume} target="_blank" rel="noreferrer">Résumé <NorthEastIcon /></GhostButton>
                        </Buttons>
                    </div>
                    <Facts>
                        {facts.map((f) => (
                            <Fact key={f.label}>
                                <FactLabel>{f.label}</FactLabel>
                                <FactValue>{f.value}</FactValue>
                                <FactUnit>{f.unit}</FactUnit>
                            </Fact>
                        ))}
                    </Facts>
                </Lower>

                <Brands>
                    <BrandsLabel>Products I've shipped</BrandsLabel>
                    <Marquee>
                        <Track>
                            {[...brands, ...brands].map((b, i) => (
                                <Brand key={i} aria-hidden={i >= brands.length}>{b}</Brand>
                            ))}
                        </Track>
                    </Marquee>
                </Brands>
            </HeroInner>
        </HeroContainer>
    )
}

export default HeroSection
