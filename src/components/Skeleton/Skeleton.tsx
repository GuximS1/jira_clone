import React from 'react'
import {CalendarTwoTone } from '@ant-design/icons'
import './Skeleton.css'
export const Skeleton = () => {
  return (
    <div className='container'>
      <p className='title'><CalendarTwoTone /> Board</p>
      <div className='board-tools'>
        <div className='empty-board'>
          Empty board btn
        </div>
        <div className='employee-avatars'>
          Employees avatars
        </div>
        <div className='add-employee-icon'>
          Icon
        </div>
        <div className='ordering'>
          Ordering
        </div>
        <div className='create-btn'>
          Create button
        </div>
      </div> 
      <div className='board'>
        {Array.from({length:5}).map((_)=>{
          return <h1 className='board-item'>123</h1>
        })}
      </div>  
    </div>
  )
}
