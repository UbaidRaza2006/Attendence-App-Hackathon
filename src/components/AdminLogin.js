'use client'

// import signIn from "@/config/signin"
// import signUp from "@/config/signup"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
    const [authType, setAuthType] = useState('login')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [course, setCourse] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const router = useRouter()
    const authTypeTxt = authType === 'login' ? 'Login' : "Signup"

    // const onClickBtn = async () => {
    //     setLoading(true)
    //     if (authType === 'login') {
    //         const { result, error } = await signIn(email, password)
    //         console.log('result, error->', result, error?.message)
    //         if (result) {
    //             router.replace('/')
    //         }
    //         else {
    //             alert(error.message)
    //         }
    //         setLoading(false)


    //     } else {
    //         const { result, error } = await signUp(email, password)
    //         console.log('result, error->', result, error)
    //         if (result) {
    //             router.replace('/')
    //         } else {
    //             alert(error.message)
    //         }
    //         setLoading(false)

    //     }
    // }
    return (
        <main className="flex min-h-screen flex-col items-center">
           
                <div
                    style={{
                        backgroundColor: 'skyblue',
                        alignItems: 'center',
                        borderRadius:'10px',
                        justifyContent:'center'
                    }}
                    className="flex cursor-pointer p-4 item-center w-6/12 text-center"> Login  </div>
                {/* <div
                    onClick={() => setAuthType('signup')}
                    style={{
                        backgroundColor: authType === 'signup' ? 'skyblue' : 'white'
                    }}
                    className="flex cursor-pointer p-4 item-center w-6/12 text-center"> <span>Signup</span>  </div> */}
          

            <section className="mt-8 text-gray-600 body-font relative">
                <div className="container px-5 mx-auto flex">
                    <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">{authTypeTxt}</h2>
                        
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> </div>
                            <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input onChange={(e) => setPhone(e.target.value)} type="text" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> </div>
                            <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Course</label>
                            <input onChange={(e) => setCourse(e.target.value)} type="text" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> </div>
                        <button
                        //  disabled={loading} onClick={onClickBtn}
                          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{authTypeTxt}</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}