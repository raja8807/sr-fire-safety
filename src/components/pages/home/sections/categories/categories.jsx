import { Row } from "react-bootstrap";
import CategogryCard from "../../../../ui/cards/category-card/cartegory_card";
import PageHeading from "../../../../ui/section-heading/section_heading";

const Categories = () => {
  const categories = [
    {
      id: "1",
      categoryName: "extinguishers",
    },
    {
      id: "2",
      categoryName: "fire suppression system",
    },
    {
      id: "3",
      categoryName: "water-cafs system",
    },
  ];
  return (
    
      <Row>
        {categories.map(({ id, categoryName }) => {
          return <CategogryCard key={id} categoryName={categoryName} />;
        })}
      </Row>
    
  );
};

export default Categories;
