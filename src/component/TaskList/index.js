import './index.css'

const TaskList = props => {
  const {details} = props
  const {tadId, text} = details
  return (
    <li className="task-List">
      <h1 className="task-heading">{text}</h1>
      <button type="button" className="task-button">
        {tadId}
      </button>
    </li>
  )
}

export default TaskList
