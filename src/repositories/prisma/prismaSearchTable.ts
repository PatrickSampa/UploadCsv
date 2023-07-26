import { Prisma } from "@prisma/client";
import { client } from "../../database/client";

export class SearchTablePrisma{
    constructor(){}

    async searchByParameter(tableName: string){
        
      
                const  allDataTable = await client.user.findMany({
                    select:{
                        [tableName]: true,
                    }
                })
                
                
            return allDataTable

        
    }


    async searchByParameterName(){
        
                 let allDataTable = await client.user.findMany({
                    select:{
                        name: true,
                    }
                })
                return allDataTable


        
    }

    async searchByParameterCity(){
       
                 let allDataTable = await client.user.findMany({
                    select:{
                        city: true,
                    }
                })
                return allDataTable


        
    }


    async searchByParameterCountry(){
        
                 let allDataTable = await client.user.findMany({
                    select:{
                        country: true,
                    }
                })
                return allDataTable


        
    }



    async searchByParameterFavority(){
        
   
                 let allDataTable = await client.user.findMany({
                    select:{
                        favorite_sport: true,
                    }
                })
    
                return allDataTable


        
    }



}