
const Text = ({ className, children, ...other }) => {
  return <span className={`flex text-gray-500 ${className}`} {...other}>{children}</span>
}

export default Text