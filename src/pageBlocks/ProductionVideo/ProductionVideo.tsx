import React from 'react'

import { Group } from '@itcase/ui/components/Group'
import { Icon } from '@itcase/ui/components/Icon'
import { Video } from '@itcase/ui/components/Video'

import { icon105 } from './icons'

const ProductionVideo = () => {
  return (
    <Group
      width="fill"
      position="relative"
      paddingBottom="45%"
      overflow="hidden"
    >
      {
        <style>{`
        .video__wrapper {
        height: 100%;
          object-fit: cover;
        }
      `}</style>
      }

      <Video
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        mp4="/videos/BP.mp4"
        poster="/videos/BP.mp4"
      />

      <Group
        maxWidth="1300px"
        position="absolute"
        right="0"
        bottom="0"
        left="0"
        zIndex="2"
        margin="0 auto"
        padding="0 15px 30px"
      >
        <Group direction="horizontal" alignItems="center" gap="30px">
          <Icon iconFill="surfacePrimary" SvgImage={icon105.BaikalPearl} />
          <Icon iconFill="accentItemTertiary" SvgImage={icon105.Baikal} />
        </Group>
      </Group>
    </Group>
  )
}

export default ProductionVideo
