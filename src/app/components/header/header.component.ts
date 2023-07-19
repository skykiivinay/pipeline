import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQunatity!:0;
  constructor(cartService:CartService) {
     cartService.getCartObseravable().subscribe((newCart:any)=>{
      this.cartQunatity = newCart.totalCount
     })
  }

  ngOnInit(): void {
    
  }
}
