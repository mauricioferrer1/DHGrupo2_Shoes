let botonAgregar = document.querySelector('.add-cart');

botonAgregar.addEventListener('click', function() {

    let url = window.location.href.split("/");
    let id = url [url.length -1]
    let product = {
        idProducto: id,
        nombreProducto: document.querySelector('.nombre-producto').textContent,
        imagen: document.querySelector('.mainphoto').src,
        precio: document.querySelector('.precio-producto').textContent,
        cantidad: 1
    }

    if(localStorage.length == 0) {
        let carrito = []
        carrito.push(product)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        localStorage.setItem("totalCarrito", product.precio * product.cantidad)
    } else {
        let carrito = JSON.parse(localStorage.carrito)
        let arrayProductos = carrito.filter(function(product){
            return product.idProducto == id
        })

        if(arrayProductos.length == 0){
            carrito.push(product)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        } else {
            arrayProductos[0].cantidad == arrayProductos[0].cantidad + 1;
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }

        let totalCarrito = 0
        for (let i=0; i<carrito.length; i++) {
        let carro = carrito[i].parseInt(precio) * carrito[i].parseInt(cantidad);
        totalCarrito += carro 
        }
        localStorage.setItem("totalCarrito", totalCarrito)
    }
    alert('Agregaste' + " " + product.nombreProducto + " al carrito")
})

