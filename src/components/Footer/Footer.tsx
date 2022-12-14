import { FooterNote, FooterWrapper } from '@/styles/components/Footer/Footer'
import { Routes } from '@/utils/Routes'
import Link from 'next/link'

import PhilipsLogo from '../../../public/philips_logo.svg'

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <Link href={Routes.home}>
        <PhilipsLogo height="120px" />
      </Link>

      <FooterNote>POC - Waze Hospitals</FooterNote>
    </FooterWrapper>
  )
}
