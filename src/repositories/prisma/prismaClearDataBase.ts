import { client } from "../../database/client"

export class ClearDataBase{
    constructor(){}

    async DeleteAll(){
        console.log("chamou")
        return await client.user.deleteMany();
    }
    
}