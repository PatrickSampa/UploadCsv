import { client } from '../../../database/client'
import { userDTO } from '../../../DTO/userDTO'

export async function CheckCsvAlreadyExists(users: userDTO[]): Promise<boolean>{
    const resultUser = await client.user.findMany();

    if(users.length == resultUser.length){
        const equals = users.every((obj1, index) => {
            const obj2 = resultUser[index];
          
            return (
              obj1.name === obj2?.name &&
              obj1.city === obj2?.city &&
              obj1.country === obj2?.country &&
              obj1.favorite_sport === obj2?.favorite_sport
            );
          });

          if(equals){
            return false
          }
        
    }
    return true

   

}

