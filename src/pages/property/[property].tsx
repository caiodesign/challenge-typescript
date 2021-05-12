import { useRouter } from 'next/router'
import Head from 'next/head'

import PropertyContainer from 'containers/property'

export default function Property() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Grupo ZAP - Imóvel</title>
      </Head>
      {router.isReady ? (
        <PropertyContainer propertyId={`${router.query.property}`} />
      ) : null}
    </>
  )
}
