import styles from "./style.module.scss";

export const Select = ({ children, id, label, value, setValue }) => {
  return (
    <div className={styles.selectBox}>
      <label className="body gray100" htmlFor={id}>
        {label}
      </label>
      <select
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        name={id}
        id={id}
      >
        {children}
      </select>
    </div>
  );
};
