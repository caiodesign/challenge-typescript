import React from 'react'
import * as S from './styles'

export type Tab = {
  id: string
}

export type Props = {
  options: Tab[]
  onClick: (id: string) => void
  active: string
}

export const Tabs: React.FC<Props> = ({ options, onClick, active }) => {
  return (
    <S.List>
      {options.map((option, index) => (
        <S.Tab
          onClick={() => onClick(option.id)}
          active={option.id === active}
          key={option.id}
        >
          {option.id}
          {Boolean(index + 1 < options.length) && <S.Divisor>/</S.Divisor>}
        </S.Tab>
      ))}
    </S.List>
  )
}

export default Tabs
