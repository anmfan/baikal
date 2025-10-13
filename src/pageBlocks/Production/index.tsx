import React from "react";
import { Group } from "@itcase/ui/components/Group";
import { Title } from "@itcase/ui/components/Title";
import { Text } from "@itcase/ui/components/Text";
import { Image } from "@itcase/ui/components/Image";

const Production = () => {
  return (
    <Group
      padding="120px 0 135px 0"
      paddingMobile="55px 15px 40px 15px"
      backgroundColor="var(--color-accent-text-tertiary)"
    >
      <Group
        maxWidth="1300"
        margin="0 auto"
        paddingMobile="0"
        paddingHorizontal="30"
      >
        <Title
          size="h1"
          marginBottom="40px"
          fontWeight="bold"
          textColor="surfaceTextSecondary"
          sizeMobile="h3"
          sizeTablet="h2"
          tag="h1"
        >
          Производство BAIKALSEA Company
        </Title>
        <Group
          width="50%"
          margin="0 0 40px 40px"
          marginMobile="0 0 10px 10px"
          style={{ float: "right" }}
        >
          <Image
            width="full"
            height="auto"
            src="/img/prod-img.jpg"
            resizeMode="contain"
            alt="Prod img"
          />
        </Group>
        <Text
          size="xl"
          marginBottom="20px"
          textColor="surfaceTextSecondary"
          textWrap="balance"
          sizeMobile="l"
          tag="p"
        >
          Команда профессионалов BAIKALSEA Company внедрила систему стандартов
          производства и управления, которая подтверждена международными
          сертификатами.
        </Text>
        <Group
          width="full"
          direction="row"
          flexWrap="wrap"
          marginBottom="20px"
          gap="10px"
        >
          <Image
            width={170}
            src="/img/cert-1.png"
            resizeMode="cover"
            alt="Cert 1"
          />
          <Image
            width={170}
            src="/img/cert-2.png"
            resizeMode="cover"
            alt="Cert 2"
          />
        </Group>
        <Text
          size="xl"
          marginBottom="20px"
          textColor="surfaceTextQuaternary"
          sizeMobile="l"
          tag="p"
        >
          В соответствии с принятыми в BAIKALSEA Company собственными
          стандартами наши специалисты тщательно отбирают материалы и проводят
          аудит производства всех основных Поставщиков, осуществляют контроль за
          качеством продукции на всех этапах. В BAIKALSEA Company внедрена
          система обучения и развития сотрудников, основанная на Ценностях
          Компании.
        </Text>
        <Text size="m" textColor="surfaceTextQuaternary" sizeMobile="l">
          Мы не ставим цель произвести и продать максимальное количество
          продукции — наша цель — удовлетворить спрос самых взыскательных
          Потребителей, заботящихся о своем здоровье.
        </Text>
      </Group>
    </Group>
  );
};

export default Production;
