import { getCoordinate } from "amaurycoudr-checkers";
import {
  BoardJSON,
  CoordinatesStr,
  PieceJSON,
} from "amaurycoudr-checkers/utils/type";
import classNames from "classnames";
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
  onClick?: (coordinates: CoordinatesStr) => void;
  disabled?: boolean;
  isLittle?: boolean;
  size: number;
  boardState: BoardJSON;
};
const Board: FC<BoardProps> = ({
  onClick,
  disabled,
  boardState,
  size,
  highlightedBox,
  isLittle,
}) => {
  const sizeArray = new Array(size).fill(undefined);

  const boardData = sizeArray.map((_, y) => {
    return sizeArray.map((_, x): BoxData => {
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
      return (
        <BoardBox
          onClick={onClick}
          disabled={disabled}
          isLittle={isLittle}
          key={props.coordinates}
          {...props}
        />
      );
    },
    [onClick, disabled, isLittle]
  );

  const renderRow = (rowData: BoxData[], y: number) => {
    return (
      <div key={y} className="flex flex-1">
        {rowData.map(renderBox)}
      </div>
    );
  };

  return (
    <div className={classNames("flex-1 flex flex-col-reverse")}>
      {boardData.map(renderRow)}
    </div>
  );
};

const BoardBox: FC<
  BoxData & {
    onClick?: (coordinates: CoordinatesStr) => void;
    disabled?: boolean;
    isLittle?: boolean;
  }
> = React.memo(
  ({
    onClick,
    isBlackBox,
    player,
    type,
    coordinates,
    isLittle,
    isHighlighted,
    disabled,
  }) => (
    <Box
      onClick={() => onClick?.(coordinates)}
      {...{ isHighlighted, isBlackBox }}
      disabled={!isBlackBox || disabled}
    >
      {player && type ? <Piece {...{ player, type, isLittle }} /> : <></>}
    </Box>
  )
);

export default Board;
