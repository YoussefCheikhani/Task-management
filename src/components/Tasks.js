import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
            id : 1,
            text : 'UCL Match',
            day : '24/02/2021',
            reminder : true,
            },
        
            {
            id : 2,
            text : 'Watch Web services tutorial',
            day : '25/02/2021',
            reminder : true,
            },
        
            {
            id : 3,
            text : 'MIT Exam',
            day : '25/02/2021',
            reminder : false,
            },
            
        ]
    )

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
        
    )
}


export default Tasks
