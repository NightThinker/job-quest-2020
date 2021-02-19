import { useHistory } from 'react-router-dom'

import Text from '../../../../shared/components/Text/Text'

const CardJoke = ({ joke, id }) => {
  const history = useHistory();
  return (
    <li
      className='p-6 bg-white rounded-xl shadow-md flex items-center space-x-4 my-1 min-w-20 border-2 border-blue-500 border-opacity-75 md:border-opacity-50 cursor-pointer'
      onClick={() => history.push(`/joke/${id}`)}>
      <Text className='w-5/6'>{joke}</Text>
      <div class="rounded-full flex items-center justify-center bg-blue-50 " style={{ width: '40px', height: '40px' }}>
        <Text onClick={() => history.push(`/joke/${id}`)}>Edit</Text>
      </div>

    </li>
  )
}

export default CardJoke