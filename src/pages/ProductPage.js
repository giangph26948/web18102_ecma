import { products as data } from "../dataFake";
import { useEffect, useState } from "../lib";


const ProductPage = () => {
  const [products, setProducts] = useState(data);

  useEffect(() =>{
    fetch("https://63f5d86059c944921f67a58c.mockapi.io/products")
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
              fetch(`https://63f5d86059c944921f67a58c.mockapi.io/products/${id}`,{
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
        <header class="fixed w-full">
        <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div class="flex flex-wrap items-center space-x-8  max-w-screen-xl  mx-auto">
                <a href="#" class="flex items-center ">
                    <img src="https://raw.githubusercontent.com/themesberg/landwind/f8be851cc8b4b44ff9d842ca8f5149d7911af88c/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
                </a>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="/" class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="/product" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Products</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

            <div class=" py-16">
                <h1 class="font-medium">Product Page</h1>
                <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Nội dung</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    ${products
                        .map(
                            (product, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td>${product.description}</td>
                                <td>
                                    <button class="btn btn-remove" data-id="${product.id}">Remove</button>
                                </td>
                            </tr>
                    `
                        )
                        .join("")}
                    
                </tbody>
            </table>
            </div>
            <footer class="bg-white">
                    <div class="container mx-auto px-8">
                      <div class="w-full flex flex-col md:flex-row py-6">
                        <div class="flex-1 mb-6 text-black">
                          <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                            <!--Icon from: http://www.potlabicons.com/ -->
                            <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                              <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                              <path
                                class="plane-take-off"
                                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                              />
                            </svg>
                            Văn Giang
                          </a>
                        </div>
                        <div class="flex-1">
                          <p class="uppercase text-gray-500 md:mb-6">Links</p>
                          <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                            </li>
                          </ul>
                        </div>
                        <div class="flex-1">
                          <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                          <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                            </li>
                          </ul>
                        </div>
                        <div class="flex-1">
                          <p class="uppercase text-gray-500 md:mb-6">Social</p>
                          <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                            </li>
                          </ul>
                        </div>
                        <div class="flex-1">
                          <p class="uppercase text-gray-500 md:mb-6">Company</p>
                          <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.freepik.com/free-photos-vectors/background" class="flex justify-center text-gray-500">Background vector created by freepik - www.freepik.com</a>
                  </footer>    
        </div>
    `;
};
export default ProductPage;
