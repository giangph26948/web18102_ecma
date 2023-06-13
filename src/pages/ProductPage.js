import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URI}/products`)
        .then(({data}) => setProducts(data));
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
                <div class="mb-5">
                    <div class="card h-100">
                        <img class="card-img-top" src="${product.image}" alt="..." />
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">${product.name}</h5>
                                 ${product.description}
                            </div>
                        </div>
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
