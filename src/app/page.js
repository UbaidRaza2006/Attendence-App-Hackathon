import Login from '@/components/Login'
import Image from 'next/image'
import AdminLogin from '@/components/AdminLogin'
import Student from './student/page'

export default function Home() {
  return (

<>

<Student/>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">


     <h1>Firstly Login for Attendence</h1>
     <AdminLogin/>
    
     <h1>Firstly Login for Attendence</h1>
     <Login/>

    </main>
    
    
    </>
  )
}
