import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import CardJoke from './cardJoke/CardJoke'
import { onGetJoke } from '../../shared/api/joke.api'

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

const Joke = () => {
  const [joke, setJoke] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await onGetJoke()
      console.log('data', data)
      setJoke(data.value)
    })()
  }, [])

  console.log('joke', joke)

  return (
    <Container>
      {joke.length && <Contant>{joke.map(i => (<CardJoke joke={i.joke} />))}</Contant>}
    </Container>
  )
}

export default Joke