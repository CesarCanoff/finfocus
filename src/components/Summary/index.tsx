import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useTheme } from "styled-components";

export function Summary() {
  const theme = useTheme();
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Income</p>
          <ArrowCircleUp
            size={32}
            color={theme.GREEN_400}
          />
        </header>

        <strong>$19.290,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <p>Outcome</p>
          <ArrowCircleDown
            size={32}
            color={theme.RED_500}
          />
        </header>

        <strong>$290,00</strong>
      </SummaryCard>

      <SummaryCard varient="yellow">
        <header>
          <p>Total</p>
          <CurrencyDollar
            size={32}
            color={theme.YELLOW_300} />
        </header>

        <strong>$19.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
