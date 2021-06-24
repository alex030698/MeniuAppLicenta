export interface Food{
    id:number;
    name:string;
    type:string;
    amount:number;
    price:number;
    ingredients:string;
    preparationTime:number;
    tableId:number;
}


export interface OrdersResponse{
    id:number;
    orderNo:number;
    orderDate:Date;
    price:number;
    waittingTime:number;
    paid:string;
    served:string;
    comment:string;
    table:number;
    food:Food[];
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }