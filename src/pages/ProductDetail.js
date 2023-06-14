import axios from "axios";
import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryDetail from "./admin/products/CategoryDetail";


const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URI}/products/${id}`)
        .then(({data}) => setProduct(data));
    }, []);
    return /*html*/`
                <div class="leading-normal tracking-normal px-4">
                ${Header()}
                <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div class="max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4">Product Details</h2>
                    <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 mb-4 md:mb-0">
                        <img src="${product?.image}/400x300" alt="Product Image" class="w-full rounded-lg shadow-md">
                    </div>
                    <div class="md:w-1/2 md:pl-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">${product?.name}</h3>
                        <p class="text-gray-700 mb-4">Product Description</p>
                        <p class="text-gray-700 mb-4">Mô tả: ${product?.description}</p>
                        <a href="https://github.com/giangph26948/web18102_ecma" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Link github</a>
                    </div>
                    </div>
                    
                    <hr class="my-6 border-gray-300">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Similar Products</h3>
                    ${CategoryDetail({id})}
                </div>
                </div>
                ${Footer()}
                </div>
    `;
};
export default ProductDetail;
