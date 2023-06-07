import { useEffect, useState } from "../lib";


const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URI}/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);
    return /*html*/`
        ${product?.name}
    `;
};
export default ProductDetail;
