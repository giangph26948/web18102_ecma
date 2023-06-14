import axios from "axios";
import { useEffect, useState } from "../lib";

const Header = () => {
    const [menus , setMenus] = useState([]);
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URI}/menus`)
        .then(({data}) => setMenus(data));
    }, []);
    return /*html*/`

    <header class=" w-full">
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div class="flex flex-wrap items-center space-x-8  max-w-screen-xl  mx-auto">
            <a href="/" class="flex items-center ">
                <img src="https://raw.githubusercontent.com/themesberg/landwind/f8be851cc8b4b44ff9d842ca8f5149d7911af88c/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CRAB PROJECT</span>
            </a>
            ${menus.map((menu) => /*html*/`
            <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="${menu.link}" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">${menu.name}</a>
                    </li>
                </ul>
            </div>
            `).join("")}
        </div>
    </nav>
</header>
    `;
};
export default Header;
