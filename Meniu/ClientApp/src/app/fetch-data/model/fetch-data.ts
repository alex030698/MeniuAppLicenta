export interface Food{
    id:number;
    name:string;
    type:string;
    amount:string;
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
    paid:boolean;
    served:boolean;
    comment:string;
    table:number;
    food:Food[];
}