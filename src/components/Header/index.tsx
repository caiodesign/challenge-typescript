import * as S from './styles'

export type Props = {
  blackTheme?: boolean
  onClick?: () => void
}

export const Header: React.FC<Props> = ({
  blackTheme,
  onClick = () => null
}) => {
  return (
    <S.Container blackTheme={blackTheme}>
      <S.Logo src="/img/grupo-zap-logo.png" onClick={onClick} />
    </S.Container>
  )
}

export default Header
