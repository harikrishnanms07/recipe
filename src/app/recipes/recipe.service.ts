import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'first test recipe',
      'The best momos you could ever get is this one. its fried cheezy chicken momos',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'second test recipe',
      'this simply a test',
      'https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  // recipeSelected = new Subject<Recipe>();
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipesChanged.next(this.recipes.slice());
    this.recipes[index] = newRecipe;
  }
  DeleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
