import classNames from "classnames";
import Board from "Components/Board";

import React, { FC } from "react";
import { ClassProps } from "types/helper";

type LogoBoxesTypes = "normal" | "large" | "flex";
const LogoBoxes: FC<{ size?: LogoBoxesTypes } & ClassProps> = ({
  className,
  size = "normal",
}) => (
  <div
    className={classNames(
      "relative z-10 overflow-hidden flex",
      className,
      {
        "h-32 w-32  shadow-xl ": size === "large",
      },
      {
        "h-16 w-16 rounded-md  shadow-sm": size === "normal",
      },
      { "flex-1 rounded-md  shadow-sm ": size === "flex" }
    )}
  >
    <div className="flex-1" />
    <div
      className={classNames(
        "absolute top-0 left-0 right-0 bottom-0 -z-10",
        "flex"
      )}
    >
      <Board
        disabled
        boardState={{
          A2: { player: "white", type: "Pawn" },
          B1: { player: "black", type: "Pawn" },
        }}
        size={2}
        isLittle={size === "normal"}
        highlightedBox={[]}
      />
    </div>
  </div>
);
export default LogoBoxes;
