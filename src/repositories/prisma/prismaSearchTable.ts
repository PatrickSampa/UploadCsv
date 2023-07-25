import { Prisma } from "@prisma/client";
import { client } from "../../database/client";

export class SearchTablePrisma{
    constructor(){}

    async searchByParameter(tableName: string){
        
        try{
                const  allDataTable = await client.user.findMany({
                    select:{
                        [tableName]: true,
                    }
                })
                
            return allDataTable

        }catch(e){
            throw new Error("Error"+e);
        }
    }


    async searchByParameterName(){
        try{
                 let allDataTable = await client.user.findMany({
                    select:{
                        name: true,
                    }
                })
                return allDataTable


        }catch(e){
            throw new Error("Error"+e);
        }
    }

    async searchByParameterCity(){
        try{
                 let allDataTable = await client.user.findMany({
                    select:{
                        city: true,
                    }
                })
                return allDataTable


        }catch(e){
            throw new Error("Error"+e);
        }
    }


    async searchByParameterCountry(){
        try{
                 let allDataTable = await client.user.findMany({
                    select:{
                        country: true,
                    }
                })
                return allDataTable


        }catch(e){
            throw new Error("Error"+e);
        }
    }



    async searchByParameterFavority(){
        try{
            console.log("ENTROU")
                 let allDataTable = await client.user.findMany({
                    select:{
                        favorite_sport: true,
                    }
                })
                console.log("Favo",allDataTable)
                return allDataTable


        }catch(e){
            console.log(e)
            throw new Error("Error"+e);
        }
    }


}