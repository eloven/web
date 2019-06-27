import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class Product {
}

@Injectable()
export class InventoryService {

  latestProduct: Product;

  private inventorySubject$ = new BehaviorSubject<Product>(this.latestProduct);

  inventoryChanged$ = this.inventorySubject$.asObservable();

  addToInventory(product: Product) {
    this.latestProduct = product;
    this.inventorySubject$.next(product);
  }

}
