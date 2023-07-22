const { Col, Image } = require("react-bootstrap");
import styles from "./serve_card.module.scss";

const ServeCard = (props) => {
  const { industry } = props;

  return (
    <Col xs={6} md={3} className={styles.col}>
      <div className={styles.serve_card}>
        <div className={styles.img_area}>
          <Image
            alt="industry"
            src={`/images/services/${industry.imageName}.jpg`}
            fill
            fluid
            width="100%"
          />
          <div className={styles.img_overlay} />
        </div>
        <div className={styles.details}>
          <h4>{industry?.head}</h4>
          <ul>
            {industry.points?.map((point) => {
              return <li key={Math.random()}>{point}</li>;
            })}
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default ServeCard;
