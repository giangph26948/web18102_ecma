import axios from "axios";
import { useEffect, router } from "../../../lib";
const MenuAddPage = () => {

    useEffect(() => {
        const formAddPost = document.querySelector("#form-add-menu");
        formAddPost.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const menu = {
                name: document.querySelector("#menu-name").value,
                link: document.querySelector("#menu-link").value,
            };

            axios.post(`${import.meta.env.VITE_API_URI}/menus`, menu)
            .then(() => {
                alert("Bạn đã thêm menu thành công");
            }).then(() => {
                router.navigate("/admin/menu");
                location.reload();
            })
        });
    });
    return /*html*/`
        <div class="container">
        <h1 class="text-lg font-bold mb-4">Thêm Menu</h1>
            <form id="form-add-menu">
            <div class="form-group mb-3">
                <label for="">Tên Menu</label>
                <input type="text" class="form-control"  id="menu-name"/>
            </div>
            <div class="form-group mb-3">
                <label for="">Link</label>
                <input type="text" class="form-control"  id="menu-link"/>
            </div>
            <div class="form-group"> 
                <button class="btn btn-primary">Thêm Menu</button>
            </div>    
            </form>
        </div>
    `;
};
export default MenuAddPage;