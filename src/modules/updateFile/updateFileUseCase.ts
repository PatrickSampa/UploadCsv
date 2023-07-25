import { userDTO } from "../../DTO/userDTO";
import { client } from "../../database/client";
import { RepositoryCsv } from "../../repositories/prisma/prismaCreateCsvRepository";
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
        const fileCsvDatabase = await new RepositoryCsv().createFileCsvDatabase(arrayUser)
        
        return fileCsvDatabase
        
    }
}