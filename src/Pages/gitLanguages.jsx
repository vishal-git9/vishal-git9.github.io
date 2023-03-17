import React from 'react'
import {BiStats} from "react-icons/bi"
import "../styles/github.css"
export const GitLanguages = () => {
  return (
    <div className='gitCalendar'>
      <div>
        <BiStats color="#5fe4c9" fontSize={"25px"}/>
        <h2>Git Top Languages</h2>
        <div></div>
      </div>
      <div>
    <div>
        <img className='gitStats' id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishal-git9&layout=compact)" alt="git stats" />
    </div>
    </div>
    </div>
  )
}