import React from "react";
import CreateHome from "../components/featuresComp/CreateHome";
import CreateMemberships from "../components/featuresComp/CreateMemberships";
import Currencies from "../components/featuresComp/Currencies";
import GetGoingFast from "../components/featuresComp/GetGoingFast";
import GrowAudience from "../components/featuresComp/GrowAudience";
import ProductFeatures from "../components/featuresComp/ProductFeatures";
import ProductVersion from "../components/featuresComp/ProductVersion";
import ReviewGallery from "../components/featuresComp/ReviewGallery";
import YourStore from "../components/featuresComp/YourStore";
import Footer from "../components/generalComp/Footer";
import Navbar from "../components/generalComp/Navbar";
import ShareWork from "../components/generalComp/ShareWork";

const custom = {
  heading: "Customizable Options",
  title: "Your store, your way",
  description:
    "Gumroad plays well with others. Set up your store on our platform, oreasily embed it on your existing site.",
};

const payment = {
  heading: "Payment Integrations",
  title: "Money, incoming",
  description:
    "Once you get set up, it’s easy to ring the register. Here’s how you can sell and get paid, fast.",
};

const platform = {
  heading: "Comprehensive Platform",
  title: "From start to finesse",
  description:
    "We’ve spent ten years building an end-to-end platform so you can start selling in seconds.",
};

const Features = () => {
  return (
    <>
      <Navbar />
      <ProductFeatures />
      <YourStore {...custom} />
      <CreateHome />
      <ReviewGallery/>
      <YourStore {...payment} />
      <CreateMemberships />
      <Currencies />
      <ProductVersion />
      <YourStore {...platform} />
      <GetGoingFast />
      <GrowAudience />
      <ShareWork />
      <Footer />
    </>
  );
};

export default Features;
