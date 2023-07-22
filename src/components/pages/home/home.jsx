import Categories from "@/components/pages/home/sections/categories/categories";
import Industries from "@/components/pages/home/sections/industries/industries";
import ImageCarousel from "@/components/ui/image-carousel/image_carousal";
import Section from "@/components/ui/section/section";
import { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import Refill from "./sections/refill/refill";
import Training from "./sections/training/training";

const HomePage = () => {
  const x = [1, 1, 1, 1];

  const tempImages = x.map((y) => ({
    imgSrc: `/images/banner/${y}.jpg`,
    label: `/${y}`,
  }));

  return (
    <div>
      <ImageCarousel data={tempImages} />
      <Section title="Our Products">
        <Categories />
      </Section>
      <Section title="Training" bg="#262163" color='white'>
        <Training/>
      </Section>
      <Section title="Industries We Serve" bg="orange">
        <Industries />
      </Section>
      <Section>
        <Refill />
      </Section>
    </div>
  );
};

export default HomePage;
