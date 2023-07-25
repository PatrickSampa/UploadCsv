import { userDTO } from "../../DTO/userDTO";
import { client } from "../../database/client";
import { TransforToArray } from "./dataBaseHelp/TransformToArray"
import { CheckCsvAlreadyExists } from "./dataBaseHelp/csvAlreadyexists"


export class SetInformationFileUseCase{
    constructor() {}
    async execute(csFormatted: string | undefined | null): Promise<any>{
        
        
        const arrayUser: userDTO[] = await TransforToArray(csFormatted)


        const checkForDuplicity: boolean = await CheckCsvAlreadyExists(arrayUser);

        if(!checkForDuplicity){
            return false
        }

        //insert into bank
        for await(let {name, city, country, favorite_sport} of arrayUser){
            await client.user.create({
                data:{
                    name,
                    city,
                    country,
                    favorite_sport
                }
            })
        }
        
      return true
        
    }
}