import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'

import Main from '../../../shared/theme/Main'

import { onGetJoke, onChangeNameJoke } from '../../../shared/api/joke.api'

const EditJoke = () => {
  const [joke, setJoke] = useState(null)
  const nameForm = useRef(null)

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await onGetJoke(id)
      setJoke(data.value)
    })()
  }, [])

  const onSubmitChangeName = async (first, last) => {
    const form = nameForm.current
    console.log('form', `firstname ${form['firstname'].value} lastname ${form['lastname'].value}`)
    const { data } = await onChangeNameJoke(id, form['firstname'].value, form['lastname'].value)
    console.log('data', data)
    setJoke(data.value)
  }
  return (
    <Main>
      {joke && (
        <>
          <form ref={nameForm}>
            <input label={'first name'} name={'firstname'} />
            <input label={'last name'} name={'lastname'} />
          </form>
          <button onClick={onSubmitChangeName}>gett value</button>


          <div>{joke.id}</div>
          <div>{joke.joke}</div>
          <div>{joke.categories.map((i, index) => (<div key={`${i}-${index}`}>{i}</div>))}</div>
        </>
      )}
    </Main>
  )
}


export default EditJoke