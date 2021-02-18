import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import CardJoke from './cardJoke/CardJoke'
import { onGetJoke, onGetJokeLimit } from '../../shared/api/joke.api'

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Contant = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

// const options = [
//   { value: '10', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

const Joke = () => {
  const [joke, setJoke] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await onGetJoke()
      setJoke(data.value)
    })()
  }, [])

  const onChangeLimit = async (number) => {
    if (number) {
      const { data } = await onGetJokeLimit(number);
      console.log('data limt', data);
      setJoke(data.value);
      return;
    }
    const { data } = await onGetJoke()
    setJoke(data.value)
  }

  return (
    <Container>
      <input type='number' onChange={(e) => onChangeLimit(e.target.value)} />
      {joke.length && <Contant>{joke.map(i => (<CardJoke joke={i.joke} />))}</Contant>}
    </Container>
  )
}

export default Joke