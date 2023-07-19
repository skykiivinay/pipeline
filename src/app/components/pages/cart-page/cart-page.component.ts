import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from 'src/app/shared/models/cart';
import { cartItem } from 'src/app/shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
    cart!:cart
   constructor(private cartService:CartService){
    this.cartService.getCartObseravable().subscribe(cart=>{
      this.cart = cart;
    })
   }

   ngOnInit(): void {
    
   }

   removeFromCart(cartItem:cartItem){
    this.cartService.removefromCart(cartItem.food.id)
   }

   changeQuantity(cartItem:cartItem,quantityInString:string){
     const quantity = parseInt(quantityInString);
     this.cartService.changeQuantity(cartItem.food.id,quantity)
   }


}
