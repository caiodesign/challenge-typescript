import ReactPaginate from 'react-paginate'
import { StyledPaginateContainer } from './styles'

interface Props {
  total: number
  onClick: (selected: number) => void
}

export const Paginate = ({ total, onClick }: Props) => {
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        onPageChange={(props: { selected: number }) =>
          onClick(props.selected + 1)
        }
        pageCount={total}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageClassName="page-number"
      />
    </StyledPaginateContainer>
  )
}

export default Paginate
