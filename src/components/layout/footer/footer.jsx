import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.scss";
import Logo from "@/components/ui/logo/logo";
import { EMAIL, PHONE_NUMBER,ADDRESS, COMPANY_NAME } from "@/constants/contact";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
      <div className={styles.logo_area}> 
      <Logo />
        <h1>{COMPANY_NAME}</h1>
      </div>
        {/* <br/> */}
        <Row>
          <Col xs={6} md={6} lg={4} className={styles.col}>
            <h4>Contact Us</h4>
            <p>{ADDRESS.address_line_1},</p>
            <p>{ADDRESS.address_line_2},</p>
            <p>{ADDRESS.city},</p>
            <p>{ADDRESS.district},</p>
            <p>Pin : {ADDRESS.pin}</p>

            <br/>

            <p>Phone : <span>{PHONE_NUMBER}</span></p>
            <p>Email : <span>{EMAIL}</span></p>
          </Col>
         <Col xs={6} md={6} lg={4} className={styles.col}>
            <h4>OUR PRODUCTS</h4>
            <Link href='#'>EXTINGUISHERS</Link>
            <Link href='#'>FIRE SUPPRESSION SYSTEM</Link>
            <Link href='#'>WATER-CAFS SYSTEM</Link>
          </Col>
         <Col xs={6} md={6} lg={4} className={styles.col}>
            <h4>OUR SERVICES</h4>
            <Link href='#'>TRAINING</Link>
            <Link href='#'>REFILLING SERVICE</Link>
            {/* <Link href='#'>WATER-CAFS SYSTEM</Link> */}
          </Col>
          
          
        </Row>
        <hr/>
      </Container>
    </footer>
  );
};

export default Footer;
