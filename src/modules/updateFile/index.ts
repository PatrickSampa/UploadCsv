import { SetInformationUpdate } from "./updateFileController";
import { SetInformationFileUseCase } from "./updateFileUseCase";

export const setInformationFileUseCase = new SetInformationFileUseCase();

export const setInformationUpdate = new SetInformationUpdate(setInformationFileUseCase);