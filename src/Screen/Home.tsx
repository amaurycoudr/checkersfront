import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typos from "../Component/core/Typos";
import LinkButton from "../Component/LinkButton";
import LogoBoxes from "../Component/LogoBoxes";
import { PlayIcon } from "@heroicons/react/solid";
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-header h-full flex-1 flex flex-col items-center justify-center ">
      <LogoBoxes className="z-10 rounded-xl" size="large" />
      <Typos.H1 className="	mt-4 mb-2 select-none " color="green">
        {t("base.name")}
      </Typos.H1>
      <Typos.H5 color="medium" className="mx-4 text-center">
        {t("home.subTitle")}
      </Typos.H5>
      <div className="flex mt-4">
        <LinkButton to="/party" type="primary" IconRight={PlayIcon}>
          {t("home.playOffline")}
        </LinkButton>
      </div>
    </div>
  );
};

export default Home;
