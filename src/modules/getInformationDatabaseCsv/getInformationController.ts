import { Request, Response } from 'express';
import { GetInformationDatabaseUserService } from './getInformationUseService';

export class GetInformationDatabaseController{
    constructor(private getInformationDatabaseUserService: GetInformationDatabaseUserService){}
    async handle(request: Request, response: Response): Promise<Response>{
        
        try{
             const result = await this.getInformationDatabaseUserService.execute(request.query) 
                
        return response.status(200).send(result)
        }catch(error){
            if(error instanceof Error){
                const errorMessage = error.message || 'Erro undefined';
                if(errorMessage == "DatabaseEmpity"){
                    return response.status(409).json({ message: 'DatabaseEmpity.' });
                }
                
            }

            return response.status(400).json({ message: 'Invalid paramns.' });
            
        }
        
    }
}