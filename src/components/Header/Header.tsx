import {
  HeaderItem,
  HeaderMenu,
  HeaderSeparator,
  HeaderWrapper,
} from '@/src/styles/components/Header/Header'
import { Routes } from '@/src/utils/Routes'
import Link from 'next/link'

import PhilipsLogo from '../../../public/philips_logo.svg'

export default function Header(): JSX.Element {
  const menuItems = [
    { name: 'maps', display: 'Mapa', link: `${Routes.home}` },
    { name: 'hospitals', display: 'Hospitais', link: `${Routes.hospitals}` },
  ]

  return (
    <HeaderWrapper>
      <Link href={Routes.home}>
        <PhilipsLogo height="60px" />
      </Link>

      {menuItems.map(item => (
        <HeaderMenu key={`item_${item.name}`}>
          <Link href={item.link}>
            <HeaderItem>{item.display}</HeaderItem>
          </Link>
          {item !== menuItems[menuItems.length - 1] && <HeaderSeparator />}
        </HeaderMenu>
      ))}
    </HeaderWrapper>
  )
}
