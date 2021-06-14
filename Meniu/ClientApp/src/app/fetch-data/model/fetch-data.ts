import { Food } from "src/app/home/model/home";


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