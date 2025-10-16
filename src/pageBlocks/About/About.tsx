import React from 'react'

import { Group } from '@itcase/ui/components/Group'
import { Image } from '@itcase/ui/components/Image'
import { Text } from '@itcase/ui/components/Text'
import { Title } from '@itcase/ui/components/Title'

const About = () => {
  return (
    <Group paddingVertical="135px 120px" paddingVerticalMobile="55px 40px">
      <Group
        maxWidth="1300"
        direction="vertical"
        margin="0 auto"
        paddingHorizontal="30px"
        paddingHorizontalMobile="0"
        paddingHorizontalTablet="0"
      >
        <Title
          size="h1"
          marginBottom="40px"
          paddingHorizontalMobile="15px"
          paddingHorizontalTablet="15px"
          color="var(--color-accent-text-tertiary)"
          fontWeight="bold"
          sizeTablet="h2"
        >
          Производство
        </Title>
        <Title
          size="h3"
          marginBottom="20px"
          paddingHorizontalMobile="15px"
          paddingHorizontalTablet="15px"
          color="var(--color-accent-text-tertiary)"
        >
          Главная ценность компании — профессиональный коллектив.
        </Title>
        <Group
          direction="horizontal"
          directionMobile="vertical"
          directionTablet="vertical"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Group
            width="fill"
            maxWidth="620"
            direction="vertical"
            maxWidthMobile="none"
            maxWidthTablet="none"
          >
            <Text
              size="xl"
              marginBottom="20px"
              paddingHorizontalMobile="15px"
              paddingHorizontalTablet="15px"
              textColor="accentTextTertiary"
              tag="p"
            >
              Карьера сотрудников выстраивается в зависимости от особенностей
              каждого, кто-то развивается с фокусом на профессиональные знания и
              навыки с экспертными званиями технических и технологических
              аспектов, кто-то как приемник и руководитель. Сотрудники владеют
              компетенцией работы на нескольких автоматах различных линий. Это
              дает нам гибкость и позволяет формировать оптимальную численность.
            </Text>
            <Text
              size="xl"
              marginBottom="20px"
              paddingHorizontalMobile="15px"
              paddingHorizontalTablet="15px"
              textColor="accentTextTertiary"
              tag="p"
            >
              Система обучения и развития персонала обеспечивает сотрудников
              сотрудников возможностями и инструментами для личного развития.
            </Text>
          </Group>
          <Group
            width="fill"
            maxWidth="620"
            margin="0 0 40px 40px"
            marginMobile="40px 0 0 0"
            marginTablet="40px 0 0 0"
          >
            <Image
              width="fill"
              height="auto"
              src="/img/about-img.jpg"
              resizeMode="contain"
              alt="Prod img"
            />
          </Group>
        </Group>
      </Group>
    </Group>
  )
}

export default About
