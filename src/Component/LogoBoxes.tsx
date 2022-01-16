import classNames from "classnames";
import React, { FC } from "react";
import { ClassProps } from "../type";
import Board from "./Board";
type LogoBoxesTypes = "normal" | "large";
const LogoBoxes: FC<{ size?: LogoBoxesTypes } & ClassProps> = ({
  className,
  size = "normal",
}) => (
  <div
    className={classNames(
      "relative z-10 flex",
      className,
      {
        "h-32 w-32 shadow-xl ": size === "large",
      },
      {
        "h-16 w-16  shadow-sm": size === "normal",
      }
    )}
  >
    <div className="flex-1" />
    <div
      className={classNames(
        "absolute top-0 overflow-hidden  -z-10",
        "flex",
        { "h-32 w-32 rounded-xl": size === "large" },
        { "h-16 w-16 rounded-md": size === "normal" }
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
