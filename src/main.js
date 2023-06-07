import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFound";
import { render } from "./lib";
import ProductAddPage from "./pages/admin/ProductAdd";
import ProductEditPage from "./pages/admin/ProductEdit";
import AdminProductsPage from "./pages/admin/Products";
import SignIn from "./pages/admin/SignIn";
import SignUp from "./pages/admin/SignUp";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/product", () => render(ProductPage, app));
router.on("/signin", () => render(SignIn, app));
router.on("/signup", () => render(SignUp, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));

//admin
router.on("/admin/product", () => render(AdminProductsPage, app));
router.on("/admin/product/add", () => render(ProductAddPage, app));
router.on("/admin/product/:id/edit", ({ data }) => render(() => ProductEditPage(data), app));


router.notFound(() => render(NotFoundPage, app));


 router.resolve();