import { useEffect, useState } from "../lib";


const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URI}/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);
    return /*html*/`
        <div class="mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="" width="20%"  src="https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?w=1480&t=st=1686160667~exp=1686161267~hmac=e4d4a4b75ecbd433b8d0cb3d41888adcab982a3703e87c81378cb998aec45cf3" alt="..."/>
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
