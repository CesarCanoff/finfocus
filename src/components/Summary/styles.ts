import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  varient?: "yellow";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme }) => theme.GRAY_600};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.GRAY_300};
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
    }
  }

  ${({ theme, varient }) =>
    varient === "yellow" &&
    css`
      color: ${theme.YELLOW_300};
    `}
`;
