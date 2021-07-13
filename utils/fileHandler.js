const fs = require('fs');
const {v4: uuid} = require('uuid');

const allowExtensions =["png","jpeg","jpg"];

const saveFile = (file,allowE, destFolder = "./public/images") => {
    const [type,extension] = file.mimetype.split("/");
    try {

        if(!allowE.includes(extension))throw new Error("Formato equivocado");
        const uid = uuid();
        const fileName =`${uid}.${extension}`
        const fileNameOut = `${destFolder}/${uid}.${extension}`;
        fs.createReadStream(file.path).pipe(fs.createWriteStream(fileNameOut));
        fs.unlink(file.path,(err)=> console.log(err));
        return fileName;
    } catch (error) {
        console.log(error);
    }

}  

const imgFile = (file) => saveFile(file,allowExtensions);

module.exports = {imgFile};



