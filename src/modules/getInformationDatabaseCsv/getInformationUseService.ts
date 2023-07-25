import { SearchTablePrisma } from "../../repositories/prisma/prismaSearchTable";


export class GetInformationDatabaseUserService{
    constructor(){}

    async execute(params: any){

        const InfoTable = await new SearchTablePrisma().searchByParameter(params)
        

        return InfoTable




    }



}