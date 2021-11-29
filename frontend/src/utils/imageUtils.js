
export function imageElementToMatrix(imageElement, forceWidth, forceHeight) {
  // make canvas, paint image on canvas, export as 2d matrix of rgb
  const canvas = document.createElement('canvas');
  canvas.width = forceWidth ? forceWidth : imageElement.width;
  canvas.height = forceHeight ? forceHeight : imageElement.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  const matrix = [];
  for (let i = 0; i < data.length; i += 4) {
    if ((i/4) % canvas.width === 0) {
      matrix.push([]);
    }
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    matrix[matrix.length - 1].push([r, g, b]);
  }

  return matrix;
}
