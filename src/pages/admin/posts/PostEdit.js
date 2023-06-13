import axios from "axios";
import { useEffect, useState, router } from "../../../lib";
import joi from "joi";
const productSchema = joi.object({
    name: joi.string().required().min(3).max(30),
    description: joi.string().required().min(3).max(100),
});
const PostEditPage = ({ id }) => {

    const [post, setPost] = useState({});

    // lấy ra thông tin sản phẩm để hiển thị form
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URI}/posts/${id}`)
        .then(({data}) => setPost(data));
    }, []);

    // cập nhật sản phẩm
    useEffect(() => {
        const formAddPost = document.querySelector("#form-edit-post");
        const errorsElement = document.querySelector("#errors");

        formAddPost.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const formData = {
                title: document.querySelector("#post-title").value,
                content: document.querySelector("#post-content").value,
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
                router.navigate("/admin/post");
                location.reload();
            })
        });
    });

    if (!post) return "Product not found";
    return /*html*/`
        <div class="container">
            <h1 class="text-lg font-bold mb-4">Cập nhật bài viết</h1>
            <div id="errors"></div>
            <form id="form-edit-post">
            <div class="form-group mb-3">
                <label>Tiêu đề bài viết</label>
                <input type="text" class="form-control"  id="post-title" value="${post.title ?? ""}"/> 
            </div>
            <div class="form-group mb-3">
                <label>Mô tả bài viết</label>
                <input type="text" class="form-control"  id="post-content" value="${post.content ?? ""}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Cập nhật bài viết</button>
            </div>
            </form>
                
        </div>
    `;
};
export default PostEditPage;

