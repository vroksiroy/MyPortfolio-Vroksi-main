import styled from 'styled-components';

export const SubHeading = styled.div`
  margin: 96px 0 8px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  h3 {
    font-size: 28px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.ink};
  }
  @media (max-width: 768px) {
    margin-top: 64px;
  }
`
