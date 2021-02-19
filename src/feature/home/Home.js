import Main from '../../shared/theme/Main'
import Text from '../../shared/components/Text/Text'

import Profile from '../../asset/IMG_6522.JPG'

const Home = () => {
  return (
    <Main className='justify-center align-top'>
      <div className='flex justify-between'>
        <div className='flex-col text-center h-auto items-center'>
          <Text className='text-4xl flex justify-center mb-4'>Hi,I'm Jiraphon Neetithamrangsi</Text>
          <Text className='text-4xl flex justify-center'>I'm Front- End Developer</Text>
        </div>
        <div>
          <img className='h-56 w-auto rounded-lg' src={Profile} alt='Profile' />
        </div>
      </div>

    </Main>
  )
}

export default Home