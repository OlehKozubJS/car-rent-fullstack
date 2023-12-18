import { readFile, writeFile } from 'fs/promises';

const getData = async () => {
  const data = await readFile('./data.txt');
  return JSON.parse(data);
};

const setData = async data => {
  await writeFile('./data.txt', JSON.stringify(data));
};

export { getData, setData };
