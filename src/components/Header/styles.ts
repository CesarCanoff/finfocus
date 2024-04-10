import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.GRAY_900};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.YELLOW_300};
  color: ${({ theme }) => theme.WHITE};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transition: background-color 0.7s;

    background-color: ${({ theme }) => theme.GRAY_800};
    border: 1px solid ${({ theme }) => theme.YELLOW_300};
  }
`
