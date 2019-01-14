import { IngredientResponse } from './ingredient';

export class ProductResponse {
  prodId: Number;
  name: String;
  price: Number;
  image: String;
  ingredients: Ingredient[];
}
