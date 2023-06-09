import { useEffect, useState } from "../../lib";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AdminProductsPage = () =>{
    const [products, setProducts] = useState([]);

    useEffect(() =>{
      fetch(`${import.meta.env.VITE_API_URI}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
    },[]);
  
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`${import.meta.env.VITE_API_URI}/products/${id}`,{
                  method: "DELETE",
                })
                .then( () => {
                setProducts(products.filter((product) => product.id != id));
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
                <h1 class="display-4 fw-bolder">Admin Products</h1>
                <p class="lead fw-normal text-white-50 mb-0">Welcome to the admin area.</p>
            </div>
        </div>
        </header>
              <div class="container py-16">
                  <a href="/admin/product/add">Thêm</a>
                  <table class="table border-4">
                  <thead class="border-4">
                      <tr>
                          <th>#</th>
                          <th>Tên</th>
                          <th>Giá</th>
                          <th>Chức năng</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${products
                          .map(
                              (product, index) => `
                              <tr class="border-4">
                                  <td>${index + 1}</td>
                                  <td>${product.name}</td>
                                  <td>${product.price}</td>
                                  <td>
                                      <a href="/admin/product/${product.id}/edit">Edit</a>  
                                      <button class="btn btn-remove" data-id="${product.id}">Remove</button>
                                  </td>
                              </tr>
                      `
                          )
                          .join("")}
                      
                  </tbody>
              </table>
              </div>
              ${Footer()}    
          </div>
      `;
};

export default AdminProductsPage;