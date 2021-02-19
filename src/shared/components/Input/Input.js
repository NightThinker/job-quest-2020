
const Input = ({ nameRef, type, placeholder, onChange, ...other }) => {
  console.log(other)
  return (
    <div className='flex flex-col'>
      <input
        ref={nameRef}
        className='border-2 rounded-md border-blue-500 md:border-opacity-50'
        style={{ height: 40 }}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...other}
      />
      {other.helperText && <span className='text-red-500'>{other.helperText}</span>}

    </div>
  )
}

export default Input