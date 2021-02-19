
const Input = ({ type, placeholder, onChange, ...other }) => {
  return (
    <input
      className='border-2 rounded-md border-blue-500 md:border-opacity-50'
      style={{ height: 40 }}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      {...other}
    />
  )
}

export default Input