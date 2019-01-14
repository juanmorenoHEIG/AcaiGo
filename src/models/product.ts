import { IngredientResponse } from './ingredient';

export class ProductResponse {
  prodId: Number;
  name: String;
  price: Number;
  image: String;
  Ingredients: IngredientResponse[];
}