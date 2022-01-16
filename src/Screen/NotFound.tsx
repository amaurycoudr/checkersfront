import { PlayIcon } from "@heroicons/react/solid";
import Typos from "Components/core/Typos";
import LinkButton from "Components/core/LinkButton";
import Piece from "Components/Piece";
import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-header h-full  flex-1 flex flex-col items-center justify-center ">
      <div className="w-32 h-32">
        <Piece type="Queen" player={"black"} />
      </div>
      <Typos.H1 className="	mt-4 mb-2 text-center select-none ">
        {t("notFound.title")}
      </Typos.H1>
      <Typos.H5 className="text-center select-none">
        {t("notFound.subTitle")}
      </Typos.H5>
      <div className="flex mt-4">
        <LinkButton to="/" className="mr-2" type="primary">
          {t("notFound.home")}
        </LinkButton>
        <LinkButton
          className="ml-2"
          to="/party"
          iconRight={<PlayIcon className="h-5 w-5 mx-2" />}
          type="secondary"
        >
          {t("notFound.play")}
        </LinkButton>
      </div>
    </div>
  );
};

export default NotFound;
