import { Group } from '@itcase/ui/components/Group'
import { Icon } from '@itcase/ui/components/Icon'
import { Link } from '@itcase/ui/components/Link'
import { Logo } from '@itcase/ui/components/Logo'

import { icon32 } from './icons'

const Header = () => {
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
      paddingHorizontalMobile="10px"
    >
      <Group fill="accentItemPrimary">
        <Link
          width="130"
          widthMobile="110"
          direction="horizontal"
          justifyContent="center"
          alignItems="flex-end"
          aspectRatio="1/1"
          paddingMobile="5px 10px"
          paddingTablet="5px 10px"
          aspectRatioMobile="1/0.625"
          href="/"
        >
          <Logo src="/img/logo.svg" />
        </Link>
      </Group>
      <Group marginLeft="auto" marginLeftMobile="0" orderMobile="-1">
        <Link
          size="l"
          href="https://baikal-sea.com/en/production"
          target="_blank"
          underline="none"
        >
          ENG
        </Link>
      </Group>
      <Group marginLeft="25px" marginLeftMobile="0" cursor="pointer">
        <Icon SvgImage={icon32.hamburger} />
      </Group>
    </Group>
  )
}

export default Header
