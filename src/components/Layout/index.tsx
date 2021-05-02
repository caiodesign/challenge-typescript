import * as S from './styles'

export const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default Layout
