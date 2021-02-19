import ReactSelect from 'react-select'


const Select = ({ options, placeholder, onChange }) => {
  const customStyles = {
    control: (css) => ({
      ...css,
      width: '200px',
    }),
  }

  return <ReactSelect options={options} onChange={onChange} placeholder={placeholder} styles={customStyles} />
}

export default Select