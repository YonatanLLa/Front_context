import React from "react";
import { useFilters } from "../hooks/useFilters";
import { products as initialProducts } from "../mocks/products.json";
import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import  { Products } from "../components/Products";

const Home = () => {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <div>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </div>
  );
};

export default Home;
