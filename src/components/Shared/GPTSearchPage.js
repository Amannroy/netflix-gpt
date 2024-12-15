import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../../utils/constants/constants'

const GPTSearchPage = () => {
  return (
    <>
    <div className='fixed -z-10 w-screen h-screen'>
         <img className='w-full h-full object-cover'  src={BG_URL} alt="logo" />
    </div>
    <div className="">
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearchPage