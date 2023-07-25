import { userDTO } from "../../DTO/userDTO";
import { client } from "../../database/client";

export class RepositoryCreateCsv{
    constructor(){}
    async createFileCsvDatabase(csvArray: userDTO[]){
        for await(let {name, city, country, favorite_sport} of csvArray){
            await client.user.create({
                data:{
                    name,
                    city,
                    country,
                    favorite_sport
                }
            })
        }
        return this.showAll();
    }

    async showAll(){
        return await client.user.findMany();
    }


}