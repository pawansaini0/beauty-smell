import React from "react";
import {
  Grid,
  Box,
  Heading,
  HStack,
  Container,
  Image,
  Spacer,
} from "@chakra-ui/react";
import source from "../images/bg.png";
const LandingPage = () => {
  return (
    <div>
      <img
        src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}"
        alt=""
      />
      <Heading>Send Flowers & Exclusive Gifts</Heading>
      <HStack>
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5eb232318d3a6d1e/637e8388deb37610ecbb8e31/flower-delivery-same-day-silo-167891-260x284.jpeg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltaaf1443ffe30236a/601d6d92f13a6d4c0c256dba/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt358c381bc15c10ef/63bdb18a2effe86502073b30/chocolate-covered-strawberries-delivery-silo-192546-260x284.jpg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt180dd3fd2c5f4596/63bdb1a3ee0cf115ce1fc07c/just-because-flowers-silo-90577mprsv1-260x284.jpg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
      </HStack>
      <Container maxW="6xl" maxH="md">
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltfc69d1be54851e61/63a5bbef81b6d37de803b31d/gift-more-marketplace-winter-edit-hero.jpg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
      </Container>
      <Box>
        <Heading>Explore Our Self-Care Essentials</Heading>
        <HStack>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt204357e08752a3bc/63a61ea27760ab1f00affbb1/gifts-under-25-silo-mk018491-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
        </HStack>
      </Box>
      <Container maxW="6xl">
        <Grid templateColumns="repeat(2, 1fr)" gap={9}>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4e2cd58eaa3200f8/63afaf864efa494a5213dfdd/orchid-flowers-foty-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt68280c5448a46856/63afafc33d631e106c3e825a/calathea-rattlesnake-poty-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltb226b1cececd4ed7/63a5fe37b5b2a64bae67768f/gift-baskets-sale-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf4ce2ef4d91ca4c8/63a5fe827584ac23822d817e/keepsake-gifts-sale-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
        </Grid>
      </Container>
        <Spacer />
      <Container maxW="6xl">
        <Image src={source} alt="Dan Abramov" />
      </Container>
    </div>
  );
};

export default LandingPage;
