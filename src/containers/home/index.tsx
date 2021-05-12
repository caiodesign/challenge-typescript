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

export function Home() {
  const {
    portalsState,
    changePortal,
    currentActivePortal,
    getDataFrom,
    isLoading
  } = usePortals()

  function renderPortalCards() {
    return portalsState[currentActivePortal].data.map((property) => (
      <Card {...property} />
    ))
  }

  async function changePageFromActivePortal(page: number) {
    getDataFrom(currentActivePortal, page)
  }

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
        />
      </Layout>
    </>
  )
}

export default Home
