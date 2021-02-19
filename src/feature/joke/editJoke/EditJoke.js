import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'

import Input from '../../../shared/components/Input/Input'
import Text from '../../../shared/components/Text/Text'
import Button from '../../../shared/components/Button/Button'
import Tag from '../../../shared/components/Tag/Tag'
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
          <div className='flex gap-2 mb-3'>

            <form ref={nameForm} className='flex gap-2' >
              <Input placeholder='first name' name='firstname' />
              <Input placeholder='last name' name='lastname' />
            </form>
            <Button onClick={onSubmitChangeName}>gett value</Button>
          </div>

          <div className='p-6 bg-white rounded-xl shadow-md flex items-center space-x-4 my-1 min-w-20 border-2 border-blue-500 border-opacity-75 md:border-opacity-50 justify-between'>
            <div className='flex'>
              {/* <Text>{joke.id}</Text> */}
              <Text>{joke.joke}</Text>
            </div>
            <div className='flex'>

              {joke.categories.length > 0 && <Tag item={joke.categories} />}
            </div>

          </div>

        </>
      )}
    </Main>
  )
}


export default EditJoke