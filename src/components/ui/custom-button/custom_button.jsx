import styles from "./custom_button.module.scss";

const CustomButton = (props) => {
  const { children, clickHandler = () => {}, disabled,customeStyle } = props;

  return (
    <button
      onClick={() => {
        clickHandler();
      }}
      className={`${styles.custom_button} ${
        disabled ? styles.disabled : styles.active
      }`}
      // disabled
      disabled={disabled}
      style={customeStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;
