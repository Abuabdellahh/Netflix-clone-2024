import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RowList from "../../components/rows/rowList/RowList";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};

export default Home;
