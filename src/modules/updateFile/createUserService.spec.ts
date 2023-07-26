import { SetInformationFileUseCase } from "./updateFileUseCase"

//To run this test, ensure that the database is empty, otherwise it will generate an error
describe("Creation of information in the database", () => {


    it("It must be possible to save the data in the database in the correct way", async () =>{
        const createUserService = new SetInformationFileUseCase();

        const dataInCsv: string = "name,city,country,favorite_sport\nJohn Doe,New York,USA,Basketball\nJane Smith,London,UK,Football\nMike Johnson,Paris,France,Tennis\nKaren Lee,Tokyo,Japan,Swimming\nTom Brown,Sydney,Australia,Running\nEmma Wilson,Berlin,Germany,Basketball";

        const UserInsert = await createUserService.execute(dataInCsv);
  
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