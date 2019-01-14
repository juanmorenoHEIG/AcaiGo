import { ProductResponse } from './product';

export class ProdListeResponse {
    page: Number;
    pageSize: Number;
    total: Number;
    totalPages: Number;
    data: ProductResponse[];
}