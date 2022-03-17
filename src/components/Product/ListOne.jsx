import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListProducts.css";

function ListOne() {
  const navigate = useNavigate();
  return (
    <main className="container-products">
      <div className="list-products">
        <div className="list">
          <h2 className="list-h2">Star Wars</h2>

          <p className="list-paragraph">Ver Tudo</p>
          <img src="image/setaEsquerda.png" alt="" />
        </div>
        <div className="products">
          <div className="product">
            <img src="image/image1.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}>
              {" "}
              Produto
            </h3>
          </div>
          <div className="product-Two">
            <img src="image/image2.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Three">
            <img src="image/image3.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Four">
            <img src="image/image4.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Five">
            <img src="image/image5.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product6">
            <img src="image/image6.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListOne;
