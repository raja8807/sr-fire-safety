import { Container } from "react-bootstrap";
import styles from "./header_top.module.scss";
import { PHONE_NUMBER,COMPANY_NAME } from "@/constants/contact";
import {TelephoneFill} from 'react-bootstrap-icons'

const HeaderTop = () => {
  return (
    <div className={styles.top_header}>
      <Container className={styles.top_header_container}>
        <div>{COMPANY_NAME}</div>
        <div><TelephoneFill/>{PHONE_NUMBER}</div>
      </Container>
    </div>
  );
};

export default HeaderTop;
