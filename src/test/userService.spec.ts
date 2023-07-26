import { GetInformationDatabaseUserService } from "../modules/getInformationDatabaseCsv/getInformationUseService";
import { SetInformationFileUseCase } from "../modules/updateFile/updateFileUseCase"
import { ClearDataBase } from "../repositories/prisma/prismaClearDataBase";

//To run this test, ensure that the database is empty, otherwise it will generate an error
describe("Creation of information in the database", () => {


    it("It must be possible to save the data in the database in the correct way", async () =>{

        const dataInCsv: string = "name,city,country,favorite_sport\nJohn Doe,New York,USA,Basketball\nJane Smith,London,UK,Football\nMike Johnson,Paris,France,Tennis\nKaren Lee,Tokyo,Japan,Swimming\nTom Brown,Sydney,Australia,Running\nEmma Wilson,Berlin,Germany,Basketball";


        const createUserService = new SetInformationFileUseCase();
        const UserInsert: Array<any> = await createUserService.execute(dataInCsv);
       
        UserInsert.forEach((element: any) => {
            expect(element).toHaveProperty('id');
            expect(element).toHaveProperty('name');
            expect(element).toHaveProperty('city');
            expect(element).toHaveProperty('country');
            expect(element).toHaveProperty('favorite_sport');
        
            // Check if the type of each property is string
            expect(typeof element.id).toBe('string');
            expect(typeof element.name).toBe('string');
            expect(typeof element.city).toBe('string');
            expect(typeof element.country).toBe('string');
            expect(typeof element.favorite_sport).toBe('string');
          });
    })



})

describe("Check the return data from the database", () =>{


    it("check if the information exists, but for that you need to pass the information column and the information included in the column", async () => {
        const info = {q: 'name', name: 'John Doe'}
        const verifyData = await  new GetInformationDatabaseUserService().execute(info);

        
            expect(verifyData).toHaveProperty('id');
            expect(verifyData).toHaveProperty('name');
            expect(verifyData).toHaveProperty('city');
            expect(verifyData).toHaveProperty('country');
            expect(verifyData).toHaveProperty('favorite_sport');
        
            // Check if the type of each property is string
            expect(typeof verifyData.id).toBe('string');
            expect(typeof verifyData.name).toBe('string');
            expect(typeof verifyData.city).toBe('string');
            expect(typeof verifyData.country).toBe('string');
            expect(typeof verifyData.favorite_sport).toBe('string');
          

    })



    it("Check column data", async () =>{
        const nameTable = {q: 'name'};
        const expectedData = [
            { name: 'John Doe' },
            { name: 'Jane Smith' },
            { name: 'Mike Johnson' },
            { name: 'Karen Lee' },
            { name: 'Tom Brown' },
            { name: 'Emma Wilson' },
          ];
        const verifyData = await new GetInformationDatabaseUserService().execute(nameTable);
        expect(verifyData).toEqual(expectedData)
    })



    it("DeleteTheDataBase", async () =>{
        const sizeDatabase = {count: 6}
        const clear = await new ClearDataBase().DeleteAll();
        expect(clear).toEqual(sizeDatabase)
    })
})