import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
   return sample_foods;
  }

  getFoodbySearchTerm(searchTerm:string){
    return this.getAll().filter(foods => foods.name.toLowerCase().includes(searchTerm.toLowerCase()) )
   }

   getFoodbyId(foodId:number){
    return this.getAll().find(f=>f.id == foodId) ?? new Food();
   }
  
}
