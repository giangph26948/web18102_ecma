import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_URI}/products`)
    .then((response) => response.json())
    .then((data) => setProducts(data))
  },[]);
    return /*html*/`
        <div class="leading-normal tracking-normal px-4">
        ${Header()}
            <div class="container py-16">
                <h1 class="font-medium">Product Page</h1>
                <table class="table border-4">
                <thead class="border-4">
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    ${products
                        .map(
                            (product, index) => `
                            <tr class="border-4">
                                <td>${index + 1}</td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                            </tr>
                    `
                        )
                        .join("")}
                </tbody>
            </table>
            </div>
            ${Footer()}    
        </div>
    `;
};
export default ProductPage;
