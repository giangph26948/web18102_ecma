import axios from "axios";
import { router, useEffect } from "../../lib";

const SignUp = () => {
	useEffect(() =>{
		const formSignup = document.querySelector('#form-signup');
		if(!formSignup) return;
		formSignup.addEventListener("submit", function(event){
			//chặn reload trang
			event.preventDefault();

			const credential = {
				email: document.querySelector("#email").value,
				password: document.querySelector("#password").value,
			};
			// fetch(`${import.meta.env.VITE_API_URI}/signup`, {
			// 	method: "POST",
			// 	headers: {
			// 		 "Content-Type": "application/json",
			// 		},
			// 	body: JSON.stringify(credential),    
			// })
			axios.post(`${import.meta.env.VITE_API_URI}/signup`, credential)
			.then(()=>{
				alert("Bạn đã đăng ký thành công");
				router.navigate("/signin");
				location.reload();
			}) 
			});
		});
    return /*html*/`
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
		<div class="md:flex">
			<div class="w-full px-4 py-6">
				<h2 class="text-center text-3xl font-bold text-gray-900">Đăng ký</h2>
				<p class="text-gray-700 text-center">Đã có tài khoản? <a href="/signin" class="font-bold text-indigo-500 hover:text-indigo-400">Đăng nhập</a></p>
				<form class="mt-8 space-y-6" id="form-signup">
					
					<div class="form-group">
						<label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
						<input id="email" type="email" name="email" class="form-input w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required>
					</div>
					<div class="form-group">
						<label for="password" class="block text-gray-700 font-semibold mb-2">Mật khẩu</label>
						<input id="password" type="password" name="password" class="form-input w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required>
					</div>
					<div class="form-group">
						<label for="password_confirmation" class="block text-gray-700 font-semibold mb-2">Xác nhận mật khẩu</label>
						<input id="password_confirmation" type="password" name="password_confirmation" class="form-input w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required>
					</div>
					<div class="form-group">
						<button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng ký</button>
					</div>
				</form>
			</div>
		</div>
	</div>
    `
}
export default SignUp;