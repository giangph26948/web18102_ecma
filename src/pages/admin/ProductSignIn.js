import { useEffect } from "../../lib";

const ProductSignIn = () =>{
    useEffect(() =>{
        const formSignIn = document.querySelector("#form-signin-product");
        formSignIn.addEventListener("submit", function(event){
            event.preventDefault();

        const user = {
            username: document.querySelector("#user-name").value,
            password: document.querySelector("#user-password").value,
        };
        fetch(`${import.meta.env.VITE_API_URI}/users`)
        .then(()=>{
            data.forEach((data) =>{
                if(data.username == user.username && data.password == user.password){
                    alert(`Bạn đã đăng nhập thành công`)
                }
            })
        })

        })
    });

    return /*html*/`
        <div class="container">
        <h1>Đăng Nhập</h1>
            <form id="form-signin-product">
            <div class="form-group mb-3">
                <label for="">Tài khoản</label>
                <input type="text" class="form-control"  id="user-name"/>
            </div>
            <div class="form-group mb-3">
                <label for="">Mật khẩu</label>
                <input type="number" class="form-control"  id="user-password"/>
            </div>
            <div class="form-group"> 
                <button class="btn btn-primary">Log In</button>
            </div>    
            </form>
        </div>
    `;
}
export default ProductSignIn