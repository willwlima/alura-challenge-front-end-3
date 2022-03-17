import React from "react";
import Navbar from "../../pages/Navbar/Navbar";
import SimilarProducts from "../../components/Product/SimilarProducts";
import Footer from "../../pages/Footer/Footer";
import "./Product.css";
import { Typography } from "@material-ui/core";

function Product() {
  return (
    <>
      <Navbar />
      <div
       className="container-product"
      >
        <img
          style={{
            position: "static",
            width: "560px",
            height: "403px",
            left: "0px",
            top: "0px",

            flex: "none",
            order: "0",
            flexGrow: "0",
            margin: "0px 16px",
          }}
          src="image/imageProduct.png"
          alt=""
        />
        <div className="infos-products">
          <div className="text-product">
            <Typography variant="h3" component="h1" >Produto XYZ</Typography>
            <Typography variant="h5">R$ 60,00</Typography>
            <Typography>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</Typography>
          </div>
        </div>
      </div>
      <SimilarProducts />
      <Footer />
    </>
  );
}

export default Product;
