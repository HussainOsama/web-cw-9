let products = [
    {name: "Brulee", price: 500},
    {name: "Orea", price: 750},
    {name: "Dates", price: 1000}
]

let productAdden = []

function addProduct(index){
    productAdden.push(products[index])
    // console.log(productAdden);


    document.getElementById("myCart").innerHTML = ``

    var total =0;

    for(i=0; i<productAdden.length ; i++){
        console.log(productAdden[i].name);
        document.getElementById("myCart").innerHTML += `<li>${productAdden[i].name}  ${productAdden[i].price/1000} kd </li>`
        total = total + (productAdden[i].price/1000)
        document.getElementById("total").innerText= `${total} kd`
    }
    // productAdden.push(products.name[''])
}
