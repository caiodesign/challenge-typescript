import * as S from './styles'

export const Loader = ({ active = false }) => {
  return active ? <S.Overlay>Carregando...</S.Overlay> : null
}

export default Loader
