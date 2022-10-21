
class Contenedor {
    #producto

    constructor() {
        this.#producto = [];

    }

    save(id, title, price, thumbnail) {
        const objeto = {
            id: parseInt(id),
            title: title, 
            price: price,
            thumbnail: thumbnail
        }

        this.#producto.push(objeto);
    }   
        
    getId(id) {
        return this.#producto(id);
    }

    getById(id) {
        if (this.#producto.length > 0) {
           return this.#producto.find(item => item.id === id);
        }else {
            return null;
        }
    }

    getAll() {
        return
    }

    deleteById(id) {
        this.#producto.find(item => item.id === id); //busca
        this.#producto.splice(id); //borra??
        return
    }

    deleteAll(){
        this.#producto.splice();
    }

}

const productos = new Contenedor (1, 'not chicken mila', 465, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/434/490/products/16517762160641-706a5fed60a0e0afd216521499878924-640-0.png');

productos.getId();

// const productos = 
// {
//     id: 1, 
//     title: 'Not Chicken Mila (2u) x 220gr - NOTCO',
//     price: 465,
//     thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/434/490/products/16517762160641-706a5fed60a0e0afd216521499878924-640-0.png'
// }

