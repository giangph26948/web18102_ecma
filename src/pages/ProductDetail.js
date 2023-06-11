import axios from "axios";
import { useEffect, useState } from "../lib";


const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        // fetch(`${import.meta.env.VITE_API_URI}/products/${id}`)
        //     .then((response) => response.json())
        //     .then((data) => setProduct(data));
        axios.get(`${import.meta.env.VITE_API_URI}/products/${id}`)
        .then(({data}) => setProduct(data));
    }, []);
    return /*html*/`
        <div class="mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="" width="20%"  src="${product?.image}" alt="..."/>
                        <!-- Product details-->
                        <div class="card-body p-4"> 
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${product?.name}</h5>
                                <!-- Product price-->
                                $ ${product?.price}
                            </div>
                        </div>
                    </div>
                </div>
    `;
};
export default ProductDetail;
