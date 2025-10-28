import React from 'react'

import { Group } from '@itcase/ui/components/Group'
import { Text } from '@itcase/ui/components/Text'

const Intro = () => {
  return (
    <Group
      width="fill"
      minHeight="500px"
      direction="horizontal"
      position="relative"
      background="center / cover no-repeat url(/img/hero-background.jpg)"
    >
      <Group
        height="fill"
        maxWidth="570px"
        direction="vertical"
        justifyContent="space-between"
        position="absolute"
        top="2%"
        left="52%"
        padding="40px 15px 45px 15px"
        leftMobile="0%"
      >
        <Text opacity=".7" textColor="surfaceTextSecondary" opacityMobile=".0">
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
  )
}

export default Intro
