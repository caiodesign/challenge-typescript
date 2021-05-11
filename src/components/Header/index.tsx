import * as S from './styles'

export const Header: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Logo src="/img/grupo-zap-logo.png" />
    </S.Container>
  )
}

export default Header
