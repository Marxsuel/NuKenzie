import { ItemCard } from "./ItemCard";
import styles from "./style.module.scss";

export const ListSection = ({ removeFinance, financeList }) => {
  return (
    <section className={styles.display}>
      {financeList.length === 0 ? (
        <div>
          <h2 className="title three">Resumo financeiro</h2>
          <p className=" title two">Você ainda não possui nenhum lançamento</p>
        </div>
      ) : (
        <div>
          <h2 className="title three">Resumo financeiro</h2>
          <ul>
            {financeList.map((finance) => (
              <ItemCard
                key={finance.id}
                title={finance.title}
                amount={finance.amount}
                id={finance.id}
                typeAmount={finance.typeAmount}
                removeFinance={removeFinance}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
