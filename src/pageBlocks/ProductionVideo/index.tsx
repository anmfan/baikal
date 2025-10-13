import React from "react";
import { Video } from "@itcase/ui/components/Video";
import { Group } from "@itcase/ui/components/Group";
import { Icon } from "@itcase/ui/components/Icon";
import { icon12 } from "@itcase/icons/default";
import { icon105 } from "./icons";
import { useUserDeviceContext } from "@itcase/ui/context/UIContext";

const ProductionVideo = () => {
  const { isMobile } = useUserDeviceContext();

  return (
    <Group width="100%" position="relative" overflow="hidden">
      <Group
        width="100%"
        position="relative"
        paddingBottom="56%"
        overflow="hidden"
      >
        <Video
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
          zIndex="1"
          codecs="avc1.42E01E, mp4a.40.2"
          mp4="/videos/BP.mp4"
        />
        <Group position="absolute" right="0" bottom="0" left="0">
          <Group
            width="full"
            maxWidth="1300"
            direction="horizontal"
            alignItems="center"
            margin="0 auto"
            paddingBottom="30px"
            gap="30px"
          >
            <Icon iconFill="surfacePrimary" SvgImage={icon105.BaikalPearl} />
            <Icon iconFill="surfacePrimary" SvgImage={icon105.Baikal} />
          </Group>
        </Group>
      </Group>
    </Group>
  );
};

export default ProductionVideo;
