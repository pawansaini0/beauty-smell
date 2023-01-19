import { Grid, GridItem, Box, Link, Image, Container } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#7b2cbf" pb="5rem">
      <Grid
        justify="space-evenly"
        fontSize="sm"
        lineHeight="200%"
        w="90%"
        margin="auto"
        textAlign="start"
        templateColumns="repeat(5, 1fr)"
        gap={20}
        pb="3rem"
        pt="3rem"
        color="white"
      >
        <Box>
          <GridItem fontWeight="bold" fontSize="lg">
            MORE WAYS TO SHOP
          </GridItem>
          <GridItem> Flower Delivery Same-Day</GridItem>
          <GridItem>Flowers Arrangements</GridItem>
          <GridItem>Sympathy Flowers & Gifts</GridItem>
          <GridItem> Roses</GridItem>
          <GridItem>Birthday Flowers & Gifts</GridItem>
          <GridItem>Flower Subscriptions</GridItem>
          <GridItem>Plants </GridItem>
          <GridItem>Gift Baskets & Food</GridItem>
          <GridItem> Valentine’s Day Flowers</GridItem>
          <GridItem>International Flower Delivery</GridItem>
          <GridItem> Find a Local Florist </GridItem>
          <GridItem>Corporate Gifts</GridItem>
          <GridItem> Chocolate Covered Strawberries</GridItem>
          <GridItem> Marketplace Sellers </GridItem>
          <GridItem>Sitemap</GridItem>
        </Box>
        <Box>
          <GridItem fontWeight="bold" fontSize="lg">
            CUSTOMER SERVICE
          </GridItem>
          <GridItem>Customer Service</GridItem>
          <GridItem>COVID-19 Updates</GridItem>
          <GridItem> eGift Cards</GridItem>
          <GridItem>Contact Us</GridItem>
          <GridItem>Do Not Sell My Personal Information</GridItem>
          <GridItem>Allergy Warning</GridItem>
          <GridItem>Funeral/Sympathy Advisors</GridItem>
          <GridItem>Smile Guarantee</GridItem>
          <GridItem fontWeight="bold" fontSize="lg">
            VETERANS ADVANTAGE
          </GridItem>
          <GridItem>Get Exclusive Military Discounts Everyday</GridItem>
        </Box>
        <Box>
          <GridItem fontWeight="bold" fontSize="lg">
            OUR STORES
          </GridItem>
          <GridItem>Store Locator</GridItem>
          <GridItem>Franchise Opportunities</GridItem>
          <GridItem>Local DIY Events</GridItem>
          <GridItem fontWeight="bold" fontSize="lg">
            ACCOUNT LOGIN
          </GridItem>
          <GridItem>Sign In to Your Account</GridItem>
        </Box>
        <Box>
          <GridItem fontWeight="bold" fontSize="lg">
            CORPORATE
          </GridItem>
          <GridItem>About Us</GridItem>
          <GridItem>Our Brands</GridItem>
          <GridItem>Social Responsibility</GridItem>
          <GridItem>Careers</GridItem>
          <GridItem>News & Media</GridItem>
          <GridItem>Investors</GridItem>
          <GridItem fontWeight="bold" fontSize="lg">
            AFFILIATE PROGRAM
          </GridItem>
          <GridItem>Become an Affiliate</GridItem>
          <GridItem fontWeight="bold" fontSize="lg">
            OUR BLOG
          </GridItem>
          <GridItem>Petal Talk Blog</GridItem>
          <GridItem>Julie’s Corner</GridItem>
          <GridItem>Jim’s Corner</GridItem>
        </Box>

        <Box>
          <GridItem fontWeight="bold" fontSize="lg">
            FOLLOW US
          </GridItem>
          <Grid templateColumns="repeat(3, 1fr)" gap={2} fontSize="1rem">
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt787e53ec7675db95/5ee1016e26fd9f3b64a5abe7/social-icon-twitter.png" />
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt71c1a01174910073/5ee101831579a83a8b80b9ad/social-icon-facebook.png" />
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt78b7b39043ac2de3/5ee101965cffd6317204ad4a/social-icon-instagram.png" />
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt6ae8236f023d5359/5ee101a4f2c45903a4be0b8b/social-icon-pinterest.png" />
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd439ba082738790/5ee101b758284c442bf7faea/social-icon-youtube.png" />
          </Grid>
        </Box>
      </Grid>
      <Container color="white" fontSize="sm">
        © 2023 1-800-Flowers.com, Inc., Jericho, NY Family of BrandsTerms of
        Use-Privacy Notice-Accessibility Statement
      </Container>
    </Box>
  );
};

export default Footer;
