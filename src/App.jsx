import React from 'react'
import TwitterCard from './TwitterCard'
import data from './assets/data'

export default function App() {
  return (
    <section className='grid place-content-center h-screen'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold underline'>Simple Twitter Cards</h1>
        {data.map((user, index) => <TwitterCard key={index} name={user.name} username={user.username} isFollowing={user.isFollowing} />)}
      </div>
    </section>
  )
}
