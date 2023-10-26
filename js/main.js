// console.log(products)

// const productsDispo = products.slice(5, 14)
// console.log(productsDispo)




const categoriesDisponi = (productsDispo) => {

    let disponible = []

    productsDispo.map((product) => {

        if (product.category === "electronics" || product.category === "jewelery" ) {
            disponible.push(product)
        }
    })
    return disponible

}

// console.log(categoriesDisponi(products))

const getCategoryName = (products) => {

    let categories = [] 

    products.forEach((product) =>{
        
        if (!categories.includes(product.category)) {

            categories.push(product.category)
        }
    })
    return categories 
}

const categoriesEnable = categoriesDisponi(products)


const filter = getCategoryName(categoriesEnable)

console.log(filter)

// alert(`las categorias disponibles son: ${filter.join(", ")}`)


const productTitle = categoriesEnable.map((product) => product.title

)

const productsAyZ = productTitle.sort()

// console.log(productTitle)

const listProducts = productsAyZ.map((product, i)=>
`${i + 1 } ${product} \n`  

)
console.log(listProducts)

let eleccion = prompt(`ingrese el numero del producto que desea comprar:\n ${listProducts}`)

while (eleccion < 1 || eleccion > 10 ) { 

     eleccion = prompt(`ingrese una opcion valida:\n ${listProducts}`)
}

const compra = productsAyZ [
    eleccion - 1 
]

console.log(compra)




