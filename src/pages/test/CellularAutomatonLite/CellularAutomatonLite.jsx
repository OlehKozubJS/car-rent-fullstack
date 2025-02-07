import { useState } from "react";

import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonLiteStyle";

const CellularAutomatonLite = () => {
  const [cellsData, setCellsData] = useState([]);

  const getCellPosition = (event) => {
    const { clientY, clientX, target } = event;
    const { top, left } = target.getBoundingClientRect();
    const y = clientY - top;
    const x = clientX - left;
    const cellY = y - (y % 10);
    const cellX = x - (x % 10);

    return { cellY, cellX };
  };

  const getIsCell = (cells, cellY, cellX) => {
    return cells.find(
      (cell) => cell.props.top === cellY && cell.props.left === cellX
    );
  };

  const addCellData = (event) => {
    const { cellY, cellX } = getCellPosition(event);

    setCellsData([
      ...cellsData,

      <CellStyleBase
        key={`${cellY}, ${cellX}`}
        top={cellY}
        left={cellX}
        isActive={true}
      ></CellStyleBase>,
    ]);
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
