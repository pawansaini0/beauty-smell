import React from "react";
import axios from "axios";
import { Text, Grid, Box, Image, Container,Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://beautyapi.onrender.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Flex mt="2rem">
        <Container w="15rem" ml="1rem" p="2rem" h="20rem" border="1px solid">
          <u>Anniversary Flowers & Gifts</u>
          <u>Congratulations Flowers & Gifts</u>
          <u>Get Well Flowers & Gifts</u>
          <u>Just Because Flowers & Gifts</u>
          <u>Thank You Flowers & Gifts</u>
          <u>Wedding Flowers & Gifts</u>
          <u>Empathy Gifts</u>
          <u>Love & Romance</u>
        </Container>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap="1rem"
          ml="2rem"
          mr="1rem"
          mb="2rem" 

          // boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        >
          {data.map((elem) => {
            return (
              <div>
                <Image w="19rem" src={elem.image} alt="" />
                <Text>{elem.title}</Text>
                <b>${elem.price}</b>
              </div>
            );
          })}
        </Grid>
      </Flex>
      <Footer />
    </div>
  );
};

export default Products;
