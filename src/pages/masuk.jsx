import React, { useEffect } from 'react'
import { signInWithGooglePopup } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export default function Masuk() {
    const navigate = useNavigate()

    useEffect(() => {
        const login = localStorage.getItem('uid')
        if ( login ) {
            navigate('/app')
        }
    }, [])

    const logGoogle = async () => {
        const response = await signInWithGooglePopup()
        // const user = response.user
        // console.log(response)
        // addDoc(collection(db, 'users'), {displayName: user.displayName, email: user.email, photoURL: user.photoURL, uid: user.uid})
        localStorage.setItem('uid', response.user.uid)
        localStorage.setItem('photoURL', response.user.photoURL)
        navigate('/app')
    }

  return (
        <section>
            <div className="bg-black opacity-[0.90] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-[100vh]">
                <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-white text-[18px] font-medium">
                            Log in to your account
                        </h1>
                        <div className='flex flex-col w-full'>
                            <button onClick={logGoogle} className='border hover:bg-white hover:opacity-[0.4] text-white h-[40px] mb-[20px] rounded-[10px] flex items-center justify-center'>
                                <img src="/google.png" className='w-[18px] h-[18px] mr-[10px]'/>
                                <span>Log in with Google</span>
                            </button>
                            <button className='border hover:bg-white hover:opacity-[0.4] text-white h-[40px] rounded-[10px] flex items-center justify-center'>
                                <div className='w-[20px] h-[20px] mr-[10px] bg-white rounded-full'>
                                    <img src="/github.png" className='w-full h-full'/>
                                </div>
                                Log in with Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
