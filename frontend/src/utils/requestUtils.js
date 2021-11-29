
export function sendMatrix(endpoint, matrix) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((new Array(5).fill(0).map(() => Math.random())));
    }, 1000);
  });
}
