import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URI}/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);
    return /*html*/`
        <div class="leading-normal tracking-normal px-4">
        ${Header()}
        <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Shop in style</h1>
                <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
        </header>
        <section class="py-5">
        <div class="">
            <div class="grid grid-cols-4 gap-8">
        ${products.map((product) => /*html*/`
        <!-- Section-->
                <div class="mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?w=1480&t=st=1686160667~exp=1686161267~hmac=e4d4a4b75ecbd433b8d0cb3d41888adcab982a3703e87c81378cb998aec45cf3" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${product.name}</h5>
                                <!-- Product price-->
                                $ ${product.price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/product/${product.id}">View options</a>
                            </div>
                        </div>
                    </div>
                </div>
        `).join("")}
        </div>
        </div>
        </section>
        ${Footer()}    
        </div>
    `;
};
export default ProductPage;
