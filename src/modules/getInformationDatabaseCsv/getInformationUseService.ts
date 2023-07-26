import { RepositoryCreateCsv } from "../../repositories/prisma/prismaCreateCsvRepository";
import { SearchTablePrisma } from "../../repositories/prisma/prismaSearchTable";


export class GetInformationDatabaseUserService{
    constructor(){}

    async execute(params: any){
        if(params['q'] && params['name']){
            if(params['q'] == 'name'){
                let result = await new SearchTablePrisma().searchByParameterName();
                for await (let line of result){
                    if((line.name).toLowerCase().split(' ').join('') == (params['name']).toLowerCase().split(' ').join('')){
                        return new RepositoryCreateCsv().showAll()
                    }
                }
            }else if(params['q'] == 'city'){
                let result = await new SearchTablePrisma().searchByParameterCity();
                for await (let line of result){
                    if((line.city).toLowerCase().split(' ').join('') == (params['name']).toLowerCase().split(' ').join('')){
                        return new RepositoryCreateCsv().showAll()
                    }
                }
            }else if(params['q'] == 'country'){
                let result = await new SearchTablePrisma().searchByParameterCountry();
                for await (let line of result){
                    if((line.country).toLowerCase().split(' ').join('') == (params['name']).toLowerCase().split(' ').join('')){
                        return new RepositoryCreateCsv().showAll()
                    }
                }
                
            }else if(params['q'] == 'favorite_sport'){
                let result = await new SearchTablePrisma().searchByParameterFavority();
                for await (let line of result){
                    if((line.favorite_sport).toLowerCase().split(' ').join('') == (params['name']).toLowerCase().split(' ').join('')){
                        return new RepositoryCreateCsv().showAll()
                    }
                }
            }
         throw new Error();   
           
        }else{
            if(params['q'] == "name"){
                return await new SearchTablePrisma().searchByParameterName();
            }else if(params['q'] == "city"){
                return await new SearchTablePrisma().searchByParameterCity();
            }else if(params['q'] == "country"){
                return await new SearchTablePrisma().searchByParameterCountry();
            }else if(params['q'] == "favorite_sport"){
                return await new SearchTablePrisma().searchByParameterFavority();
            }
            throw new Error();
            
        }

        

    }



}