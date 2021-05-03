export function toBRL(value: number | string) {
  const number = Number(value)
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
}
