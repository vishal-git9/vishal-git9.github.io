import React from 'react'
import ReactGitHubCalendar from "react-ts-github-calendar"
import "../styles/github.css"
import {AiFillCalendar} from "react-icons/ai"
export const GithubCale = () => {

    // or enable responsive functionality
    // Use a proxy

  return (
    <div className='gitCalendar'>
        <div>
        <AiFillCalendar color="#5fe4c9" fontSize={"25px"}/>
        <h2>Git Calendar</h2>
        <div></div>
      </div>
      <div>
    <div className='calendar callu'>
       <ReactGitHubCalendar global_stats={true} tooltips  responsive={true} userName="vishal-git9"/>
    </div>
    </div>
    </div>
  )
}
