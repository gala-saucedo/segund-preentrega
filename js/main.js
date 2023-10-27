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


// despejo los titulos de los productos disponibles

const productTitle = categoriesEnable.map((product) => product.title

)
// ordenos los productos de A a Z
const productsAyZ = productTitle.sort()


const listProducts = productsAyZ.map((product, i)=>
`${i + 1 } ${product} \n`  
)


// Despejo el producto completo de la lista de productos disponibles 

const electionDeProduct = () => {

    
    let election = productTitle[eleccion] 
 
    let productoElegido 

    products.map((product) => {
 
    if (election === product.title) {
 
     productoElegido = product
     
    }
    }
    )
    // avanza con la compra seleccionando una opcion rambon de una fecha para entrega
 
     const compra = confirm(`NOMBRE: ${productoElegido.title}\n DESCRIPCION: ${productoElegido.description}\n PRECIO: ${productoElegido.price}\n ¿DESEA AVANZAR CON LA COMPRA?`)


     if (compra) {
        let end = new Date()
        let start = new Date(2023, 10, 26)
        
            let fechaEntrega = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
          
         alert(`PERFECTO! EL PRODUCTO SERA ENTREGADO EN LA FECHA: ${fechaEntrega.toLocaleDateString(`es-AR`)}`)

    } else {
        alert("GRACIAS POR SU VISITA!")

    } 

} 

// el usuario debe elegir el producto por el numero, si no ingresa el correcto la lista vuelve a aparecer con otro mensaje


let eleccion = prompt(`INGRESE EL NUMERO DEL PRODUCTO QUE DESEE:\n ${listProducts}`)



while (eleccion < 1 || eleccion > 10 ) { 

     eleccion = prompt(`UPS! ESA OPCION NO ESTA EN LA LISTA, INGRESE UNA OPCION CORRECTA:\n ${listProducts}`)
} if (productTitle) {

    eleccion = eleccion -1

    electionDeProduct()

} 
