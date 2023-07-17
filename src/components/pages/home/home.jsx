import ImageCarousel from "@/components/ui/image-carousel/image_carousal";
import { useEffect } from "react";
import { Image } from "react-bootstrap";

const HomePage = () => {

    
    const x = [1,1,1,1]

   const tempImages = x.map((y)=>(
    {
        imgSrc: `/images/banner/${y}.jpg`,
        label: `/${y}`,
    }
   ))

  return (
    <div>
      <ImageCarousel data={tempImages}/>
      <Image src="/images/temp.png" alt="xx" fluid/>
      <Image src="/images/temp.png" alt="xx" fluid/>
      <Image src="/images/temp.png" alt="xx" fluid/>
      <Image src="/images/temp.png" alt="xx" fluid/>
    </div>
  );
};

export default HomePage;
