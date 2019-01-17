import { IngredientResponse } from './ingredient';

export class ProductResponse {
  _id: String;
  name: String;
  price: Number;
  image: String;
  ingredients: IngredientResponse[];
}
