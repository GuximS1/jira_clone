import React from 'react'
import './TaskCard.css'
import { Tag } from 'antd'
import { DoubleLeftOutlined,DoubleRightOutlined,LeftOutlined,RightOutlined,PauseOutlined  } from '@ant-design/icons'

const TaskCard = (/*{createdDate,id,name,priority,sticker,assigned,storyPoints}:Task*/) => {
    const colors = ['blue','red','green','yellow','purple']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const priority = {
        lowest: <DoubleRightOutlined rotate={90} style={{color:'blueviolet'}}/>,
        low: <RightOutlined rotate={90} style={{color:'blue'}}/>,
        medium: <PauseOutlined rotate={90} style={{color:'#ffc403'}}/>,
        high: <LeftOutlined rotate={90} style={{color:'red'}}/>,
        highest: <DoubleLeftOutlined rotate={90} style={{color:'#bf2500'}} />,
    }
  return (
    <div className='card-container'>
        <span className='card-title'>This is the task title! Make sure to expand...</span>
        <Tag color={randomColor}>SPACE TRAVEL EDITION</Tag>
        <div className='task-details'>
            {priority['low']}
        </div>
    </div>
  )
}

export default TaskCard