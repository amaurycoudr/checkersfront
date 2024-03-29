import { PlayIcon } from "@heroicons/react/solid";
import React from "react";
import { useTranslation } from "react-i18next";
import Typos from "Components/core/Typos";

import LogoBoxes from "Components/LogoBoxes";
import { LinkButton } from "Components/core/Button";
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
        <LinkButton
          to="/party"
          type="primary"
          iconRight={<PlayIcon className="h-5 w-5 mt-[1px] mx-2" />}
        >
          {t("home.playOffline")}
        </LinkButton>
      </div>
    </div>
  );
};

export default Home;
