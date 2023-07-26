import { Router } from "express";
import { setInformationUpdate } from "./modules/updateFile";
import { multerConfig } from "./multer/multer";
import { getInformationDatabaseController } from "./modules/getInformationDatabaseCsv";
import { ClearDataBase } from "./repositories/prisma/prismaClearDataBase";
import multer from "multer";


const router = Router();


function multerErrorHandling(err: any, req: any, res: any, next: any) {
  if (err instanceof multer.MulterError) {
    // Erro do multer - campo com nome diferente do esperado
    return res.status(400).json({ error: "Invalid field name. Use 'file'." });
  } else if (err) {
    // Outro erro não esperado
    return res.status(500).json({ error: "Error processing the file." });
  }
  // Se não houver erros, continue para o próximo middleware
  next();
}



router.post("/updatefile", multerConfig.single("file"), (req, res, next) => {
  // Se o multer gerar um erro, o próximo middleware será o multerErrorHandling
  next();
}, async (req, res) => {
  // Aqui você pode continuar o tratamento da rota após o multer
  return setInformationUpdate.handle(req, res);
});

router.use(multerErrorHandling);

router.get('/', async (req, res) => {
    return getInformationDatabaseController.handle(req, res);
  });

  router.get('/info/', async (req, res) => {
    return  getInformationDatabaseController.handle(req, res);
  });

  router.get('/info/', async (req, res) => {
    return  getInformationDatabaseController.handle(req, res);
  });


  

  //Bonus
  router.delete('/clear', async (req, res) => {
     const deleteTableSucessull =  await new ClearDataBase().DeleteAll()
     res.status(200).send("Deleted Data")
  });




  router.use((req, res, next) => {
    const error = new Error("Erro aplication!!");
    next(error)
})
  router.use((error: any, req: any, res: any, next: any) => {
      res.status(error.status || 500)
      res.json({ error: error.message })
  })


export { router }