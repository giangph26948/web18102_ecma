import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Admin = () => {
    return /*html*/`
    <div class="leading-normal tracking-normal px-4">
          ${Header()}
          <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Admin</h1>
                <p class="lead fw-normal text-white-50 mb-0">Welcome to the admin area.</p>
            </div>
        </div>
        </header>
              <div class="container py-16">
                  <div class="container mx-auto my-6">
                    <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold">Trang quản lý</h1>
                    <a href="/admin/product" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Quản lý Products</a>
                    <a href="/admin/post" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Quản lý Posts</a>
                    <a href="/admin/menu" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Quản lý Menu</a>
                    </div>
                    </div>
              </div>
              ${Footer()}    
          </div>
    `
}
export default Admin;