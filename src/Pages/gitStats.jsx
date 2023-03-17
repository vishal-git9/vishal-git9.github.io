import React from 'react'
import {BiStats} from "react-icons/bi"
import "../styles/github.css"
export const GitHubStats = () => {
  return (
    <div className='gitCalendar'>
      <div>
        <BiStats color="#5fe4c9" fontSize={"25px"}/>
        <h2>Git Stats</h2>
        <div></div>
      </div>
      <div>
    <div>
        <img className='gitStats' id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=vishal-git9" alt="git stats" />
    </div>
    </div>
    </div>
  )
}