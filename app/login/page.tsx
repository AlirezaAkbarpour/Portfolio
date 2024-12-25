'use client'
import { TAdminAccess } from "@/types/types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function Login() {
  // get validation
  const [islogin,setLogin] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const {register,
  handleSubmit,
  formState:{errors,isSubmitting},
  reset,
  getValues} = useForm<TAdminAccess>()
  const router = useRouter()

  const loginhandle = async (data:TAdminAccess)=>{
      if(data.username=="alireza" && data.password == '1234'){
          setLogin(true)
          try{
            router.push('/dashboard')
            throw new Error("Something went wrong")
          } catch(lb){ console.log(lb)}
      } else{
        setLogin(false)
        setLoginError(true)
      }
      reset();
  }

  return (
    <div className="w-full h-screen absolute z-50 bg-dashboard-orange flex justify-center items-center flex-col
                    max-md:w-full
    ">
            <h1 className="w-full text-center text-4xl font-bold text-white">Login</h1>
            <div className="w-[30rem] h-[30rem] bg-white rounded-3xl mt-8 py-24 px-8 font-normal text-xl">
              <form className="w-full h-full" onSubmit={handleSubmit(loginhandle)}>
                  <div className="w-full h-16">
                    <input className="w-full h-14 rounded-lg bg-gray-200 px-2 focus:ring-2 transition-all outline-none focus:ring-orange-500" 
                          placeholder="Username" {...register('username',{required:"please fill username",min:{value:1,message:'please fill username'}})} />
                    {errors.username && (<p className="text-sm text-red-400 font-semibold mt-2 pl-4">🎅 {`${errors.username.message}`}</p>)}
                  </div>
                  <div className="w-full h-16 my-10">
                   <input className="w-full h-14 rounded-lg px-2 focus:ring-2 bg-gray-200 transition-all focus:ring-orange-500 outline-none" 
                          placeholder="Password" type="password" {...register('password',{required:"please enter password of username"})}/>
                     {errors.password && (<p className="text-sm text-red-400 font-semibold mt-2 pl-4">🎅 {`${errors.password.message}`}</p>)}
                  </div>
                  <div className="w-full my-28 ">
                       {!islogin && loginError && (<p className="w-full text-center text-base text-red-400 font-semibold my-2">username or password is incorrect!</p>)}
                    <div className="w-full flex justify-center">
                      <button type="submit" disabled={isSubmitting} className="w-64 h-14 rounded-2xl bg-dashboard-orange text-white text-xl font-medium hover:scale-90 hover:bg-orange-700 transition-all">Login</button>
                    </div>
                  </div>
              </form>
            </div>
    </div>
  )
}
