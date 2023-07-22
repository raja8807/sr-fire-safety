import { Col, Image } from "react-bootstrap";
import CustomButton from "../../custom-button/custom_button";
import styles from "./category_card.module.scss";

const CategogryCard = (props) => {

  const { categoryName } = props;

  return (
    <Col md={4} lg={4} xl={4} className={styles.category_card}>
      <div>
        <Image
          alt="category-img"
          src={`/images/categories/${categoryName}.jpg`}
          fill
          width="100%"
        />
      </div>
      <CustomButton
        customeStyle={{
          width: "100%",
          height: '50px'
        }}
      >
        {
            categoryName?.toUpperCase()
        }
      </CustomButton>
    </Col>
  );
};
export default CategogryCard;
