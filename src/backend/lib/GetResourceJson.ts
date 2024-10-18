import fs from 'fs';
import path from 'path';


export const GetResourceJson = async() =>{
    const Resourcepath  = path.join(__dirname,"../config/name.json")

    try {
        if(!fs.existsSync(Resourcepath)){
            try {
                await fs.promises.writeFile(Resourcepath, "{}", 'utf-8')
            } catch (error) {
                
            }
        }
        const readedfile = await fs.promises.readFile(Resourcepath,"utf-8")
        const jsonRes = JSON.parse(readedfile)
        return jsonRes
    } catch (error) {
        console.log(error)
    }

    console.log(Resourcepath)
}

