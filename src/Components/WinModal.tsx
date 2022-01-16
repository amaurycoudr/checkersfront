import { Dialog } from "@headlessui/react";
import { Color } from "amaurycoudr-checkers/utils/type";
import classNames from "classnames";
import Button from "Components/core/Button";
import { textColors } from "Components/core/Typos";
import Modal from "Components/Modal";
import Piece from "Components/Piece";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  isOpen: boolean;
  winner: Color;

  onClose: () => void;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

const WinModal = ({
  isOpen,
  onClose,
  winner,
  onPlayAgain,
  onGoHome,
}: Props) => {
  const { t } = useTranslation();
  const looser = winner === "white" ? "black" : "white";

  return (
    <Modal
      isOpen={isOpen}
      onSecondary={onGoHome}
      labelPrimary={t("winnerModal.play")}
      labelSecondary={t("winnerModal.home")}
      onPrimary={onPlayAgain}
      onClose={onClose}
      description={t("winnerModal.description", {
        color: t(`color.${looser}`),
      })}
      title={t("winnerModal.title", { color: t(`color.${winner}`) })}
    >
      <div className="h-16   my-4 w-16">
        <Piece player={winner} type="Queen" />
      </div>
    </Modal>
  );
};

export default WinModal;
