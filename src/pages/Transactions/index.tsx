import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHighlight variant="income">
                  $ 12.750,00
                </PriceHighlight>
              </td>
              <td>Sales</td>
              <td>23/08/2024</td>
            </tr>

            <tr>
              <td width="50%">Personal Transport</td>
              <td>
                <PriceHighlight variant="outcome">
                  $ 550,00
                </PriceHighlight>
              </td>
              <td>Transportation</td>
              <td>31/05/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}