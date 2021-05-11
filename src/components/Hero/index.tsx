import * as S from './styles'

export type HeroProps = {
  children: JSX.Element
  Header: React.FC
  bg: string
}

export const Hero: React.FC<HeroProps> = ({ children, Header, bg }) => {
  return (
    <S.Container bg={bg}>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Hero
