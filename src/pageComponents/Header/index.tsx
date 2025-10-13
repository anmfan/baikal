import { useEffect, useState } from "react";
import { Group } from "@itcase/ui/components/Group";
import { Link } from "@itcase/ui/components/Link";
import { Icon } from "@itcase/ui/components/Icon";
import { Image } from "@itcase/ui/components/Image";
import { icon32 } from "./icons";
import { useUserDeviceContext } from "@itcase/ui/context/UIContext";

const Header = () => {
  const { isMobile } = useUserDeviceContext();
  const [logoIsVisible, setLogoIsVisible] = useState(true);

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 110) {
        setLogoIsVisible(false);
      } else {
        setLogoIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <Group
      direction="horizontal"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="5"
      paddingHorizontal="30px"
      paddingHorizontalMobile="15px"
    >
      <Link
        width={isMobile ? "110" : "130"}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        aspectRatio={isMobile ? "1/0.625" : "1/1"}
        paddingMobile="5px 10px"
        paddingTablet="5px 10px"
        backgroundColor="white"
        opacity={!logoIsVisible ? ".0" : ".99"}
        href="/"
      >
        <Image src="/img/logo.svg" alt="logo" />
      </Link>
      <Group marginLeft="auto" marginLeftMobile="0" orderMobile="-1">
        <Link
          size="l"
          textColor="surfaceTextSecondary"
          href="https://baikal-sea.com/en/production"
          target="_blank"
          underline="none"
        >
          ENG
        </Link>
      </Group>
      <Group marginLeft="25px" marginLeftMobile="0" cursor="pointer">
        <Icon
          iconFillHover="var(--color-accent-secondary-hover)"
          SvgImage={icon32.hamburger}
        />
      </Group>
    </Group>
  );
};

export default Header;
