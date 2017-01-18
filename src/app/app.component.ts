import { Component } from '@angular/core';
import { IOrder, Order } from './data/Order';
import { IProduct } from './data/IProduct';
import { Product } from './data/Product';
import { Restaurant } from './data/Restaurant';
import { Store } from './data/Store';

let store:Store = new Store();

let oneRestaurant = new Restaurant(store);
let products:Product[] = [
  new Product("1", "Steak", 15),
  new Product("2", "Cheese burger", 13),
  new Product("3", "Frites", 3)
]

/*store.addProducts([new Product("1", "Steak", 15)]);
store.addProducts([new Product("2", "Cheese burger", 13)]);*/
store.addProducts(products);

console.log("/****** PRODUCTS LIST ******/");
for(let i=0; i<products.length; i++){
  console.log("Name:"+ products[i].name +",Price:"+products[i].price);
}
console.log("/***************************/");

console.log("/****** ORDER ******/");
let oneOrder = new Order("MyNewOrder", products);
console.log("BEFORE ORDER:" + oneRestaurant.total);
oneRestaurant.passOrder(oneOrder);
console.log("AFTER ORDER:" + oneRestaurant.total);
console.log("/******************/");

if(store.getProduct("1", oneRestaurant) == null)
  console.log("Product sliced properly after order");






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
