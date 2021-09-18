import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { map }  from 'rxjs/operators';
//import { mergeWith }  from 'rxjs/operators/mer';
import { RecipeService } from '../recipe.service';
import { DetailState } from '../recipe.state';
import { DetailViewModel } from './recipe-detal.viewmodel';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public detail$! : Observable<DetailViewModel>;
  public detailSubject: Subject<DetailViewModel> = new Subject<DetailViewModel>();

  public recipe!: DetailState;
  public someString: string = "Some String";

  /*
  private getDetail(){
    if(this.recipeService.Detail){
      this.recipe = this.recipeService.Detail;
    }else{
      this.recipe = {
        categories: ['...undefined'],
        description: '...undefined',
        directions: ['...undefined'],
        id: '...undefined',        image: '',
        ingredients: ['...undefined'],
        nutritionInformation: ['...undefined'],
        summary: ['...undefined'],
        title: '...undefined'
      }
    };
  };
  */

  constructor(private recipeService: RecipeService) { 
    //this.getDetail();

    /*
      the subjects are mapped to an anonymous function that 
      accepts as parameter the previous state of the viewmodel (vm:ICounterVm)
      and that returns the mutated viewmodel
      they are the viewmodel mutation functions
    */

    const set$ = this.detailSubject.pipe(
      map(x => x)
    );

    this.detail$ = merge();
  };

  ngOnInit(): void {
    console.log("recipe: ", this.recipe);
  };
};

//  map( delta => (vm:ICounterVm) => ({...vm, counter:vm.counter+delta}) )