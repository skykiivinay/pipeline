import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';
import { Observable  } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Tag } from '../shared/models/tag';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOOD_URL } from '../shared/constants/url';
 

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Food[]>{
   return this.httpClient.get<Food[]>(FOOD_URL)
  }

  getFoodbySearchTerm(searchTerm:string){
    return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
   }

   getAllTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(FOODS_TAGS_URL);
   }

   getFoodbyId(foodId:number):Observable<Food>{
    return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId)
   }

   getAllFoodByTag(tag:string):Observable<Food[]>{
    return tag == 'All' ? this.getAll() : this.httpClient.get<Food[]>(FOODS_BY_TAG_URL + tag)
   }
  
}
