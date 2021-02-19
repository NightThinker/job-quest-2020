import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import Input from '../../../shared/components/Input/Input'
import Text from '../../../shared/components/Text/Text'
import Button from '../../../shared/components/Button/Button'
import Tag from '../../../shared/components/Tag/Tag'
import Main from '../../../shared/theme/Main'

import { onGetJoke, onChangeNameJoke } from '../../../shared/api/joke.api'

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});

const EditJoke = () => {
  const [joke, setJoke] = useState(null)
  const nameForm = useRef(null)
  const { id } = useParams();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    (async () => {
      const { data } = await onGetJoke(id)
      setJoke(data.value)
    })()
  }, [])

  const onSubmitChangeName = async () => {
    const form = nameForm.current
    const { data } = await onChangeNameJoke(id, form['firstname'].value, form['lastname'].value)
    setJoke(data.value)
  }
  return (
    <Main>
      {joke && (
        <>
          <div className='flex gap-2 mb-3'>
            <form ref={nameForm} className='flex gap-2' >
              <Input placeholder='first name' name='firstname' nameRef={register} helperText={errors.firstname && errors.firstname.message} />
              <Input placeholder='last name' name='lastname' nameRef={register} helperText={errors.lastname && errors.lastname.message} />
            </form>
            <Button onClick={handleSubmit(() => onSubmitChangeName())}>Save</Button>
          </div>

          <div className='p-6 bg-white rounded-xl shadow-md flex items-center space-x-4 my-1 min-w-20 border-2 border-blue-500 border-opacity-75 md:border-opacity-50 justify-between'>
            <div className='flex'>
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