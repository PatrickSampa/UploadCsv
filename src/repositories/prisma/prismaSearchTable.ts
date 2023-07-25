import { client } from "../../database/client";

export class SearchTablePrisma{
    constructor(){}

    async searchByParameter(tableName: any){
        try{
            const allDataTable = await client.user.findMany({
                select:{
                    [tableName]: true,
                }
            })
            return allDataTable

        }catch(e){
            throw new Error("Error"+e);
        }
    }



}