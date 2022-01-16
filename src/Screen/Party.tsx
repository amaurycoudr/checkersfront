import { CoordinatesStr } from "amaurycoudr-checkers/utils/type";
import classNames from "classnames";
import { filter, map } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Board from "../Component/Board";
import PartyState from "../Component/PartyState";
import usePartyContext from "../Context/partyContext";

const Party = () => {
  const partyState = usePartyContext((state) => state.partyState);
  const startParty = usePartyContext((state) => state.startParty);
  const play = usePartyContext((state) => state.play);
  useEffect(() => {
    if (!partyState) {
      startParty();
    }
  }, [partyState, startParty]);

  const [selectedBox, setSelectedBox] = useState<CoordinatesStr>();

  const plays = useMemo(() => partyState?.plays, [partyState]);
  const selectedBoxPlaysDestination = useMemo(
    () =>
      map(
        filter(plays, (value) => value.from === selectedBox),
        (value) => value.to
      ),
    [plays, selectedBox]
  );

  const remainingPieceWhite = filter(
    partyState?.board,
    (value) => value?.player === "white"
  ).length;
  const remainingPieceBlack = filter(
    partyState?.board,
    (value) => value?.player === "black"
  ).length;

  const onClick = useCallback(
    (coordinates: CoordinatesStr) => {
      if (selectedBoxPlaysDestination.includes(coordinates) && selectedBox) {
        play({ from: selectedBox, to: coordinates });

        (document.activeElement as HTMLElement).blur();
      } else {
        setSelectedBox(coordinates);
      }
    },
    [selectedBox, selectedBoxPlaysDestination, play]
  );
  if (!partyState) {
    return <></>;
  }
  const playerTurn = partyState?.playerTurn;

  return (
    <div className="h-screen w-screen z-10 flex pt-header ">
      <div className="flex-1  relative flex justify-center lg:flex-row flex-col items-center ">
        <div className="flex-1 flex-grow-[2] xl:flex-grow flex-col lg:flex-row items-center flex xl:p-10 p-3 justify-end">
          <div className="relative">
            <PartyState
              {...{ playerTurn, remainingPieceBlack, remainingPieceWhite }}
            />
          </div>
        </div>

        <div
          className={classNames(
            "relative flex w-[96vw] h-[96vw] sm:max-h-[85vh] sm:max-w-[85vh] sm:w-[600px] sm:h-[600px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px]",
            "rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl",
            "overflow-hidden shadow-lg dark:shadow-stone-700 z-10 "
          )}
        >
          <Board
            size={10}
            highlightedBox={selectedBoxPlaysDestination}
            boardState={partyState.board}
            onClick={onClick}
          />
        </div>
        <div className="flex-1 " />
      </div>
    </div>
  );
};

export default Party;
