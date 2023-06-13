import axios from "axios";
import { useEffect, router } from "../../../lib";
const PostAddPage = () => {

    useEffect(() => {
        const formAddPost = document.querySelector("#form-add-post");
        formAddPost.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const post = {
                title: document.querySelector("#post-title").value,
                content: document.querySelector("#post-content").value,
            };

            axios.post(`${import.meta.env.VITE_API_URI}/posts`, post)
            .then(() => {
                alert("Bạn đã thêm bài viết thành công");
            }).then(() => {
                router.navigate("/admin/post");
                location.reload();
            })
        });
    });
    return /*html*/`
        <div class="container">
        <h1 class="text-lg font-bold mb-4">Thêm Bài Viết</h1>
            <form id="form-add-post">
            <div class="form-group mb-3">
                <label for="">Tiêu đề bài viết</label>
                <input type="text" class="form-control"  id="post-title"/>
            </div>
            <div class="form-group mb-3">
                <label for="">Mô tả bài viết</label>
                <input type="text" class="form-control"  id="post-content"/>
            </div>
            <div class="form-group"> 
                <button class="btn btn-primary">Thêm sản phẩm</button>
            </div>    
            </form>
        </div>
    `;
};
export default PostAddPage;