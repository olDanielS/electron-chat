import '../../styles/global.css'
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
    return (
        <div className='flex flex-col justify-center items-center h-screen' >
            <div className='w-96'>
                <header >
                    <h3 className='text-center text-2xl font-semibold'>Login</h3>
                    <p className='text-center'>Enter your email to sign up for this app</p>
                </header>

                <main className="form flex flex-col mt-6">
                    <input id="email" type="text" className='border-2 rounded-md p-2 mb-2' placeholder='email@domain.com' />
                    <input id="password" type="password" className='border-2 rounded p-2' placeholder='***********' />
                    <button className='signIn rounded-md p-2 bg-black text-white mt-3 hover:opacity-85'> Sign in with email</button>

                    <div className='flex flex-row justify-center items-center mt-6'>
                        <div className='line h-px bg-gray-300 block w-1/4 mx-3 opacity-95'></div>
                        <p className='text-gray-500'>or continue with </p>
                        <div className='line h-px bg-gray-300 block w-1/4 mx-3 opacity-95'></div>
                    </div>

                    <button className='mt-4 '>
                        <div className='flex bg-zinc-100 rounded-md p-2 items-center hover:bg-slate-200'>
                            <FcGoogle className='h-5 w-5 mr-2' />
                            <p className='flex-1 text-center font-medium'>Google</p>
                        </div>
                    </button>
                    
                    <button className='flex items-center justify-center bg-black py-2 px-16 mt-3 mb-5 mx-auto rounded-md hover:opacity-85 '>
                        <p className='text-white text-lg'>Create account</p>
                    </button>
                    
                    <p className='text-center'><span className='text-gray-400'>By clicking continue, you agree to our</span> Terms of Service 
                    <span className='text-gray-400'> and </span >Privacy Policy</p>
                    

                </main>
            </div>
        </div>
    );
}