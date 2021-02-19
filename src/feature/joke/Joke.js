import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

import CardJoke from './container/cardJoke/CardJoke'
import Select from '../../shared/components/Select/Select'
import Input from '../../shared/components/Input/Input'
import { onGetJokeAll, onGetJokeLimit, onGetCategoriesAll } from '../../shared/api/joke.api'


const Joke = () => {
  const [joke, setJoke] = useState([])
  const [initJoke, setInitJoke] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await onGetJokeAll()
      const { data: categoriesData } = await onGetCategoriesAll()
      setCategories(categoriesData.value.map(i => ({ value: i, label: i })))
      setJoke(data.value)
      setInitJoke(data.value)

    })()
  }, [])

  const onChangeLimit = async (number) => {
    if (number) {
      const { data } = await onGetJokeLimit(number);
      setJoke(data.value);
      return;
    }
    const { data } = await onGetJokeAll()
    setJoke(data.value)
  }

  const onFilterCategorie = ({ value }) => {
    const data = initJoke.filter(i => i.categories.find(item => item === value))
    setJoke(data)
  }

  return (
    <div className='max-w-lg m-auto'>
      <div className='flex justify-between mb-2'>
        <Input type='number' placeholder='จำนวนที่ต้องโชว์' onChange={(e) => onChangeLimit(e.target.value)} />
        <Select options={categories} onChange={onFilterCategorie} placeholder='Search Categories...' />
      </div>
      {joke.length === 0 && <Skeleton />}
      {joke && <ul className='flex flex-col'>{joke.map(i => (<CardJoke key={i.id} id={i.id} joke={i.joke} />))}</ul>}
    </div>
  )
}

export default Joke