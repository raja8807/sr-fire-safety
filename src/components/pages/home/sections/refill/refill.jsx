import CustomButton from "@/components/ui/custom-button/custom_button";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./refill.module.scss";

const Refill = () => {
  return (
    <Row className={styles.refill}>
      <Col md={6}>
        <Image src="/images/refill.jpg" alt="refill" fill fluid />
      </Col>
      <Col md={6} className={styles.right}>
        <div className={styles.content}>
          <h3>REFILLING SERVICES</h3>
          <b>
            Fire extinguishers need to be recharged immediately after each use
          </b>
          <p>
            If the extinguishing agent inside was not completely discharged, the
            extinguisher still needs to be serviced in order to make sure itâ€™s
            ready for its next use
          </p>
          <b>
            Fire extinguishers need to be recharged periodically throughout
            their life
          </b>
          <p>
            The statutory framework in the country makes it mandatory to refill
            your fire extinguisher
          </p>
        </div>
        <div className={styles.btns}>
          <CustomButton>Know More</CustomButton>
          <CustomButton
            customeStyle={{
              backgroundColor: "red",
            }}
          >
            Request For Refilling
          </CustomButton>
        </div>
      </Col>
    </Row>
  );
};

export default Refill;
