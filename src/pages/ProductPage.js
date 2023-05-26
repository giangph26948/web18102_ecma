import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../dataFake";
const ProductPage = () => {
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1 class="font-medium">Product Page</h1>
            <div class="grid grid-cols-4 gap-8 py-5">
            ${products
                .map(
                    (product) => `
                <div>
                    <a href="/product/${product.id}">${product.name}</a>
                    <img src="${product.img}" width="50%"/>
                </div>
                
            `
                )
                .join("")}
            </div>
            
                ${Footer()}    
        </div>
    `;
};
export default ProductPage;
