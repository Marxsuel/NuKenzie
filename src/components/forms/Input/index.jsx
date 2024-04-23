import styles from "./style.module.scss";

export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div className={styles.inputBox}>
      <label className="body gray100" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={id}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
    </div>
  );
};
