
const Text = ({ className, children }) => {
  return <span className={`flex text-gray-500 ${className}`}>{children}</span>
}

export default Text