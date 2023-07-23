import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  let foodObservable : Observable<Food[]>
  activateRoute.params.subscribe(params=>{
    if(params['searchTerm']){
      foodObservable  =this.foodService.getFoodbySearchTerm(params['searchTerm'])
    }else if (params.tag){
      foodObservable = this.foodService.getAllFoodByTag(params.tag)
    }
    else{
      foodObservable = foodService.getAll();
      foodObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      })
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
