import { useForm } from "react-hook-form";


function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 my-10 space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email Address</label>
        <input
            className="border rounded outline-none p-1 h-10"
            {...register("email")} 
            
            />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password">Password</label>
        <input
            className="border rounded outline-none -1 h-10"
            {...register("password", { required: true })} 

            />
        {errors.password && <span>Password is required</span>}
      </div>


      <div className="space-x-4">
        <button className="border py-1 px-2 font-semibold rounded bg-[#FFCD2E] text-white shadow-md shadow-[#FFCD2E]">Login</button>
        <button className="border py-1 px-2 font-semibold rounded border-[#FFCD2E] text-[#FFCD2E] shadow-md shadow-[#FFCD2E]">Signup</button>

      </div>
    </form>
  )
}

export default LoginForm;