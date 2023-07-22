const { Container } = require("react-bootstrap");
const { default: PageHeading } = require("../section-heading/section_heading");

const Section = (props) => {
  const { children, title, bg = "white", color } = props;
  return (
    <div style={{backgroundColor:bg,padding:'40px 0px 10px 0px'}}>
      <Container>
        <PageHeading heading={title}  color={color}/>
        {children}
      </Container>
    </div>
  );
};

export default Section;
