import React from "react";
import { Group } from "@itcase/ui/components/Group";
import { List, ListItem } from "@itcase/ui/components/List";
import { Text } from "@itcase/ui/components/Text";
import { Link } from "@itcase/ui/components/Link";
import { useUserDeviceContext } from "@itcase/ui/context/UIContext";

const Footer = () => {
  const { isMobile } = useUserDeviceContext();

  return (
    <Group
      width="full"
      direction="horizontal"
      justifyContent="space-between"
      justifyContentMobile="flex-end"
      padding="25px 30px 190px 30px"
      paddingMobile="15px 15px 15px 0"
      backgroundColor="var(--color-accent-text-tertiary)"
    >
      <Group width="full" maxWidth="900" display={isMobile ? "none" : "block"}>
        <List width="full" direction="horizontal" flexWrap="wrap" gap="5">
          <ListItem>
            <Text
              size="s"
              fontWeight="bold"
              textColor="surfaceTextSecondary"
              whiteSpace="nowrap"
            >
              664019, Иркутск
            </Text>
          </ListItem>
          <ListItem>
            <Link
              size="s"
              text="+73952799904"
              textColor="surfaceTextSecondary"
              href="tel:+73952799904"
              whiteSpace="nowrap"
            />
          </ListItem>
          <ListItem>
            <Link
              size="s"
              text="112@baikal-sea.com"
              textColor="surfaceTextSecondary"
              href="mailto:112@baikal-sea.com"
              whiteSpace="nowrap"
            />
          </ListItem>
          <ListItem>
            <Text
              size="s"
              fontWeight="bold"
              textColor="surfaceTextSecondary"
              whiteSpace="nowrap"
            >
              •&nbsp; 119071, Москва
            </Text>
          </ListItem>
          <ListItem>
            <Link
              size="s"
              text="+74953633583"
              textColor="surfaceTextSecondary"
              href="tel:+74953633583"
              whiteSpace="nowrap"
            />
          </ListItem>
          <ListItem>
            <Link
              size="s"
              text="info@baikal-sea.com"
              textColor="surfaceTextSecondary"
              href="mailto:info@baikal-sea.com"
              whiteSpace="nowrap"
            />
          </ListItem>
          <ListItem>
            <Text
              size="s"
              fontWeight="bold"
              textColor="surfaceTextSecondary"
              whiteSpace="nowrap"
            >
              •&nbsp; Горячая линия
            </Text>
          </ListItem>
          <ListItem>
            <Link
              size="s"
              text="8 800 333-16-16"
              textColor="surfaceTextSecondary"
              href="tel:+78003331616"
              whiteSpace="nowrap"
            />
          </ListItem>
        </List>
        <Group width="full">
          <Link
            size="s"
            text="Политика обработки персональных данных"
            textColor="surfaceTextSecondary"
            href="https://baikal-sea.com/privacy-policy"
            whiteSpace="nowrap"
          />
        </Group>
      </Group>
      <Group>
        <Text size="s" textColor="surfaceTextSecondary">
          © 2025 BAIKALSEA Company
        </Text>
      </Group>
    </Group>
  );
};

export default Footer;
