import axios from "axios";
import { useEffect, useState, router } from "../../../lib";
import joi from "joi";
const productSchema = joi.object({
    name: joi.string().required().min(3).max(30),
    description: joi.string().required().min(3).max(100),
});
const ProductEditPage = ({ id }) => {

    const [product, setProduct] = useState({});

    // lấy ra thông tin sản phẩm để hiển thị form
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URI}/products/${id}`)
        .then(({data}) => setProduct(data));
    }, []);

    // cập nhật sản phẩm
    useEffect(() => {
        const formAddProduct = document.querySelector("#form-edit-product");
        const errorsElement = document.querySelector("#errors");

        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                name: document.querySelector("#product-name").value,
                description: document.querySelector("#product-description").value,
            };
            const { error } = productSchema.validate(formData, { abortEarly: false });
            if (error) {
                const errors = error.details.map((err) => err.message);
                errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
                return;
            }

            axios.put(`${import.meta.env.VITE_API_URI}/products/${id}`, formData)
            .then(() => {
                alert("Bạn đã cập nhật sản phẩm thành công");
            }).then(() => {
                router.navigate("/admin/product");
                location.reload();
            })
        });
    });

    if (!product) return "Product not found";
    return /*html*/`
        <div class="container">
            <h1 class="text-lg font-bold mb-4">Cập nhật sản phẩm</h1>
            <div id="errors"></div>
            <form id="form-edit-product">
            <div class="form-group mb-3">
                <label>Tên sản phẩm</label>
                <input type="text" class="form-control"  id="product-name" value="${product.name ?? ""}"/> 
            </div>
            <div class="form-group mb-3">
                <label>Mô tả sản phẩm</label>
                <input type="text" class="form-control"  id="product-description" value="${product.description ?? ""}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Cập nhật sản phẩm</button>
            </div>
            </form>
                
        </div>
    `;
};
export default ProductEditPage;

