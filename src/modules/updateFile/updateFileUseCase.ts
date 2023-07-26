import { userDTO } from "../../DTO/userDTO";
import { RepositoryCreateCsv } from "../../repositories/prisma/prismaCreateCsvRepository";
import { TransforToArray } from "./dataBaseHelp/TransformToArray"
import { CheckCsvAlreadyExists } from "./dataBaseHelp/csvExists";





export class SetInformationFileUseCase{
    constructor() {}
    async execute(csFormatted: string | undefined | null): Promise<any>{
        
        const arrayUser: userDTO[] = await TransforToArray(csFormatted)


        const checkForDuplicity: boolean = await CheckCsvAlreadyExists(arrayUser);

        if(!checkForDuplicity){
            return false
        }

        //insert into bank
        const fileCsvDatabase = await new RepositoryCreateCsv().createFileCsvDatabase(arrayUser)
        
        return fileCsvDatabase
        
    }
}