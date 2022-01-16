import { Color } from "amaurycoudr-checkers/utils/type";
import Typos from "Components/core/Typos";
import Piece from "Components/Piece";
import { capitalizeFirstLetter } from "helper";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type PartyStateProps = {
  playerTurn: Color;
  remainingPieceWhite: number;
  remainingPieceBlack: number;
};
const PartyState: FC<PartyStateProps> = ({
  playerTurn,
  remainingPieceWhite,
  remainingPieceBlack,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative  select-none overflow-hidden rounded-md z-10 shadow-md ">
      <Background />
      <div className="grid grid-flow-col grid-cols-2 divide-x-2 sm:grid-cols-none sm:grid-flow-row sm:divide-x-0 sm:divide-y-2 divide-slate-500  sm:grid-rows-2 p-5">
        <div className="flex flex-col p-2 items-center">
          <Typos.H5 className="flex flex-1justify-center">
            {capitalizeFirstLetter(t("partyState.turn"))}
          </Typos.H5>
          <div className="h-[6vw] w-[6vw] md:h-[4vw] md:w-[4vw]">
            <Piece type="Pawn" player={playerTurn} />
          </div>
        </div>
        <div className="flex flex-col p-2 ">
          <Typos.H5 className="flex justify-center">
            {capitalizeFirstLetter(t("partyState.pieces"))}
          </Typos.H5>
          <div className="flex ">
            <PieceCount remainingPiece={remainingPieceWhite} color="white" />
            <div className="w-2" />
            <PieceCount remainingPiece={remainingPieceBlack} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Background = () => (
  <>
    <div className="absolute h-36 w-36 blur-md mix-blend-multiply opacity-50 not-sr-only rounded-full -z-10 transition-all  bg-teal-300  top-0 right-6" />
    <div className="absolute h-36 w-36 mix-blend-multiply opacity-50 -z-10 rounded-full  bg-cyan-400 blur-xl bottom-0 left-4" />
  </>
);

const PieceCount: FC<{ remainingPiece: number; color: Color }> = ({
  remainingPiece,
  color,
}) => (
  <div className="flex flex-1 items-center">
    <div className="h-[6vw] w-[6vw] md:h-[4vw] md:w-[4vw]">
      <Piece type="Pawn" player={color} />
    </div>
    <Typos.P className="px-1">{remainingPiece}</Typos.P>
  </div>
);
export default PartyState;
