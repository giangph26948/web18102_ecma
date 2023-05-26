import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { posts } from "../dataFake";

const HomePage = () => {
    return `
        <div class="container max-w-4xl mx-auto px-4">
            <div>
                ${Header()}
                ${Banner()}
                <div class="py-5 flex flex-row">
                <div class=" bg-gray-50 basis-1/4">
                <ul class="space-y-2 font-medium">
                   <li>
                      <a href="#" class="ml-3">Inbox</a>
                   </li>
                   <li>
                      <a href="#" class="ml-3">Users</a>
                   </li>
                   <li>
                      <a href="#" class="ml-3">Products</a>
                   </li>
                   <li>
                      <a href="#" class="ml-3">Sign in</a>
                   </li>
                   <li>
                      <a href="#" class="ml-3">Sign up</a>
                   </li>
                </ul>
             </div>
                    <div class="px-8 basis-1/2">
                    <h2 class="font-medium">Bài viết</h2>
                    <div class="grid grid-cols-3 gap-8 space-x-2">
                        ${posts
                            .map(function (post) {
                                return `<div>
                                <h3>${post.title}</h3>
                                <p>${post.content}</p>
                            </div>`;
                            })
                            .join("")}
                    </div>
                </div>
                    </div>
                ${Footer()}
            </div>
        </div>
    `;
};

export default HomePage;
