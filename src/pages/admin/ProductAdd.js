import axios from "axios";
import { useEffect, router } from "../../lib";
const ProductAddPage = () => {

    useEffect(() => {
        const formAddProduct = document.querySelector("#form-add-product");
        formAddProduct.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const product = {
                name: document.querySelector("#product-name").value,
                price: document.querySelector("#product-price").value,
            };

            // fetch(`${import.meta.env.VITE_API_URI}/products`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(product),
            // })
            axios.post(`${import.meta.env.VITE_API_URI}/products`, product)
            .then(() => {
                alert("Bạn đã thêm sản phẩm thành công");
            }).then(() => {
                router.navigate("/admin/product");
                location.reload();
            })
        });
    });
    return /*html*/`
        <div class="container">
        <h1>Thêm Sản Phẩm</h1>
            <form id="form-add-product">
            <div class="form-group mb-3">
                <label for="">Tên sản phẩm</label>
                <input type="text" class="form-control"  id="product-name"/>
            </div>
            <div class="form-group mb-3">
                <label for="">Giá sản phẩm</label>
                <input type="number" class="form-control"  id="product-price"/>
            </div>
            <div class="form-group"> 
                <button class="btn btn-primary">Thêm sản phẩm</button>
            </div>    
            </form>
        </div>
    `;
};
export default ProductAddPage;