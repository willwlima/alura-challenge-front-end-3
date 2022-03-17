import React from "react";
import {useNavigate} from "react-router-dom"
import "./ListProducts.css";

function ListThree() {
  const navigate = useNavigate()
  return (
    <main className="container-products">
      <div className="list-products">
        <div className="list">
          <h2 className="list-h2">Diversos</h2>

          <p className="list-paragraph">Ver Tudo</p>
          <img src="image/setaEsquerda.png" alt="" />
        </div>
        <div className="products">
          <div className="product">
            <img src="image/imageDiverses1.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Two">
            <img src="image/imageDiverses2.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Three">
            <img  src="image/imageDiverses3.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Four">
            <img  src="image/imageDiverses4.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Five">
            <img  src="image/imageDiverses5.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product6">
            <img  src="image/imageDiverses6.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListThree;
