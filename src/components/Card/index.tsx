import * as S from './styles'

export const Card: React.FC = ({ children }) => {
  return (
    <S.Card>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Card>
  )
}

export default Card
