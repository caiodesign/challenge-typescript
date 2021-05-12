import React from 'react'
import { useRouter } from 'next/router'
import { useEffectOnce } from 'react-use'

import Header from 'components/Header'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

import usePortals from 'context/portals'

export function Home({ propertyId }: { propertyId?: string }) {
  const router = useRouter()
  const {
    getPropertyDataFrom,
    propertyState,
    isLoading,
    propertyApiError
  } = usePortals()

  function handleClick() {
    router.push(`/`)
  }

  useEffectOnce(() => {
    getPropertyDataFrom(propertyId)
  })

  if (propertyApiError)
    return <h1>algo inesperado ocorreu... tente novamente mais tarde.</h1>

  return (
    <>
      <Header blackTheme onClick={handleClick} />
      <Layout>
        <Loader active={isLoading} />
        {JSON.stringify(propertyState)}
        <br />
        <br />
        <a onClick={handleClick}>back</a>
      </Layout>
    </>
  )
}

export default Home
