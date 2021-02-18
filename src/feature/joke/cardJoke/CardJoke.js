import styled from '@emotion/styled'

import { sky } from '../../../shared/util/constant'

const CardItem = styled.li`
  list-style-type: none;
  padding: 30px;
  margin: 6px;
  border: 1px solid ${sky};
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
const CardJoke = ({ joke }) => {
  return <CardItem>{joke}</CardItem>
}

export default CardJoke