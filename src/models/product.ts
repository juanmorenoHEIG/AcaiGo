import { IngredientResponse } from './ingredient';

export class ProductResponse {
  _id: Number;
  name: String;
  price: Number;
  image: String;
  ingredients: Ingredient[];
}
  ingredients: IngredientResponse[];
}
