import fs from 'fs';
import path from 'path';

const fileExist = async function (Folder: string, FileName: string) : Promise<boolean>{
    const ImgPath = path.join(path.resolve(Folder), `${FileName}.jpg`);
    const FileExistCheck = fs.existsSync(ImgPath);

    if(FileExistCheck == true) {
        return true;
    } else {
        return false;
    }
}

const filePath = function (Folder: string, FileName: string) {
    const ImgPath = path.join(path.resolve(Folder), `${FileName}.jpg`);
    console.log(ImgPath);
    return ImgPath
}

export {fileExist, filePath};