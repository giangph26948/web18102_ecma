const Header = () => {
    return `
        <header>
            <div class="flex justify-center py-2 bg-[#8B0016]"><img src="https://img.freepik.com/free-photo/purple-bird-with-yellow-beak-gold-ring-around-head_1340-37547.jpg?w=900&t=st=1684722610~exp=1684723210~hmac=be624aef3b4748145d285fc56f86604a9fc8fc5f219e69c53ab3f507688e1a40" width="10%"></div>
            <div class="flex justify-between p-4 bg-green-300">
                <ul class="flex items-center space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/product">Product</a></li>
                </ul>   
            </div>
        </header>
    `;
};
export default Header;
