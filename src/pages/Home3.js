import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import BrandSlider from "../components/BrandSlider";
import {
  fetchBannerData,
  fetchProductDataOld,
  AddWishlistFetch,
  fetchWishlistData,
  AddCardProductById,
  GetAddCardProductById,
  GetCardProductById,
} from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeartButton from "../components/heartbutton";
import "./innerstyle.css";
import { message } from "antd";
import SplashScreen from "../components/SplashScreen";
import SnsSl from "../components/SnsSl";
const Home3 = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState({}); // Initial number of products to display for each brand
  const userId = localStorage.getItem("userId");
  const [hoveredProductId, setHoveredProductId] = useState("");

  const { data, loading: bannerLoading, error: bannerError } = useSelector(
    (state) => state.data
  );
  const {
    wishlist,
    addloading: addloadingLoading,
    error: productListErrors,
  } = useSelector((state) => state.wishlist);
  const {
    productOldlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productOldlist);

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";

  useEffect(() => {
    dispatch(fetchBannerData());
    dispatch(fetchProductDataOld());
    if (userId !== undefined && userId !== null) {
      dispatch(fetchWishlistData(userId));
    }
  }, [dispatch, userId]);

  const success = (items) => {
    messageApi.open({
      type: "loading",
      content: items,
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };

  const handleNavigation = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleWishlists = async (prod_id) => {
    if (userId) {
      const passbody = { userId: userId, productId: prod_id };
      await dispatch(AddWishlistFetch(passbody));
    } else {
      message.error(`Please log in to Wishlist the product.`);
    }
  };

  useEffect(() => {
    const handleSticky = () => {
      const stickyElements = document.querySelectorAll(".sticky-logo-2");

      stickyElements.forEach((element) => {
        const offset = element.offsetTop;

        if (window.pageYOffset > offset) {
          element.classList.add("sticky");
        } else {
          element.classList.remove("sticky");
        }
      });
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  const loadMoreOrLessProducts = (brandId) => {
    setVisibleProducts((prevState) => {
      const currentCount = prevState[brandId] || 8;
      let newState = { ...prevState };

      if (currentCount + 4 <= 12) {
        newState[brandId] = currentCount + 4;
      } else {
        const { [brandId]: _, ...rest } = prevState;
        newState = rest;
      }

      return newState;
    });
  };

  const addcard = async (id) => {
    success(`Successfully Added to Cart: ${id.name}`);
    if (userId) {
      let addcarditem = {
        userId: userId,
        productId: id._id,
        quantity: "1",
      };
      await dispatch(AddCardProductById(addcarditem));
      await dispatch(GetAddCardProductById(userId));

      // message.success(`Successfully Added to Cart: ${id.name}`);
    } else {
      const passbody = {
        userId: userId,
        productId: id._id,
        quantity: 1, // Use number for quantity
      };

      let getlistcarts = localStorage.getItem("cardstore");
      let addtocarts = [];

      if (getlistcarts) {
        addtocarts = JSON.parse(getlistcarts);
      }

      // Check if the product already exists in the cart
      let productExists = false;
      addtocarts = addtocarts.map((item) => {
        if (item.productId === id._id) {
          productExists = true;
          return {
            ...item,
            quantity: parseInt(item.quantity) + 1,
          };
        }
        return item;
      });

      // If the product does not exist, add it to the cart
      if (!productExists) {
        addtocarts.push(passbody);
      }

      localStorage.setItem("cardstore", JSON.stringify(addtocarts));

      if (getlistcarts) {
        const productIds = { productIds: addtocarts };
        dispatch(GetCardProductById(productIds));
      }

      // message.success(`Successfully Added to Cart: ${id.name}`);
    }
  };

  const loadAllProducts = (brandId) => {
    navigate(`/brand/${brandId}`);
  };
  if (!data) {
    return <SplashScreen />;
  }

  return (
    <>
      {contextHolder}
      <Header />
      {/* {data && data.banners &&
      <HomeSlider />
      } */}
      {/* <div className="pt-md-5">{data && data.Brands &&
       <BrandSlider />
       }</div> */}

      <section className="py-5 mt-4">
        <div className="container-fluid">
          <h1 className="text-start">EVENTS & BLOGS</h1>

          <div className="category-slider1">
           <div className="d-flex justify-content-between"> <h5 className="my-3">LATEST BLOG POST</h5>
           <h5 className="my-3"><a className="link-underline-secondary text-dark">Explore blog posts</a></h5></div>
           <img className="w-100 " src="assets/images/new-ban.png" />
          </div>
        </div>
      </section>

      <section className="pb-5 mt-4">
        <div className="container-fluid">
          <h1 className="text-start">EVENTS & BLOGS</h1>

          <div className="category-slider1">
           <div className="d-flex justify-content-between"> <h5 className="my-3">NEW STORE LOCATION</h5>
           <h5 className="my-3"><a className="link-underline-secondary text-dark">View more events</a></h5></div>
           <img className="w-100" src="assets/images/new-ban1.png" />
          </div>
        </div>
      </section>
    
   
     


    

      <Footer className="pt-3" />
    </>
  );
};

export default Home3;
