import Image from "react-bootstrap/Image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./image_cariusal.module.scss";
import CustomButton from "../custom-button/custom_button";

function ImageCarousel(props) {
  const { data = [] } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            <div className={styles.imgContainer}>
              <Image src={image.imgSrc} fill alt={image.label} fluid />
              <div className={styles.text_comp}>
                {/* <p>What we do?</p>
               <h1> We Provide The Best Protection System For</h1>
               <hr/>
               <h3>Industrial, Commercial & Residential</h3> */}
              <CustomButton>Contact Us</CustomButton>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ImageCarousel;
