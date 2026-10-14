import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 56px 32px 0;
  @media (max-width: 768px) {
    padding: 32px 20px 0;
  }
`

export const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const TopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 26px;
  letter-spacing: -0.02em;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.bg};
  span {
    color: ${({ theme }) => theme.accent};
  }
`

export const Photo = styled.img`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
  background: ${({ theme }) => theme.surface_2};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.line};
`

export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.ink};
`

export const Role = styled.div`
  margin-top: 2px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.ink_2};
`

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.ink_2};
`

export const StatusItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

export const Title = styled.h1`
  margin-top: 64px;
  max-width: 1200px;
  font-size: clamp(42px, 6.2vw, 92px);
  line-height: 0.98;
  letter-spacing: -0.045em;
  font-weight: 500;
  color: ${({ theme }) => theme.ink};
  em {
    font-size: 1.08em;
    letter-spacing: -0.02em;
  }
  @media (max-width: 768px) {
    margin-top: 48px;
  }
`

export const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
`

export const Lower = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 64px;
  align-items: end;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 48px;
    margin-top: 40px;
  }
`

export const Intro = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.ink_2};
  @media (max-width: 480px) {
    font-size: 16.5px;
  }
`

export const Buttons = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${({ theme }) => theme.line_strong};
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Fact = styled.div`
  padding: 18px 20px 0 0;
  @media (max-width: 640px) {
    padding-bottom: 20px;
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.line};
    }
  }
`

export const FactLabel = styled.dt`
  font-size: 13px;
  color: ${({ theme }) => theme.ink_3};
`

export const FactValue = styled.dd`
  margin-top: 14px;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 500;
  color: ${({ theme }) => theme.ink};
  @media (max-width: 1100px) {
    font-size: 36px;
  }
`

export const FactUnit = styled.dd`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.ink_2};
`

export const Brands = styled.div`
  margin-top: 96px;
  padding: 22px 0;
  border-top: 1px solid ${({ theme }) => theme.line};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 768px) {
    margin-top: 64px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
`

export const BrandsLabel = styled.div`
  flex-shrink: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.ink_3};
`

export const Marquee = styled.div`
  flex: 1;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
`

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: marquee 32s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`

export const Brand = styled.span`
  padding: 0 28px;
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 28px;
  line-height: 1;
  white-space: nowrap;
  color: ${({ theme }) => theme.ink_2};
`
