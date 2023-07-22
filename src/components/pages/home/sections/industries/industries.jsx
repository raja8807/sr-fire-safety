const { Row } = require("react-bootstrap");
const {
  default: ServeCard,
} = require("../../../../ui/cards/serve-card/serve-card");

const Industries = () => {
  const industries = [
    {
      id: "1",
      head: "HOME & CAR",
      points: ["ABC Dry Powder", "K Class", "CO2 Type"],
      imageName:'home'
    },
    {
        id: "2",
        head: "OFFICES",
        points: ["Clean Agent Type", "ABC Dry Powder", "CO2 Type"],
        imageName:'office'
    },
    {
        id: "1",
        head: "SCHOOLS & COLLEGE",
        points: ["Watermist", "ABC Dry Powder", "Foam Type"],
        imageName:'schools'
    },
    {
        id: "1",
        head: "HOTEL & RESTAURANTS",
        points: ["Watermist", "Clean Agent Type", "CO2 Type"],
        imageName:'hotel'
    },
  ];

  return (
    <Row>
      {industries.map((industry) => {
        return <ServeCard key={industry.id} industry={industry} />;
      })}
    </Row>
  );
};

export default Industries;
