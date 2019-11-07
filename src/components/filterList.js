import products from '../products.json'

export default function filterList(arr, method) {

    if(method == null) return products;

    else {
          return products.filter(product => {
          const sizeArray = product.size.split(" ");
          console.log(sizeArray);
          if(sizeArray.some(r=> arr.indexOf(r) >= 0)) {
          return product;
          }
      })  
    }
}

