import { userDTO } from "../../../DTO/userDTO";
import readline from "readline"
import { Readable } from "stream"


export async function TransforToArray(csv: string | undefined | null): Promise<Array<userDTO>> {
    const readablefile = new Readable()
        readablefile.push(csv);
        readablefile.push(null);

        const UserLine = readline.createInterface({
            input: readablefile
        })


    const userArray: userDTO[] = [];

        for await (let line of UserLine) {
            const UserLineSplit = line.split(",")
            if(UserLineSplit[0] != "name" && UserLineSplit[1] != "city"  && UserLineSplit[2] != "country" && UserLineSplit[3] != "favorite_sport"){
                userArray.push({
                    name: UserLineSplit[0],
                    city: UserLineSplit[1],
                    country: UserLineSplit[2],
                    favorite_sport: UserLineSplit[3],
                })
            }
            
        }

     return  userArray;
        
}