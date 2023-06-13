import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFound";
import { render, router } from "./lib";
import ProductAddPage from "./pages/admin/products/ProductAdd";
import ProductEditPage from "./pages/admin/products/ProductEdit";
import AdminProductsPage from "./pages/admin/products/Products";
import SignIn from "./pages/admin/SignIn";
import SignUp from "./pages/admin/SignUp";
import AdminPostsPage from "./pages/admin/posts/Posts";
import PostAddPage from "./pages/admin/posts/PostAdd";
import PostEditPage from "./pages/admin/posts/PostEdit";
import Admin from "./pages/admin/Admin";

const app = document.querySelector("#app");

// private router
router.on("/admin/*", () => {}, {
    before(next) {
        const { user } = JSON.parse(localStorage.getItem("user")) || {};
        if (!user) return (window.location.href = "/");
        if (user && user.id != "1") return (window.location.href = "/signin");
        next();
    },
});

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/product", () => render(ProductPage, app));
router.on("/signin", () => render(SignIn, app));
router.on("/signup", () => render(SignUp, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));

//admin
router.on("/admin", () => render(Admin, app));
//product
router.on("/admin/product", () => render(AdminProductsPage, app));
router.on("/admin/product/add", () => render(ProductAddPage, app));
router.on("/admin/product/:id/edit", ({ data }) => render(() => ProductEditPage(data), app));
//post
router.on("/admin/post", () => render(AdminPostsPage, app));
router.on("/admin/post/add", () => render(PostAddPage, app));
router.on("/admin/post/:id/edit", ({ data }) => render(() => PostEditPage(data), app));



router.notFound(() => render(NotFoundPage, app));


 router.resolve();