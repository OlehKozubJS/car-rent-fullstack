import { readFile, writeFile } from 'fs/promises';

const getData = async () => {
  const data = await readFile('./data.txt');
  console.log(data);
};
