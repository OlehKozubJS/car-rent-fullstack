import { useState } from "react";

import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonLiteStyle";

const CellularAutomatonLite = () => {
  const [cellsData, setCellsData] = useState([]);

  const getCellPosition = (event) => {
    const { clientY, clientX, currentTarget } = event;
    const { top, left } = target.getBoundingClientRect();
    const y = clientY - top;
    const x = clientX - left;
    const cellY = y - (y % 10);
    const cellX = x - (x % 10);

    return { cellY, cellX };
  };

  const getIsCell = (cells, cellY, cellX) => {
    return cells.some(
      (cell) => cell.props.top === cellY && cell.props.left === cellX
    );
  };

  const removeCell = (cells, cellY, cellX) => {
    return cells.filter(
      (cell) => !(cell.props.top === cellY && cell.props.left === cellX)
    );
  };

  const addCellData = (event) => {
    const { cellY, cellX } = getCellPosition(event);

    if (getIsCell(cellsData, cellY, cellX)) {
      setCellsData(removeCell(cellsData, cellY, cellX));
    } else {
      setCellsData([
        ...cellsData,

        <CellStyleBase
          key={`${cellY}, ${cellX}`}
          top={cellY}
          left={cellX}
          isActive={true}
        ></CellStyleBase>,
      ]);
      console.log(getIsCell(cellsData, cellY, cellX));
    }
  };

  return (
    <CellularFieldStyleBase onClick={addCellData}>
      {cellsData.map((cell) => {
        return cell;
      })}
    </CellularFieldStyleBase>
  );
};

export { CellularAutomatonLite };
/*

      {cellsData.map((cellData, cellNumber) => {
        return (

        );
      })}

*/
