import { Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// import sectionImage from "../../asset/sectionImage.png";
const Section6 = () => {
  return (
    <Container maxWidth={"100%"} paddingBottom={"10px"}>
    <Flex
      bgColor={"#ebf3ff"}
      gap={{
        sm: "20px",
        md: "35px",
        lg: "45px",
      }}
      p={{
        sm: "0px 20px",
        md: "0px 40px",
        lg: "0px 60px",
      }}
      direction={{
        sm: "column",
        md: "column",
        lg: "row",
      }}
    >
      <Flex minW={"40%"}>
        <Image src={"https://nemskillhub.netlify.app/static/media/sectionImage.fa7d1d6d7d5793fca7ed.png"} objectFit="contain" />
      </Flex>
      <Flex
        direction={"column"}
        padding={{
          sm: "20px 10px",
          md: "30px 15px",
          lg: "40px 20px",
        }}
        gap={{
          sm: "15px",
          md: "25px",
        }}
        justifyContent={{
          lg: "space-evenly",
        }}
      >
        <Text
          fontSize={{
            sm: "25px",
            md: "35px",
            lg: "45 px",
          }}
        >
          Learner outcomes on <b style={{ color: "#a435f0" }}>eTutorHub</b>
        </Text>
        <Text
          fontFamily={"poppins"}
          fontSize={{
            sm: "12px",
            md: "14px",
            lg: "16px",
          }}
        >
          According to a recent report by eTutorHub (2023),{" "}
          <span>
            <b>87% of learners experienced career benefits</b>
          </span>
          , including promotions, improved job performance, job transitions,
          increased employability, and skill development. eTutorHub's
          comprehensive curriculum and recognized certifications contributed to
          learners' professional growth, enabling them to stay relevant in
          today's competitive job market.
        </Text>
        <Flex>
          <Button
            bgColor={"#a435f0"}
            _hover={{ backgroundColor: "#9900ff" }}
            color={"white"}
            p={{
              sm: "10px 20px",
              md: "15px 30px",
              lg: "25px 45px",
            }}
          >
            Join for Free
          </Button>
        </Flex>
      </Flex>
    </Flex>
    </Container>
  );
};

export default Section6;