import express, { response } from 'express';
import Resize from "../../utilities/resize";
import { fileExist } from "../../utilities/checkfileExist";
import { filePath } from "../../utilities/checkfileExist";

const processImg = express.Router();

processImg.get('/', async (request: express.Request, response: express.Response) => {
    const FileName = request.query.filename as string;
    const Height = parseInt(request.query.height as string);
    const Width = parseInt(request.query.width as string);

    // Check the file name is exist
    let exist = await fileExist('full', FileName);
    if (FileName == null || !exist) {
        response.status(400).send(`The image name ${FileName} is invalid!`);
        return;
    }

    // Check the parameter is correct
    if ((Height <= 0 || isNaN(Height) == true) || (Width <= 0 || isNaN(Width) == true)) {
        response.status(400).send(`The parameters hight or width are not correct.`);
        return;
    }

    // If the file is already exist
    exist = await fileExist('thumb', `${FileName}_${Height}_${Width}`);
    if(exist == true) {
        response.status(200).sendFile(filePath('thumb', `${FileName}_${Height}_${Width}`));
        return;
    }

    // Processing the image
    await Resize(FileName, Width, Height);
    response.status(200).sendFile(filePath('thumb', `${FileName}_${Height}_${Width}`));
})

export default processImg;
