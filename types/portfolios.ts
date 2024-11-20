export interface Portfolio {
    id:string,name:string,description:string,likes:number,links:{github:string,main_page:string}
}

export interface PortfolioList extends Array<Portfolio>{

}