import { ExclamationIcon } from "@heroicons/react/solid";
import Modal from "Components/Modal";
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  isOpen: boolean;

  onClose: () => void;
  onRestart: () => void;
}

const RestartModal = ({ isOpen, onClose, onRestart }: Props) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onSecondary={onClose}
      labelPrimary={t("restartModal.restart")}
      labelSecondary={t("restartModal.cancel")}
      onPrimary={onRestart}
      onClose={onClose}
      description={t("restartModal.description")}
      title={t("restartModal.title")}
    >
      <ExclamationIcon className="h-16 w-16 text-red-600" />
    </Modal>
  );
};

export default RestartModal;
