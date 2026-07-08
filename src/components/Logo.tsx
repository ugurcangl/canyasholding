import darkBackgroundLogo from "../img/koyuarkaplan.png";
import lightBackgroundLogo from "../img/arkaplanbeyaz.png";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ dark = false, className = "w-32 sm:w-36" }: LogoProps) {
  return (
    <img
      src={dark ? lightBackgroundLogo : darkBackgroundLogo}
      alt="Canyas Capital Holding"
      className={`${className} h-auto shrink-0 object-contain`}
    />
  );
}
