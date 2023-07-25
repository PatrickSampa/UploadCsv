import { Request, Response, response } from 'express';
import { SetInformationFileUseCase } from './updateFileUseCase';
import { setInformationFileUseCase } from '.';
import { CheckSomma } from "./dataBaseHelp/checkSomma"; 

export class SetInformationUpdate{
    constructor(setInformationFileUseCase: SetInformationFileUseCase){}
    async handle(request: Request, response: Response): Promise<Response>{
        const csvText: any = request.file?.buffer.toString("utf-8")
        
        try{
            const checkSomma = await CheckSomma(csvText)   
              
            console.log("doma: "  +checkSomma)
            if(!checkSomma){
                console.log("aqui")
                throw new Error('Not Acceptable');
            }
        const result = await setInformationFileUseCase.execute(csvText);
        
        if(!result){
            console.log("aqui2")
            throw new Error('Conflict');
        }
        
        return response.status(200).json({ message: 'Upload de arquivo concluído com sucesso.' }); 
        }catch(error){
            if(error instanceof Error){
                const errorMessage = error.message || 'Erro desconhecido';
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