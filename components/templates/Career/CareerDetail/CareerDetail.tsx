import type { FC } from "react";

import { CareerDetailType } from "api/careers";
import { useMedia } from "util/hooks/useMedia";

import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileComponent";

type CareerDetailProperty = {
  data: CareerDetailType;
};

const CareerDetail: FC<CareerDetailProperty> = ({ data }) => {
  const media = useMedia();

  if (media === "desktop") return <DesktopComponent data={data} />;
  return <MobileComponent data={data} />;
};

export default CareerDetail;
