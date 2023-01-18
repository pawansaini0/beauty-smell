import React from "react";
import { Box, Flex, Spacer, Button, ButtonGroup, Container ,Input} from "@chakra-ui/react";

const Navbar = () => {
  return (
    // <div className="navbar">
    //   <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" alt="" />
    //   <div>
    //     <input type="text" placeholder="SEARCH HERE" />
    //     <button>SEARCH</button>
    //   </div>
    //   <div className="navbar_icons">
    //     <img width="27px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt34a8699231b452d4/reminders_icon_black.svg" alt="" />
    //     <img width="30px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" alt="" />
    //     <img width="35px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44" alt="" />
    //     <img width="25px" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44" alt="" />
    //   </div>
    // </div>
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <img
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}"
            alt=""
          />
        </Box>
        <Container>
        <Input type="text" placeholder="Enter Keyword or Product Number" size='md' w="sm" />
        <Button bg="purple">SEARCH</Button>
        </Container>
       
        <ButtonGroup gap="2">
          <Button>Reminders</Button>
          <Button >Sign in</Button>
          <Button>My Orders</Button>
          <Button>Cart</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;
