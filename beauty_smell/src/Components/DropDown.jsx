import React from "react";
import {Grid} from "@chakra-ui/react"
const DropDown = () => {
  return (
    <Grid templateColumns={{base:"repeat(3,1fr)",md:"repeat(5,1fr)",lg:"repeat(10,1fr)"}}>
      <div className="dropdown">
        <button className="dropbtn">VALENTINE'S</button>
        <div className="dropdown-content">
          <div>
            <b>Valentine's</b>
            <a href="#">All Valentine's Flowers & gifts</a>
            <a href="#">Valentine's Best Sellers</a>
            <a href="#">Flower Subscriptions</a>
            <br />
            <b>Shop by Flowers & Plants</b>
            <a href="#">Valentine's Day Bouquets</a>
            <a href="#"> Valentine's Day Plants</a>
          </div>
          <div>
            <b>Shop by Gourmet Food & Treats</b>
            <a href="#">Flowers & berries</a>
            <a href="#">Luxury Flowers & Gifts</a>
            <a href="#">Magnificent Preserved Roses</a>
            <a href="#">Valentine's Day Roses</a>
            <a href="#">Farm Fresh Flowers</a>
          </div>
          <div>
            <b>Shop by Gifts & More</b>
            <a href="#">All Keepsake Gifts</a>
            <a href="#">Personalized Valentine's Gifts</a>
            <a href="#">Alice's Table Workshops</a>
            <a href="#">Candles & Lanterns</a>
          </div>
          <div>
            <b>Shop by Racipient</b>
            <a href="#">Valentine's Gifts for Her</a>
            <a href="#">Valentine's Gifts for Him</a>
            <a href="#">Valentine's Gifts for Friends</a>
            <a href="#">Valentine's Gifts for Kids</a>
          </div>
          <div>
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3dac8a81a0aa5cb0/63c18941c390e401fbbadc5b/valentines-gift-baskets-gourmet-food-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}"
              alt=""
            />
            <a href="#">
              <b>Valentine's Gourmet Food & Treats</b>
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">BIRTHDAY</button>
        <div className="dropdown-content">
          <div>
            <b>Birthday</b>
            <a href="#">All Birthday Gifts</a>
            <a href="#">Birthday Best Sellers</a>
            <a href="#">Birthday Gift Guide</a>
            <a href="#">Flower Subscription</a>
            <a href="#">Same-Day Delivery</a>
            <br />
            <b>Shop by Product</b>
            <a href="#">Birthday Flowers</a>
          </div>
          <div>
            <a href="#">Party Supplies</a>
            <a href="#">Plants</a>
            <b>Shop by Gourment Food</b>
            <a href="#">Birthday Cakes</a>
            <a href="#">Chocolate Gifts</a>
            <a href="#">Fruit Bouquets</a>
            <a href="#">Sweet & Spicy</a>
            <a href="#">Chocolate Covered Strawberries</a>
          </div>
          <div>
            <b>Gifts & More</b>
            <a href="#">All Keepsake Gifts</a>
            <a href="#">Gifts Sets</a>
            <a href="#">Jewelry </a>
            <a href="#">Teddy Bears & More</a>
            <a href="#">Spa & Aromatherapy</a>
          </div>
          <div>
            <b>Shop by Recipient </b>
            <a href="#">Gifts for Mom</a>
            <a href="#">Gifts for Her</a>
            <a href="#">Gifts for Kids</a>
            <a href="#">Gifts for Him</a>
            <a href="#">Gifts for Friends</a>
            <a href="#">Gifts for Wife</a>
          </div>
          <div>
            <img
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf17b34ccacec190d/624524c196ee250ebe231f72/birthday-flower-subscriptions-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}"
              alt=""
            />
            <a href="#">
              <b>Birthday Flowers Subscription ></b>
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">SYMPATHY</button>
        <div className="dropdown-content">
          <div>
            <b>Sympathy</b>
            <a href="#">all Sympathy</a>
            <br />
            <b>Shop by Product</b>
            <a href="#">Flowers</a>
            <a href="#">Plants</a>
            <a href="#">Remembrance Gifts </a>
            <a href="#">Faith-Inspired Gifts</a>
            <a href="#">Personalized Gifts</a>
          </div>
          <div>
            <b>Shop by Location</b>
            <a href="#">Cremation Flowers</a>
            <a href="#">Funeral Flowers for Service</a>
            <a href="#">Same-Day Delivery</a>
            <br />
            <b>Gourment Food Gifts</b>
            <a href="#">Gifts Baskets & Food</a>
            <a href="#">Fruits Bouquets</a>
          </div>
          <div>
            <b>Cremation</b>
            <a href="#">For Cremation Services</a>
            <a href="#">Memorial Gardens</a>
            <a href="#">Same-Day Delivery</a>
            <br />
            <b>Resources</b>
            <a href="#">Connection Communities</a>
            <a href="#">Etiquette & Advice</a>
            <a href="#">Floral Heart Project</a>
          </div>
          <div>
            <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta1372fb9dc484c24/62452545b55a330eea751d7c/sympathy-gift-baskets-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}" alt="" />
            <b>Sympathy Gift Baskets ></b>
          </div>
          {/* <div>
            <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt15795b74bbd909ea/6363d6003e21aa31cd7b2c9e/tribute-send-a-free-group-video-sympathy-global-nav-banner-280x280.jpg?quality=70&auto=webp&optimize={medium}" alt="" />
            <b>Send a Free Froup Vidoe ></b>
          </div> */}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">OCCASIONS</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">FLOWERS</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">PLANTS</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">SALE</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">COMMUNITY</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">GIFTS & MORE</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">FAST DELIVERY</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </Grid>
  );
};

export default DropDown;
