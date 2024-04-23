import { DefaultTemplate } from "../../components/DefaultTemplate";
import { NuFinanceBody } from "../../components/NuFinanceBody";
import "../../styles/index.scss";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <NuFinanceBody />
    </DefaultTemplate>
  );
};
