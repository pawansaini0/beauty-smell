import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Container,
  Input,
  Image,
  Text,
  Grid,
  Divider,
  Select,
} from "@chakra-ui/react";
import logo from "../images/BTd.png";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <Box bg="#65388b" h="1.7rem">
        <Flex gap="2rem" color="white" fontSize="13px">
          <Text>Corporate Gifts</Text>
          <Text>Store Locator</Text>
          <Select
            w="13rem"
            h="1.6rem"
            fontSize="13px"
            border="none"
            placeholder="International Delivery"
          >
            <option value="option1">India</option>
            <option value="option2">USA</option>
            <option value="option3">Canada</option>
          </Select>
        </Flex>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(3,1fr)",
          md: "repeat(6,1fr)",
          lg: "repeat(11,1fr)",
        }}
        gap="5px"
        justify="space-between"
      >
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt13b0f02cd71877df/5f08974a8b0e59084c9f7570/hd-logo-v3.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac334446d6f9e89c/5f96fc4f2425cd7a8af6845e/pmall_svg-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf0b1021465476e4f/5f08974b0d1d2008538ce15a/SharisLogo_r.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac303abaae751c40/5f08974af394777f87099a07/18b-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt71adcb0696952e83/5f08974baa5d1801639286b4/sch-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltef2e14ec247ab827/5f08974a2cd8e87f92bdd257/fb-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blte1e2eb25cfd09fb6/5f08974a91afb901b86d5251/cco-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf9903ccf2408c217/5f0897552cd8e87f92bdd25b/tpf-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt7ef824d3f9f5074d/5f0897558b0e59084c9f7574/wlf-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blta2ba2ac7606f6c15/5f08974bceebbf7e87c30215/sy-logo-v2.svg?height=32&width=78" />
        <Image src="https://images.contentstack.io/v3/assets/blt0281495b20b504a0/blta4f709f645453ff0/61b4eeeea000c90ecc6e15bd/VC_Logo_w_tag.svg?height=32&width=78" />
      </Grid>
      <Divider />
      <Box w="98%" margin="auto" className="navbar">
        <Flex alignItems="center" justify="space-between">
          <Link to="/" border="1px solid blue" >
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" alt="" w="80%"/>
          </Link>
          <Flex>
            <Input
              w={[100, 300, 400, 500]}
              type="text"
              placeholder="Enter Keyword or Product Number"
              borderRadius="2px"
            />
            <Button
              borderRadius="2px"
              bg="#65388b"
              color="white"
              className="searchBtn"
            >
              SEARCH
            </Button>
          </Flex>
          <Flex
            justify="space-between"
            fontSize="0.8rem"
            alignItems="center"
            gap={[1, 2, 8]}
          >
            <Box>
              <Image
                width="30px"
                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg"
                alt=""
              />
              <Text>Sign In</Text>
            </Box>
            <Box>
              <Image
                width="35px"
                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44"
                alt=""
              />
              <Text>My Orders</Text>
            </Box>
            <Box>
              <Image
                width="25px"
                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44"
                alt=""
              />
              <Text>Cart</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Divider borderRadius="10" borderColor="black" borderWidth="1px" />
      <DropDown />
      <Divider borderRadius="10" borderColor="black" borderWidth="1px " />
      <Box bg="#FAF5FF" h="4rem">
        <Text color="#553C9A" fontWeight="bold" pt="1.1rem">
          SAVE UP TO 40% ON TOP FLOWERS & GIFTS! | SHOP NOW >
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
