import { useRouter } from 'next/router'
import { useEffectOnce } from 'react-use'

import Card from 'components/Card'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Title from 'components/Title'
import Tabs from 'components/Tabs'
import usePortals from 'context/portals'
import Paginate from 'components/Paginate'
import Loader from 'components/Loader'

import * as S from './styles'
import React from 'react'

export function Home() {
  const router = useRouter()
  const {
    portalsState,
    changePortal,
    currentActivePortal,
    getPortalDataFrom,
    isLoading,
    fetchPortalInitialData,
    propertyApiError
  } = usePortals()

  function handleClick(id: string) {
    router.push(`/property/${id}`)
  }

  function renderPortalCards() {
    return portalsState[currentActivePortal].data.map((property, index) => (
      <Card {...property} onClick={handleClick} key={index} />
    ))
  }

  async function changePageFromActivePortal(page: number) {
    getPortalDataFrom(currentActivePortal, page)
  }

  React.useEffect(() => {
    fetchPortalInitialData()
  }, [currentActivePortal])

  if (propertyApiError)
    return <h1>algo inesperado ocorreu... tente novamente mais tarde.</h1>

  return (
    <>
      <Hero bg="/img/hero-bg.jpg" Header={() => <Header />}>
        <Title>ZAP, o especialista em imóveis.</Title>
      </Hero>
      <Layout>
        <Loader active={isLoading} />
        <Tabs
          options={Object.values(portalsState)}
          onClick={changePortal}
          active={currentActivePortal}
        />
        <S.CardContainer>{renderPortalCards()}</S.CardContainer>
        <Paginate
          total={portalsState[currentActivePortal].pagination.total_pages}
          onClick={changePageFromActivePortal}
          forcePage={
            portalsState[currentActivePortal].pagination.current_page - 1
          }
        />
      </Layout>
    </>
  )
}

export default Home
