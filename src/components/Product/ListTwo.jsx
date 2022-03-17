import React from "react";
import { useNavigate } from"react-router-dom"
import "./ListProducts.css";

function ListTwo() {
  const navigate = useNavigate();
  return (
    <main className="container-products">
      <div className="list-products">
        <div className="list">
          <h2 className="list-h2">Consoles</h2>

          <p className="list-paragraph">Ver Tudo</p>
          <img src="image/setaEsquerda.png" alt="" />
        </div>
        <div className="products">
          <div className="product">
            <img src="image/imageConsole1.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Two">
            <img src="image/imageConsole2.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Three">
            <img  src="image/imageConsole3.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Four">
            <img  src="image/imageConsole4.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product-Five">
            <img  src="image/imageConsole5.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
          <div className="product6">
            <img  src="image/imageConsole6.png" alt="" />

            <h1 className="description">Produto XYZ</h1>
            <h3 className="price">R$60,00</h3>
            <h3 className="mais" onClick={() => navigate("/product")}> Produto</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListTwo;
