'use client'
import Image from 'next/image'
import useStore from './store/store'

export default function Home() {
  const { user, updateUser } = useStore()
  console.log(user.updatedUser)

  return (
    <div className='my-32'>
      <p className=' text-pink-500 justify-center items-center flex'>
        Hi {user.updatedUser.name ?? 'Login'}, Welcome
      </p>
    </div>
  )
}
