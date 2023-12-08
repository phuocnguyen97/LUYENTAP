let products = [
    [1, "Product 1", 1000],
    [2, "Product 2", 2000],
    [3, "Product 3", 3000],
    [4, "Product 4", 4000],
];

let eleProductList = document.getElementById('render');
let sOut = "<table border=0";
let sOut1 = "";
for(let i=0; i<products.length; i++) {
    sOut +=`
    <tr>
        <td class="text-center">${products[i][0]}</td>
        <td class="text-left">${products[i][1]}</td>
        <td class="text-right">${products[i][2]}</td>
        <td>
        <button type="button" class="btn-edit">Edit</button>
        <button type="button" class="btn-delete">Delete</button>
        </td>
    </tr>
   `
}
sOut += "</table>";
eleProductList.innerHTML = sOut;