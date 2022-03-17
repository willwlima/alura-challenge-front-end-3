import React from "react";
import "./ListProducts.css";

function ListOne() {
  return (
    <main className="container-products">
      <div className="list-products">
        <div className="list">
          <h2 className="list-h2">Produtos similares</h2>
        </div>
        <div className="products">
          <div className="product">
            <img src="image/image1.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais"> Produto</h3>
          </div>
          <div className="product-Two">
            <img src="image/image2.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais"> Produto</h3>
          </div>
          <div className="product-Three">
            <img  src="image/image3.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais"> Produto</h3>
          </div>
          <div className="product-Four">
            <img  src="image/image4.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais"> Produto</h3>
          </div>
          <div className="product-Five">
            <img  src="image/image5.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais"> Produto</h3>
          </div>
          <div className="product6">
            <img  src="image/image6.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais"> Produto</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListOne;
