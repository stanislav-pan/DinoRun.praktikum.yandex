import React, { FC } from "react";
import { Link } from "react-router-dom";

import { TEXTS } from "@core/translate";
import { NotFoundSvg } from "@icons/NotFoundSvg";

export const NotFound: FC = () => {
  return (
    <div className={"flex flex-col items-center justify-between h-screen p-10"}>
      <div>
        <h1 className={"text-2xl"}>404</h1>
        <p className={"text-4xl my-4"}>{TEXTS.THIS_PAGE_WAS_STOLEN}</p>
        <Link to="/" className={"text-blue-700 underline"}>
          {TEXTS.GO_BACK_TO_HOME_PAGE}
        </Link>
      </div>
      <div className={"h-4/6"}>
        <NotFoundSvg />
      </div>
    </div>
  );
};
