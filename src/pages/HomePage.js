import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib";
import axios from "axios";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URI}/posts`)
        .then(({data}) => setPosts(data));
    },[]);

    return /*html*/ `
        <div class="leading-normal tracking-normal px-4">
        ${Header()}
    <!-- Start block -->
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Building digital <br>products & brands.</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This free and open-source landing page template was built using the utility classes from <a href="https://tailwindcss.com" class="hover:underline">Tailwind CSS</a> and based on the components from the <a href="https://flowbite.com/docs/getting-started/introduction/" class="hover:underline">Flowbite Library</a> and the <a href="https://flowbite.com/blocks/" class="hover:underline">Blocks System</a>.</p>
                
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://img.freepik.com/free-photo/cool-woman-wearing-trucker-hat-medium-shot_23-2149412803.jpg?w=1480&t=st=1685117429~exp=1685118029~hmac=98a0041f9ffebe4dd5a485205d4db0ff15fe81f0807b57edc2fdb1e163a34d3a" alt="hero image">
            </div>                
        </div>
    </section>

                   
                <section class="py-5">
        <div class="">
            <div class="grid grid-cols-3 gap-8">
        ${posts.map((post) => /*html*/`
        <!-- Section-->
                <div class="mb-5">
                    <div class="card h-100">
                        <img class="card-img-top w-full h-48 object-cover object-center" src="${post.image}" alt="..." />
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">${post.title}</h5>
                                 ${post.content}
                            </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a>
                            </div>
                        </div>
                    </div>
                </div>
        `).join("")}
        </div>
        </div>
        </section>
                ${Footer()}
                </div>
                    
    `;
};

export default HomePage;
