import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.08) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 0;
    min-height: 100vh;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    padding: 0 20px;
    gap: 60px;
    
    @media (max-width: 960px) {
        flex-direction: column;
        gap: 40px;
        padding: 0 16px;
    }
`;

export const Title = styled.h2`
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.text_primary};
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}80);
        border-radius: 2px;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
    }
    
    @media (max-width: 480px) {
        font-size: 28px;
    }
`;

export const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 700px;
    line-height: 1.6;
    margin: 0;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.9;
    
    @media (max-width: 768px) {
        font-size: 16px;
        max-width: 90%;
    }
    
    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 16px;
    font-weight: 600;
    overflow: hidden;
    backdrop-filter: blur(10px);
    background: ${({ theme }) => theme.primary}08;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const ToggleButton = styled.div`
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    
    ${({ active, theme }) =>
        active && `
        background: ${theme.primary};
        color: ${theme.white};
        `
    }
    
    &:hover {
        background: ${({ active, theme }) => active ? theme.primary : theme.primary + 15};
    }
    
    @media (max-width: 768px) {
        padding: 10px 16px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
    width: 100%;
    max-width: 1200px;
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 24px;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 400px;
    }
    
    @media (max-width: 480px) {
        max-width: 320px;
    }
`;
