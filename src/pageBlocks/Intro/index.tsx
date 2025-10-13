import React from "react";
import { Group } from "@itcase/ui/components/Group";
import { Text } from "@itcase/ui/components/Text";
import { useUserDeviceContext } from "@itcase/ui/context/UIContext";

const Intro = () => {
  const { isMobile } = useUserDeviceContext();

  return (
    <Group
      width="full"
      minHeight="500px"
      direction="row"
      position="relative"
      backgorundImage="/img/hero-background.jpg"
      background="center / cover no-repeat url(/img/hero-background.jpg)"
    >
      <Group
        height="100%"
        maxWidth="570px"
        direction="column"
        justifyContent="space-between"
        alignDirection="flex-start"
        position="absolute"
        left="52%"
        padding="40px 15px 45px 15px"
        leftMobile="0%"
      >
        <Text opacity={isMobile ? ".0" : ".7"} textColor="surfaceTextSecondary">
          Production
        </Text>
        <Text
          size="xl"
          fontStyle="italic"
          lineHeight="30px"
          textColor="surfaceTextSecondary"
        >
          BAIKALSEA Company is the largest water bottling company in Siberia.
          Installed capacity is over 300 mln. liters per year.
        </Text>
      </Group>
    </Group>
  );
};

export default Intro;
