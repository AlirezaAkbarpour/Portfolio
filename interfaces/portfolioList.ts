import { Key } from "react"

export interface ListPortfolios {
    id: Key,
    name:string,
    links:{
      github:string,
      main_page:string
    }
  }