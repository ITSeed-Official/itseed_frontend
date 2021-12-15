import { FC } from "react";
import { BannerType } from "./enum";
import GeneralBanner, { GeneralBannerProps } from "./GeneralBanner";
import SlashBanner, { SlashBannerProps } from "./SlashBanner";

type IProps = GeneralBannerProps | SlashBannerProps;

const BannerContainer: FC<IProps> = (props) => {
  if (props.type === BannerType.general) {
    return <GeneralBanner {...props} />;
  }
  return <SlashBanner {...props} />;
};

export default BannerContainer;
