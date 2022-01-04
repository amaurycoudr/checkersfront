import { getCoordinate } from "amaurycoudr-checkers";
import {
  BoardJSON,
  CoordinatesStr,
  PieceJSON,
} from "amaurycoudr-checkers/utils/type";
import React, { FC, useCallback } from "react";
import Box from "./Box";
import Piece from "./Piece";

type EmptyBox = {
  isHighlighted: boolean;
  coordinates: CoordinatesStr;
  isBlackBox: boolean;
};
type BoxData = EmptyBox & Partial<PieceJSON>;

type BoardProps = {
  highlightedBox: CoordinatesStr[];
  onClick: (coordinates: CoordinatesStr) => void;
  boardState: BoardJSON;
};
const Board: FC<BoardProps> = ({ onClick, boardState, highlightedBox }) => {
  const array10 = new Array(10).fill(undefined);

  const boardData = array10.map((_, y) => {
    return array10.map((_, x): BoxData => {
      const coordinates = getCoordinate(x, y);
      const piece = boardState[coordinates];

      return {
        isHighlighted: highlightedBox.includes(coordinates),
        coordinates,
        isBlackBox: x % 2 === y % 2,
        type: piece?.type,
        player: piece?.player,
      };
    });
  });

  const renderBox = useCallback(
    ({ ...props }: BoxData) => {
      return <BoardBox onClick={onClick} key={props.coordinates} {...props} />;
    },
    [onClick]
  );

  const renderRow = (rowData: BoxData[], y: number) => {
    return (
      <div key={y} className="flex flex-1">
        {rowData.map(renderBox)}
      </div>
    );
  };

  return (
    <div className="w-[96vw] h-[96vw] overflow-hidden bg-gray-100 shadow-lg  rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl sm:w-[600px] sm:h-[600px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] flex flex-col-reverse">
      {boardData.map(renderRow)}
    </div>
  );
};

const BoardBox: FC<
  BoxData & { onClick: (coordinates: CoordinatesStr) => void }
> = React.memo(
  ({ onClick, isBlackBox, player, type, coordinates, isHighlighted }) => (
    <Box
      onClick={() => onClick(coordinates)}
      {...{ isHighlighted, isBlackBox }}
    >
      {player && type ? <Piece {...{ player, type }} /> : <></>}
    </Box>
  )
);

export default Board;
