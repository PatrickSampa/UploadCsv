import { Router } from "express";
import { setInformationUpdate } from "./modules/updateFile";
import { multerConfig } from "./multer/multer";
import { getInformationDatabaseController } from "./modules/getInformationDatabaseCsv";


const router = Router();


router.post("/updatefile", multerConfig.single("file"),(async (req, res) => {
    return setInformationUpdate.handle(req,res)
    
}))

router.get('/', async (req, res) => {
    const searchTerm: any = req.query.q; // Use req.query para capturar os parâmetros da URL
    return getInformationDatabaseController.handle(searchTerm, res);
  });

export { router }