import React from 'react'
import './TaskCard.css'
import { Avatar, Tag } from 'antd'
import { DoubleLeftOutlined,DoubleRightOutlined,LeftOutlined,RightOutlined,PauseOutlined  } from '@ant-design/icons'
import { Task } from '../../types/taskcard'

const TaskCard = ({createdDate,id,name,priority,sticker,assigned,storyPoints}:Task) => {
    const colors = ['blue','red','green','yellow','purple']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const avatars = ['https://www.w3schools.com/howto/img_avatar.png',
                     'https://www.w3schools.com/howto/img_avatar2.png',
                     'https://www.w3schools.com/w3images/avatar2.png',
                     'https://www.w3schools.com/w3images/avatar6.png',
                     'https://www.w3schools.com/w3images/avatar5.png']
    const priorityObj = {
        lowest: <DoubleRightOutlined rotate={90} style={{color:'blueviolet',fontSize:'24px'}}/>,
        low: <RightOutlined rotate={90} style={{color:'blue'}}/>,
        medium: <PauseOutlined rotate={90} style={{color:'#ffc403'}}/>,
        high: <LeftOutlined rotate={90} style={{color:'red'}}/>,
        highest: <DoubleLeftOutlined rotate={90} style={{color:'#bf2500',fontSize:'24px'}} />,
    }
  return (
    <div className='card-container'>
        <span className='card-title'>{name}</span>
        <Tag color={randomColor}>{sticker}</Tag>
        <div className='task-details'>
            {priorityObj[priority]}
            <span className='story-points'>{storyPoints ? storyPoints : 0}</span>
            <div className='task-avatar'><Avatar src={avatars[Math.floor(Math.random() * avatars.length)]}/></div>
        </div>
    </div>
  )
}

export default TaskCard