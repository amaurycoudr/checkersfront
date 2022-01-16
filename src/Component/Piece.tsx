import { PieceJSON } from "amaurycoudr-checkers/utils/type";
import classNames from "classnames";
import React, { FC } from "react";

const Piece: FC<PieceJSON & { isLittle?: boolean }> = ({
  player,
  type,
  isLittle,
}) => (
  <>
    <div
      className={`w-full h-full	rounded-full   transition-all duration-500 box-border border-2 ${
        isLittle ? "" : "lg:border-4"
      } border-slate-300 ${
        player === "black" ? "bg-slate-800" : "bg-slate-100"
      }  ${type ? "opacity-100" : "opacity-0"}
        flex items-center justify-center
        `}
    >
      {type === "Queen" && (
        <div
          className={classNames(
            "w-1/2 h-1/2 rounded-full border-2  border-slate-300 ",
            { "lg:border-4": !isLittle }
          )}
        />
      )}
    </div>
  </>
);

export default Piece;
