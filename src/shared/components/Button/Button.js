const Button = ({ className, children, ...other }) => {
  return <button className={`flex text-white rounded-md ${className} bg-blue-500 flex justify-center items-center`} {...other} style={{ width: 150, height: 40 }}>{children}</button>
}

export default Button