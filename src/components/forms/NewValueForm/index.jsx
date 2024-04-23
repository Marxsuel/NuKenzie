import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
import styles from "./style.module.scss";

export const NewValueForm = ({ addFinance }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [typeAmount, setTypeAmount] = useState("entry");

  const submit = (event) => {
    event.preventDefault();
    addFinance({ title, amount, typeAmount });
    setTitle("");
    setAmount("");
    setTypeAmount("entry");
  };

  return (
    <form className={styles.display} onSubmit={submit}>
      <Input
        label="Descrição"
        id="description"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={title}
        setValue={setTitle}
      />
      <p className="body">Ex: Compra de roupas</p>
      <Input
        label="Valor (R$)"
        id="amount"
        type="number"
        placeholder="Digite aqui o valor"
        value={amount}
        setValue={setAmount}
      />
      <Select
        setValue={setTypeAmount}
        value={typeAmount}
        id="typeAmont"
        label="Tipo do valor"
      >
        <option value="entry">Entrada</option>
        <option value="exit">Despesa</option>
      </Select>
      <button className="bnt-pink" type="submit">
        Inserir valor
      </button>
    </form>
  );
};
