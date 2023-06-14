import React from 'react'
import PropTypes from 'prop-types'

export default function TwitterCard({name='Desconocido', username='unknown', isFollowing=false}) {
  
  const [isFollowingState, setIsFollowingState] = React.useState(isFollowing)

  const changeFollowingState = () => {
    setIsFollowingState(!isFollowingState)
  }

  function formatUsername(username) {
    return `@${username}`
  }
  
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <div className='avatar'>
          <div className='w-16 sm:w-20 md:w-24 rounded-full'>
            <img src={`https://unavatar.io/${username}`} alt='avatar' />
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-sans font-bold text-lg'>{name}</p>
          <p className='font-mono'>{formatUsername(username)}</p>
        </div>
      </div>
      {isFollowingState ? <button onClick={changeFollowingState} className='btn btn-outline' >Dejar de seguir</button> : <button onClick={changeFollowingState} className='btn btn-primary'>Seguir</button>}
    </div>
  )
}

TwitterCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  isFollowing: PropTypes.bool
}