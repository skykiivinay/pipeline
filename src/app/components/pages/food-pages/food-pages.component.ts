import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-pages',
  templateUrl: './food-pages.component.html',
  styleUrls: ['./food-pages.component.css']
})
export class FoodPagesComponent implements OnInit {
  food!:Food
  constructor(activatedRoute:ActivatedRoute,private router:Router,private foodService:FoodService,private cartService:CartService) {
    activatedRoute.params.subscribe(p=>{
      if(p['id']){
        this.food=this.foodService.getFoodbyId(p['id'])
      }
    })
  }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
