import { GetInformationDatabaseController } from "./getInformationController";
import { GetInformationDatabaseUserService } from "./getInformationUseService";


export const getInformationDatabaseUserService = new GetInformationDatabaseUserService()

export const getInformationDatabaseController = new GetInformationDatabaseController(getInformationDatabaseUserService)