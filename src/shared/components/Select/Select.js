import ReactSelect from 'react-select'

const Select = ({ options, onChange }) => {
  return <ReactSelect options={options} onChange={onChange} />
}

export default Select