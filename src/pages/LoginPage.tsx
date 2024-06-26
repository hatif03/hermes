import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className=' h-screen flex items-center justify-center p-8'>
        {/* Login */}
        <Login/>
        <div className=' h-screen w-full bg-myBlack absolute top-0 -z-10 opacity-95'></div>
        <div className=' h-screen w-full bg-pattern absolute -z-20 top-0'></div>
    </div>
  )
}

export default LoginPage