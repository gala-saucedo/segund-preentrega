//despejo las categorias que quiero
const categoriesDisponi = (productsDispo) => {

    let disponible = []

    productsDispo.map((product) => {

        if (product.category === "electronics" || product.category === "jewelery" ) {
            disponible.push(product)
        }
    })
    return disponible

}

// despejo todas las categorias

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

// despejo los titulos de los productos disponibles

const productTitle = categoriesEnable.map((product) => product.title

)
// ordenos los productos de A a Z
const productsAyZ = productTitle.sort()

console.log(productTitle)

const listProducts = productsAyZ.map((product, i)=>
`${i + 1 } ${product} \n`  

)

// le pregunto al usuario que producto desea seleccionar ingresando el numero del producto

let eleccion = prompt(`ingrese el numero del producto que desea comprar:\n ${listProducts}`)

while (eleccion < 1 || eleccion > 10 ) { 

     eleccion = prompt(`ingrese una opcion valida:\n ${listProducts}`)
}

const compra = productsAyZ [
    eleccion - 1 
]

console.log(compra)




