import sharp from 'sharp';

// Resize function
const Resize = async function (
  FileName: string,
  Width: number,
  Height: number
) {
  await sharp('./full/' + FileName + '.jpg')
    .resize(Width, Height)
    .toFile('./thumb/' + FileName + '_' + Width + '_'+ Height + '.jpg');
};

export default Resize;
