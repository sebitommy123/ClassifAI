import axios from 'axios';

export async function sendMatrix(endpoint, matrix) {
  //make http request to endpoint via post method with matrix as param

  console.log(matrix[0].length, matrix.length);
  console.log(JSON.stringify(matrix));
  
  const res = await axios.post(endpoint + "?matrix=" + JSON.stringify(matrix));
  
  console.log(res);

  return res.data;
}
