const productos = 
{
    id: 1, 
    title: 'Not Chicken Mila (2u) x 220gr - NOTCO',
    price: 465,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/434/490/products/16517762160641-706a5fed60a0e0afd216521499878924-640-0.png'
}


class Contenedor {
    #id
    #title 
    #price
    #thumbnail

    constructor(id) {
        this.#id = parseInt (id);
        this.#title = [];
        this.#price = [];
        this.#thumbnail = url; //?
    }
    
    getId(id) {
        return this.#id
    }

    save(title, price, url) {
        const objeto = {
            title: title, 
            price: price,
            thumbnail: url
        }
        this.#title.push(nombre)
    }   

    getById(id) {
        for (let i = 0; i < array.length; i++) //recibe id y lo busca
    }

    getAll() {
        return
    }

    deleteById() {
        for (let i = 0; i < array.length; i++) //busca
        productos.splice(); //borra
        return
    }

    deleteAll(){
        productos.splice();
    }

}

const producto2 = new Contenedor (2)//?