import CheckersParty from "amaurycoudr-checkers";
import {
  Color,
  CoordinatesStr,
  PieceJSON,
} from "amaurycoudr-checkers/utils/type";
import { filter, map } from "lodash";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import Board from "./Component/Board";
import Piece from "./Component/Piece";

function App() {
  const party = useRef(new CheckersParty());
  const [partyState, setPartyState] = useState(party.current.getState());
  const [selectedBox, setSelectedBox] = useState<CoordinatesStr>();

  const plays = useMemo(() => partyState.plays, [partyState]);
  const selectedBoxPlaysDestination = useMemo(
    () =>
      map(
        filter(plays, (value) => value.from === selectedBox),
        (value) => value.to
      ),
    [plays, selectedBox]
  );
  const { playerTurn } = partyState;
  const remainingPieceWhite = filter(
    partyState.board,
    (value) => value?.player === "white"
  ).length;
  const remainingPieceBlack = filter(
    partyState.board,
    (value) => value?.player === "black"
  ).length;

  const onClick = useCallback(
    (coordinates: CoordinatesStr) => {
      if (selectedBoxPlaysDestination.includes(coordinates) && selectedBox) {
        console.log(selectedBoxPlaysDestination);
        console.log({ from: selectedBox, to: coordinates });
        party.current.play({ from: selectedBox, to: coordinates });
        setPartyState(party.current.getState());

        (document.activeElement as HTMLElement).blur();
      } else {
        setSelectedBox(coordinates);
      }
    },
    [selectedBox, selectedBoxPlaysDestination]
  );

  return (
    <div className="w-screen h-screen relative overflow-hidden flex flex-col-reverse lg:flex-row justify-center items-center bg-slate-200">
      <div className="flex-1 lg:flex-grow-[2] xl:flex-grow   flex xl:p-10 p-3 justify-end">
        <PartyState
          {...{ playerTurn, remainingPieceBlack, remainingPieceWhite }}
        />
      </div>
      <div className="relative">
        <div className="absolute h-72 w-72 mix-blend-multiply opacity-50 rounded-full animate-blob bg-red-400 blur-xl -top-72 left-24" />
        <div className="absolute h-72 w-72 mix-blend-multiply opacity-50 rounded-full animate-blob animation-delay-2000 bg-purple-300 blur-xl -top-48 right-12" />
        <div className="absolute h-72 w-72 mix-blend-multiply opacity-50 rounded-full animate-blob animation-delay-4000 bg-pink-400 blur-xl -left-32  -bottom-20" />
        <Board
          highlightedBox={selectedBoxPlaysDestination}
          boardState={partyState.board}
          onClick={onClick}
        />
      </div>

      <div className="flex-1" />
    </div>
  );
}

export default App;

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
  return (
    <div className="rounded-md  grid grid-flow-col grid-cols-2 divide-x-2 lg:grid-cols-none lg:grid-flow-row lg:divide-x-0 lg:divide-y-2 divide-slate-500  lg:grid-rows-2 shadow-md backdrop-blur-sm bg-white/30 p-5 ">
      <div className="flex flex-col p-2 items-center">
        <p className="font-sans flex flex-1  text-slate-700 font-bold tracking-wide text-xl justify-center">
          Turn :
        </p>
        <div className="h-[6vw] w-[6vw] md:h-[4vw] md:w-[4vw]">
          <Piece type="Pawn" player={playerTurn} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2 ">
        <p className="font-sans flex   text-slate-700 font-bold tracking-wide text-xl justify-center">
          Pieces :
        </p>
        <div className="flex ">
          <div className="flex flex-1 items-center ">
            <div className="h-[6vw] w-[6vw] font-sans text-slate-700  md:h-[4vw] md:w-[4vw]">
              <Piece type="Pawn" player="white" />
            </div>
            <p className="font-sans text-slate-700 px-1">
              {remainingPieceWhite}
            </p>
          </div>
          <div className="w-2" />
          <div className="flex flex-1 items-center">
            <div className="h-[6vw] w-[6vw] font-sans text-slate-700 md:h-[4vw] md:w-[4vw]">
              <Piece type="Pawn" player="black" />
            </div>
            <p className="font-sans text-slate-700 px-1">
              {remainingPieceBlack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
