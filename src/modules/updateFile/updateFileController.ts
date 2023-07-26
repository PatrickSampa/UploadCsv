import { Request, Response, response } from 'express';
import { SetInformationFileUseCase } from './updateFileUseCase';
import { CheckSomma } from "./dataBaseHelp/checkSomma"; 

export class SetInformationUpdate{
    constructor(private setInformationFileUseCase: SetInformationFileUseCase){}
    async handle(request: Request, response: Response): Promise<Response>{
        const csvText: any = request.file?.buffer.toString("utf-8")
        
        try{
               
        const result = await this.setInformationFileUseCase.execute(csvText);
        
        if(!result){
            throw new Error('Conflict');
        }
        
        return response.status(200).json(result); 
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