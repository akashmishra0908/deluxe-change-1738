import React, { useEffect, useRef, useState } from "react";
import { Flex, IconButton, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Card from "../Card"
// import Card from "../LandingPageComponents/Card";

const Product = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    // Define the URL you want to fetch data from
    const url = `https://etutorhub-server.onrender.com/course`;

    fetch(url,
      {
        method: "GET",
        headers: {

          "Authorization": localStorage.getItem('frontendtoken')
        },
      })
      .then((res) => {

        if (res.ok) {

          return res.json();
        } else {

          throw new Error("Error: " + res.status);
        }
      })
      .then((data) => {
        setCourse(data.Course);

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);



  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, course.length - 1));
  };

  const cardWidth = 300; // Customize the width of each card here

  const sliderStyle = {
    transform: `translateX(-${currentIndex * cardWidth}px)`,
    transition: "transform 0.3s ease-in-out",
  };

  console.log(course)

  return (
    <Box overflow="hidden">
      <Flex >
        {course.map((item) => (
          <Box key={item.id} p={4} width={cardWidth}>
            <Card {...item} />
          </Box>
        ))}
      </Flex>
      {currentIndex > 0 && (
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          position="absolute"
          left={2}
          top="50%"
          transform="translateY(-50%)"
          _focus={{ outline: "none" }}
        />
      )}
      {currentIndex < course.length - 1 && (
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={handleNextSlide}
          aria-label="Next Slide"
          position="absolute"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          _focus={{ outline: "none" }}
        />
      )}
    </Box>
  );
};

export default Product;