
export class ProductService {

    getProducts1() {
        return fetch('data/RandomData.json').then(res => res.json()).then(d => d.data);
    }
    getProducts2() {
        return fetch('data/data1.json').then(res => res.json()).then(d => d.data);
    }
}
    