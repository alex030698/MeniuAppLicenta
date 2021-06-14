export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
  
  export interface Food{

    id:number;
    name:string;
    price:number;
    amount:number;
    type:string;
    ingredients:string;
    total:number;
    table:number;
  }




  export interface Order{

    
    
  }
  

  export interface OrderFood{

    id:number;
    name:string;
    price:number;
    amount:number;
    type:string;
    ingredients:string;
    total:number;
    table:number;

  }