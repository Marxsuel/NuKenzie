import styles from "./style.module.scss";

export const AmountSection = ({ financeList }) => {
  const sum = financeList.reduce((count, finance) => {
    return finance.typeAmount === "entry"
      ? count + parseFloat(finance.amount)
      : count - parseFloat(finance.amount);
  }, 0);

  return (
    <section>
      {financeList.length === 0 ? (
        <></>
      ) : (
        <div className={styles.amountBox}>
          <span>
            <p className="title three">Valor total:</p>
            <p className="title three primary">
              {sum.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </span>
          <p className="body">O valor se refere ao saldo</p>
        </div>
      )}
    </section>
  );
};
