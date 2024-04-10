import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme.GRAY_900};
    color: ${({ theme }) => theme.GRAY_300};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.GRAY_500};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.YELLOW_300};
    color: ${({ theme }) => theme.YELLOW_300};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.YELLOW_300};
      border: 1px solid ${({ theme }) => theme.YELLOW_300};
      color: ${({ theme }) => theme.WHITE};
      transition: background-color 0.2s color 0.2s border-color 0.2s;
    }
  }
`
