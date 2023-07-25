import { Request, Response, response } from 'express';
import { GetInformationDatabaseUserService } from './getInformationUseService';

export class GetInformationDatabaseController{
    constructor(private getInformationDatabaseUserService: GetInformationDatabaseUserService){}
    async handle(request: Request, response: Response): Promise<Response>{
        try{
             const result = await this.getInformationDatabaseUserService.execute(request) 
        
        return response.status(200).send(result)
        }catch(error){
            return response.status(400).json({ message: 'Invalid paramns.' });
            
        }
        
    }
}