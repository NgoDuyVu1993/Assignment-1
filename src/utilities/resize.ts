import sharp from 'sharp';

// Resize function
const Resize = async function (
  FileName: string,
  Height: number,
  Width: number
) {
  await sharp('./full/' + FileName + '.jpg')
    .resize(Height, Width)
    .toFile('./thumb/' + FileName + '_' + Height + '_'+  Width + '.jpg');
};

export default Resize;
