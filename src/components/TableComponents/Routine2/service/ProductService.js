
export class ProductService {

    getProducts() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }
    getProducts2() {
        return fetch('data/data1.json').then(res => res.json()).then(d => d.data);
    }
    getProducts3() {
        return fetch('data/RoutineData.json').then(res => res.json()).then(d => d.data);
    }
}
    