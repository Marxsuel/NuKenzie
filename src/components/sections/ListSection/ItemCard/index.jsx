import styles from "./style.module.scss";

export const ItemCard = ({ title, amount, typeAmount, id, removeFinance }) => {
  return (
    <li className={styles.cardBox}>
      <div
        className={typeAmount === "entry" ? styles.entry : styles.exit}
      ></div>
      <div className={styles.boxData}>
        <div className={styles.boxContent}>
          <p className="title three">{title}</p>
          <p className="body gray100">
            {typeAmount === "entry" ? "Entrada" : "Despesa"}
          </p>
        </div>
        <div className={styles.boxTrash}>
          <p className="body gray100">
            {parseFloat(amount).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button className="btn-trash" onClick={() => removeFinance(id)}>
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
