import { RefreshIcon } from "@heroicons/react/solid";
import { CoordinatesStr } from "amaurycoudr-checkers/utils/type";
import classNames from "classnames";
import Board from "Components/Board";
import Button from "Components/core/Button";
import PartyState from "Components/PartyState";
import RestartModal from "Components/RestartModal";
import WinModal from "Components/WinModal";
import usePartyContext from "Context/partyContext";
import { t } from "i18next";
import { filter, map } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Party = () => {
  const partyState = usePartyContext((state) => state.partyState);
  const startParty = usePartyContext((state) => state.startParty);
  const play = usePartyContext((state) => state.play);
  const endParty = usePartyContext((state) => state.endParty);
  useEffect(() => {
    if (!partyState) {
      startParty();
    }
  }, [partyState, startParty]);

  const [modal, setModal] = useState<undefined | "winner" | "restart">(
    undefined
  );

  useEffect(() => {
    if (partyState?.winner) {
      setModal("winner");
    }
  }, [partyState?.winner]);

  const [selectedBox, setSelectedBox] = useState<CoordinatesStr>();

  const navigate = useNavigate();

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
        setSelectedBox(coordinates);

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
    <>
      <WinModal
        winner={partyState.winner || "white"}
        isOpen={modal === "winner"}
        onClose={() => {
          setModal(undefined);
        }}
        onGoHome={() => {
          setModal(undefined);
          navigate("/");
          endParty();
        }}
        onPlayAgain={() => {
          setModal(undefined);
          startParty();
        }}
      />
      <RestartModal
        isOpen={modal === "restart"}
        onClose={() => {
          setModal(undefined);
        }}
        onRestart={() => {
          setModal(undefined);
          startParty();
        }}
      />

      <div className="h-screen w-screen z-10 flex pt-header ">
        <div className="flex-1  relative flex justify-center sm:flex-row flex-col items-center ">
          <div className="flex-1 flex-grow-[2] xl:flex-grow flex-col sm:flex-row items-center flex xl:p-10 p-3 justify-end">
            <div className="relative">
              <PartyState
                {...{ playerTurn, remainingPieceBlack, remainingPieceWhite }}
              />

              <Button
                type="secondary"
                className="mt-4"
                onClick={() => {
                  setModal("restart");
                }}
                iconRight={<RefreshIcon className="w-5 h-5 ml-2" />}
              >
                {t("party.buttons.restart")}
              </Button>
            </div>
          </div>

          <div
            className={classNames(
              "relative aspect-square flex w-[96vw] sm:w-[60vw]  sm:max-w-[80vh] ",
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
    </>
  );
};

export default Party;
