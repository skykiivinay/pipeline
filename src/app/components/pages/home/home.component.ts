import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
foods:Food[]=[];
 constructor(private foodService:FoodService,activateRoute:ActivatedRoute){
  activateRoute.params.subscribe(params=>{
    if(params['searchTerm']){
      this.foods  =this.foodService.getFoodbySearchTerm(params['searchTerm'])
    }else{
      this.foods = foodService.getAll();
    }
  })
 }

calculateRating(star:any) {
  const maxStars = 5;
  const filledStar = '★';
  const emptyStar = '☆';
  
  const filledStarsCount = Math.round(star);
  const emptyStarsCount = maxStars - filledStarsCount;
  
  const rating = filledStar.repeat(filledStarsCount) + emptyStar.repeat(emptyStarsCount);
  
  return rating;
}


 ngOnInit(){
 }

}
