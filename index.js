
class Contenedor {
    #producto;
    #file;

    constructor(road) {
        this.#producto = [];
        this.#file = road;
    }

    async save(title, price, thumbnail) {
        const objeto = {
            title: title, 
            price: parseInt(price),
            thumbnail: thumbnail
        };
        try {
            if (this.#producto.length === 0){
                objeto.id === 1;
                this.#producto.push(objeto);
            }else {
                objeto.id = this.#producto[this.#producto.length].id + 1;
                this.#producto.push(objeto);
            }
            await fs.promises.writeFile(this.#road, JSON.stringify(this.#producto, null, '/t'))
        }
    }   
        
    async getId(id) {

        try {
            return this.#producto.objeto(id);
        }

    }

    async getById(id) {

        try {
            if (this.#producto.length > 0) {
                if (this.#producto.find(item => item.id === id)){
                    console.log('el item encontrado es: ' )
                    console.log (Contenedor(objeto))
                } else if (this.#producto.find(item => item.id === id)) {
                    console.log('Tal item no existe' )
                }  
            }else {
                return null;
            }
        }
    }

    async getAll(objeto) {
        try {
            const newArray = objeto.filter(i => i > 0);
            return newArray;
        }

    }

    async deleteById(id) {

        try {
            this.#producto.splice(this.#producto.find(item => item.id === id)); 
        }

        }


    async deleteAll(){
        try {
            this.#producto.splice();
        }
    }

}

const productos = new Contenedor (1, 'not chicken mila', 465, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/434/490/products/16517762160641-706a5fed60a0e0afd216521499878924-640-0.png');
