import React from "react";
import { Group } from "@itcase/ui/components/Group";
import { Link } from "@itcase/ui/components/Link";
import { List, ListItem } from "@itcase/ui/components/List";
import { Icon } from "@itcase/ui/components/Icon";
import { Image } from "@itcase/ui/components/Image";
import { icon32 } from "./icons";
import { useUserDeviceContext } from "@itcase/ui/context/UIContext";

const Header = () => {
  const { isDesktop } = useUserDeviceContext();
  const [logoIsVisible, setLogoIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 130) {
        setLogoIsVisible(false);
      } else {
        setLogoIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);
  console.log("logoIsVisible", logoIsVisible);
  return (
    <Group
      direction="horizontal"
      justifyContent="space-between"
      alignItems="flex-end"
      alignItemsMobile="center"
      alignItemsTablet="center"
      position="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="5"
      paddingHorizontal="30px"
    >
      <Link
        width={isDesktop ? "130" : "110"}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        aspectRatio={isDesktop ? "1/1" : "1/0.625"}
        paddingMobile="5px 10px"
        paddingTablet="5px 10px"
        backgroundColor="white"
        href="/"
      >
        <Image src="/img/logo.svg" alt="logo" />
      </Link>
      <List
        direction="horizontal"
        alignItems="center"
        marginBottom="30px"
        marginBottomMobile="0"
        marginBottomTablet="0"
        gap="30px"
      >
        <ListItem>
          <Link
            size="l"
            textColor="surfaceTextSecondary"
            href="https://baikal-sea.com/en/production"
            underline="none"
          >
            ENG
          </Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Icon
            iconFillHover="var(--color-accent-secondary-hover)"
            SvgImage={icon32.hamburger}
          />
        </ListItem>
      </List>
    </Group>
  );
};

export default Header;
