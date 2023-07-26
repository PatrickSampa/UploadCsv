export async function SeachLine(ArrayData: Array<any>, name: string, nameColun: string){
    console.log(name, nameColun)
    for await (let line of ArrayData){
        if((line[nameColun]).toLowerCase().split(' ').join('') == (name).toLowerCase().split(' ').join('')){
            return line
        }
    }
}