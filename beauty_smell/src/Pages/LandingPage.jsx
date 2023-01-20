import React from "react";
import {
  Grid,
  Box,
  Heading,
  HStack,
  Container,
  Image,
  Spacer,
  Text,
  Flex,
  Center,
  Highlight,
} from "@chakra-ui/react";
import source from "../images/bg.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Image
        src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}"
        alt=""
      />
      <Heading mt="4rem" mb="1rem">
        Send Flowers & Exclusive Gifts
      </Heading>
      <Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(6,1fr)"}}>
        <Box>
          <Image
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5eb232318d3a6d1e/637e8388deb37610ecbb8e31/flower-delivery-same-day-silo-167891-260x284.jpeg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <Text>Same-Day Flower Delivery</Text>
        </Box>
        <Box>
          <Image
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltaaf1443ffe30236a/601d6d92f13a6d4c0c256dba/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <Text>Love & Romance</Text>
        </Box>
        <Box>
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <Text>Chocolate Covered Strawberries</Text>
        </Box>
        <Box>
          <Image
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <Text>Just Because</Text>
        </Box>
        <Box>
          <Image
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt358c381bc15c10ef/63bdb18a2effe86502073b30/chocolate-covered-strawberries-delivery-silo-192546-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <Text>New Baby</Text>
        </Box>
        <Box>
          <Image
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt180dd3fd2c5f4596/63bdb1a3ee0cf115ce1fc07c/just-because-flowers-silo-90577mprsv1-260x284.jpg?quality=75&auto=webp&optimize={medium}"
            alt=""
          />
          <Text>Get Well</Text>
        </Box>
      </Grid>
      <Container mt="4rem" mb="2rem" maxW="6xl" maxH="md">
        <img
          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltfc69d1be54851e61/63a5bbef81b6d37de803b31d/gift-more-marketplace-winter-edit-hero.jpg?quality=75&auto=webp&optimize={medium}"
          alt=""
        />
      </Container>
      <Box>
        <Heading>Explore Our Self-Care Essentials</Heading>
        <Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(6,1fr)"}} margin="auto" mb="3rem">
          <Box>
            <Image
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <Text>Spa Gifts</Text>
          </Box>
          <Box>
            <Image
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <Text>Candles & Lanterns</Text>
          </Box>
          <Box>
            <Image
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt204357e08752a3bc/63a61ea27760ab1f00affbb1/gifts-under-25-silo-mk018491-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <Text>Gifts Under $25</Text>
          </Box>
          <Box>
            <Image
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <Text>Zen & Relaxation</Text>
          </Box>
          <Box>
            <Image
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <Text>Lavender Gifts</Text>
          </Box>
          <Box>
            <Image
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?quality=75&auto=webp&optimize={medium}"
              alt=""
            />
            <Text>Cozy Comfort</Text>
          </Box>
        </Grid>
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
        <Image mt="2rem" src={source} alt="Dan Abramov" />
      </Container>
      <Spacer />
      <Heading mt="2rem">Offer Comfort With Sympathy Flowers & Gifts</Heading>
      <Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(6,1fr)"}}>
        <Box>
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2a407a6a54d38487/63c1ce615156964aea4347db/funeral-arrangements-silo-148752-260x284.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text>Funeral Arrangements</Text>
        </Box>
        <Box>
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}" />
          <Text>For The Family</Text>
        </Box>
        <Box>
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltea2dacf314796c21/63c1ce906bf00e62d437f92d/sympathy-plants-silo-101980-260x284.jpeg?quality=75&auto=webp&optimize={medium}" />
          <Text>Plants</Text>
        </Box>
        <Box>
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7c9e9d4a2198fa1e/63c1ceb606d8a07b811ae1e3/sympathy-same-day-delivery-silo-148685-260x284.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text>Same-Day Delivery</Text>
        </Box>
        <Box>
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5dcd51ccaacd3721/63c1ceef881b107c49c5e885/gift-baskets-sympathy-silo-96275dx-260x284.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text>Gift Baskets</Text>
        </Box>
        <Box>
          <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt1e51da89f5d53b69/63c1cf15e6cd4a7779d9f21b/sympathy-remembrance-gifts-silo-97343l-260x284.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text>Remembrance Gifts</Text>
        </Box>
      </Grid>
      <Heading mt="4rem" mb="2rem">
        Trending Flowers & Gifts
      </Heading>
      <Grid gap="1rem" width="90%" templateColumns={{base:"repeat(3,1fr)",md:"repeat(4,1fr)",lg:"repeat(7,1fr)"}}  margin="auto">
        <Box>
          <Image src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipez.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}>Floral Embrace™</Text>
          <Text fontWeight="bold">Starting From $39.99</Text>
        </Box>
        <Box>
          <Image src="https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlz.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}>Daydream Bouquet™</Text>
          <Text fontWeight="bold">Starting From $49.99</Text>
        </Box>
        <Box>
          <Image src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90925mpuv5ch29z.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}>Two Dozen Assorted</Text>
          <Text fontWeight="bold">Starting From $59.99</Text>
        </Box>
        <Box>
          <Image src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlz.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}>Garden of Grandeur®</Text>
          <Text fontWeight="bold">Starting From $74.99</Text>
        </Box>
        <Box>
          <Image src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4ch31z.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}>Two Dozen Red </Text>
          <Text fontWeight="bold">Starting From $59.99</Text>
        </Box>
        <Box>
          <Image src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/158086lgwcz.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}> Graceful Gardenia</Text>
          <Text fontWeight="bold">Starting From $39.99</Text>
        </Box>
        <Box>
          <Image src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlz.jpg?quality=75&auto=webp&optimize={medium}" />
          <Text noOfLines={1}>Lovely Lavender</Text>
          <Text fontWeight="bold">Starting From $49.99</Text>
        </Box>
      </Grid>
      <Box>
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltacd983b63a7ffb07/63c5ccc2eeda2410c17f4286/Post_Enrollment_Desktop_V2_Image_(2).png?quality=75&auto=webp&optimize={medium}" />
      </Box>
      <Container>
        <Flex fontSize="xl" mt="3rem" mb="1rem">
          <Image
            w="30px"
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
          />
          <Text fontFamily="font-family: PlayfairDisplayRegular, serif">
            <Highlight
              query="#MadeMeSmile"
              styles={{ fontWeight: "bold" }}
              fontSize="2xl"
            >
              Share Your #MadeMeSmile Flowers Moment
            </Highlight>
          </Text>
        </Flex>
      </Container>
      <Grid templateColumns="repeat(4, 1fr)" gap={3}>
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte2a16fdd5ffe3f9b/63a6027fd70a0827292d3e8f/ugc-image-charming-garden-bouquet.jpg?quality=75&auto=webp&optimize={medium}" />
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltea45456133e4ec47/63a602e7eee5ef585b469cab/ugc-image-peperomia-baby-rubber-plant.jpg?quality=75&auto=webp&optimize={medium}" />
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e6ea64769f54f55/63a603239d04dd206dffc01d/ugc-image-lovely-lavender-medley-winter.jpg?quality=75&auto=webp&optimize={medium}" />
        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt19f3d333358d845a/63a6035320e5a54e6ea886ac/ugc-image-magnificent-roses-preserved-blue-velvet-roses.jpg?quality=75&auto=webp&optimize={medium}" />
      </Grid>

 

      <Footer />
    </Box>
  );
};

export default LandingPage;
