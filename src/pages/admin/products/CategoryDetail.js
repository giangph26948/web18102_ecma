import { useEffect, useState } from "../../../lib";

const CategoryDetail = ({id}) =>{
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URI}/categories/${id}?_embed=products`)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return /*html*/`
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    ${
        category.products
            ? category.products
                  .map(
                      (product) => `
                      
                    <div class="bg-white rounded-lg overflow-hidden shadow-md">
                        <img src="${product?.image}/400x300" alt="Product Image" class="w-full">
                        <div class="p-4">
                        <h4 class="text-lg font-semibold text-gray-800 mb-2">${product?.name}</h4>
                        <p class="text-gray-700 mb-2">Mô tả: ${product?.description}</p>
                        <a href="https://github.com/giangph26948/web18102_ecma" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Link github</a>
                        </div>
                    </div>
                    `).join("")
                    : "<tr><td colspan='4'>Loading...</td></tr>"
                    }
                    </div>
    `
    
}
export default CategoryDetail;