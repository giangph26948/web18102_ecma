import { useEffect, useState } from "../../../lib";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";

const AdminPostsPage = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(() =>{

    axios.get(`${import.meta.env.VITE_API_URI}/posts`)
    .then(({data}) => setPosts(data));
    },[]);
  
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;

            axios.delete(`${import.meta.env.VITE_API_URI}/posts/${id}`)
            .then( () => {
                setPosts(posts.filter((post) => post.id != id));
            });
            });
        }
    });
      return /*html*/`
          <div class="leading-normal tracking-normal px-4">
          ${Header()}
          <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Admin Posts</h1>
                <p class="lead fw-normal text-white-50 mb-0">Welcome to the admin area.</p>
            </div>
        </div>
        </header>
              <div class="container py-16">
                  <div class="container mx-auto my-6">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-bold">Quản lý bài viết</h1>
                        <a href="/admin/post/add" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Thêm bài viết</a>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                        <thead>
                            <tr>
                            <th class="px-4 py-2">STT</th>
                            <th class="px-4 py-2">Tiêu đề bài viết</th>
                            <th class="px-4 py-2">Mô tả bài viết</th>
                            <th class="px-4 py-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${posts
                            .map(
                                (post, index) => `
                            <tr>
                            <td class="border px-4 py-2">${index + 1}</td>
                            <td class="border px-4 py-2">${post.title}</td>
                            <td class="border px-4 py-2">${post.content}</td>
                            <td class="border px-4 py-2">
                                <a href="/admin/post/${post.id}/edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sửa</a>
                                <button class="btn btn-remove bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" data-id="${post.id}">Xóa</button>
                            </td>
                            </tr>
                            `
                           )
                           .join("")}
                        </tbody>
                        </table>
                    </div>
                    </div>
              </div>
              ${Footer()}    
          </div>
      `;
};

export default AdminPostsPage;