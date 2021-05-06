import "./index.css"; /* css는 from을 쓰지 않는다.*/
import axios from "axios";
import React from "react";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  /* 네트워크 통신 시작 */
  React.useEffect(function () {
    axios
      .get(
        "https://6b1e526a-0f64-46cc-a228-7dc8cbe9ac93.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="/images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div classNmame="product-contents">
                  <span classNmame="product-name">{product.name}</span>
                  <span classNmame="product-price">{product.price}원</span>
                  <div classNmame="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
n;

export default MainPage;
