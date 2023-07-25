import { Request, Response, response } from 'express';
import { GetInformationDatabaseUserService } from './getInformationUseService';

export class GetInformationDatabaseController{
    constructor(getInformationDatabaseUserService: GetInformationDatabaseUserService){}
    async handle(request: Request, response: Response): Promise<Response>{
        
        
        try{
               
        
        return response.status(200).json({ message: 'Upload de arquivo concluído com sucesso.' }); 
        }catch(error){
            if(error instanceof Error){
                const errorMessage = error.message || 'Erro undefined';
                if(errorMessage == "Conflict"){
                    return response.status(409).json({ message: 'REPEATED CSV.' });
                }else if(errorMessage == "Not Acceptable"){
                    return response.status(406).json({ message: 'INVALID FORMAT CSV.' });
                }
                
            }
            return response.status(400).json({ message: 'invalid file.' });
            
        }
        
    }
}