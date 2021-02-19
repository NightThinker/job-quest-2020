const Tag = ({ item }) => {
  return (
    <ul className='flex'>
      {item.map(i => (
        <li className='h-7 bg-green-500 rounded-md px-3'><span className='text-white'>{i}</span></li>
      ))}
    </ul>)
}

export default Tag