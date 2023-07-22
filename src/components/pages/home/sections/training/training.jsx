const { Row, Col, Image } = require("react-bootstrap");

const Training = () => {
  return (
    <div style={{ color: "white" }}>
      <p>
        Well-equipped training ground with fire tender, ambulance and modern &
        latest equipment’s. Competent faculties from industry experienced with
        advance teaching techniques using LCD projector e-learning classes.
      </p>
      <br />
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Image src="/images/training/1.jpg" fill alt="trian" width="100%" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/images/training/2.jpg" fill alt="trian" width="100%" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/images/training/3.jpg" fill alt="trian" width="100%" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/images/training/4.jpg" fill alt="trian" width="100%" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/images/training/5.jpg" fill alt="trian" width="100%" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/images/training/6.jpg" fill alt="trian" width="100%" />
        </Col>
      </Row>
    </div>
  );
};

export default Training;
