import { client } from "../../database/client"

export class ClearDataBase{
    constructor(){}

    async DeleteAll(){
        return await client.user.deleteMany();
    }
    
}