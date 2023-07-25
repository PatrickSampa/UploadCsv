import { SearchTablePrisma } from "../../repositories/prisma/prismaSearchTable";


export class GetInformationDatabaseUserService{
    constructor(){}

    async execute(params: any){

        if(params['q'] && params['name']){
            const InfoTable = await new SearchTablePrisma().searchByParameter(params['q'])
            const InfableFormatedJson = JSON.stringify(InfoTable)
            InfoTable
            if (InfoTable) {
              } else {
                return null; // Caso não existam registros, retorna null
              }
        }else{
            const InfoTable = await new SearchTablePrisma().searchByParameter(params['q'])
            return InfoTable
        }

        

    }



}