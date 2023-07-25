import { Router } from "express";
import { setInformationUpdate } from "./modules/updateFile";
import { multerConfig } from "./multer/multer";


const router = Router();


router.post("/updatefile", multerConfig.single("file"),(async (req, res) => {
    return setInformationUpdate.handle(req,res)
    
}))


export { router }