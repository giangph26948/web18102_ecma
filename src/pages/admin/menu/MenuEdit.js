import axios from "axios";
import { useEffect, useState, router } from "../../../lib";
import joi from "joi";
const menuSchema = joi.object({
    name: joi.string().required().min(3).max(30),
    link: joi.string().required().min(3).max(100),
});
const MenuEditPage = ({ id }) => {

    const [menu, setMenu] = useState({});

    // lấy ra thông tin sản phẩm để hiển thị form
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URI}/menus/${id}`)
        .then(({data}) => setMenu(data));
    }, []);

    // cập nhật sản phẩm
    useEffect(() => {
        const formAddMenu = document.querySelector("#form-edit-menu");
        const errorsElement = document.querySelector("#errors");

        formAddMenu.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                name: document.querySelector("#menu-name").value,
                link: document.querySelector("#menu-link").value,
            };
            const { error } = menuSchema.validate(formData, { abortEarly: false });
            if (error) {
                const errors = error.details.map((err) => err.message);
                errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
                return;
            }

            axios.put(`${import.meta.env.VITE_API_URI}/menus/${id}`, formData)
            .then(() => {
                alert("Bạn đã cập nhật menu thành công");
            }).then(() => {
                router.navigate("/admin/menu");
                location.reload();
            })
        });
    });

    if (!menu) return "Menu not found";
    return /*html*/`
        <div class="container">
            <h1 class="text-lg font-bold mb-4">Cập nhật Menu</h1>
            <div id="errors"></div>
            <form id="form-edit-menu">
            <div class="form-group mb-3">
                <label>Tên menu</label>
                <input type="text" class="form-control"  id="menu-name" value="${menu.name ?? ""}"/> 
            </div>
            <div class="form-group mb-3">
                <label>Link</label>
                <input type="text" class="form-control"  id="menu-link" value="${menu.link ?? ""}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Cập nhật menu</button>
            </div>
            </form>
                
        </div>
    `;
};
export default MenuEditPage;

