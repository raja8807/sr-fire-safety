import { Container } from "react-bootstrap";
import styles from "./header_top.module.scss";

const HeaderTop = () => {
  return (
    <div className={styles.top_header}>
      <Container className={styles.top_header_container}>
        <div>SR Fire and Safety Products</div>
        <div>+91 98765 41325</div>
      </Container>
    </div>
  );
};

export default HeaderTop;
