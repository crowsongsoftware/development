import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { DetailState } from '../recipe.state';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: DetailState | undefined;

  private getDetail(){
    if(this.recipeService.Detail){
      this.recipe = this.recipeService.Detail;
    }else{
      this.recipe = {
        category: ['...undefined'],
        description: '...undefined',
        directions: ['...undefined'],
        id: '...undefined',        image: '',
        ingredients: ['...undefined'],
        nutritionInformation: ['...undefined'],
        summary: ['...undefined'],
        title: '...undefined'
      }
    };
  }
  constructor(private recipeService: RecipeService) { 
    this.getDetail();
  };

  ngOnInit(): void {
    console.log("recipe: ", this.recipe);
  }

}
