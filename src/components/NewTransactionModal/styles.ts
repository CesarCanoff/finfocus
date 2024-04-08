import styled, { css } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.GRAY_800};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme.GRAY_900};
      padding: 1rem;
      color: ${({ theme }) => theme.GRAY_300};

      &::placeholder {
        color: ${({ theme }) => theme.GRAY_500};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;
      background-color: ${({ theme }) => theme.YELLOW_500};
      color: ${({ theme }) => theme.WHITE};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.YELLOW_700};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;

  top: 1.4rem;
  right: 1.3rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.GRAY_500};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.4rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme.GRAY_700};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.GRAY_300};

  svg {
    color: ${({ theme, variant }) =>
      variant === "income" ? theme.GREEN_400 : theme.RED_500};
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.GRAY_600};
  }

  &[data-state="checked"] {
    ${({ theme, variant }) => css`
      color: ${theme.WHITE};
      background-color: ${variant === "income"
        ? theme.GREEN_400
        : theme.RED_700};
    `}

    svg {
      color: ${({ theme }) => theme.WHITE};
    }
  }
`;
