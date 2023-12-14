import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import Tags from './component/Tags'

import TaskList from './component/TaskList'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    TagActive: '',
    taskInput: '',
    optionId: tagsList[0].optionId,
    taskList: [],
  }

  onChangeInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({optionId: event.target.value})
  }

  onTagButtonClicked = id => {
    const {taskList} = this.state
    this.setState({TagActive: id})
    const filterList = taskList.filter(each => each.tadId === id)
    this.setState({taskList: filterList})
  }

  OnClickAdd = event => {
    event.preventDefault()
    const {taskInput, optionId} = this.state

    const newTask = {
      id: uuid(),
      text: taskInput,
      tadId: optionId,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      taskInput: '',
      optionId: tagsList[0].optionId,
    }))
  }

  render() {
    const {TagActive, taskInput, optionId, taskList} = this.state
    // console.log(optionId)
    // console.log(taskInput)
    // console.log(taskList)

    return (
      <div className="main-con">
        <form className="left-cont" onSubmit={this.OnClickAdd}>
          <h1 className="main-heading"> Create a Task!</h1>
          <label htmlFor="text-input" className="label">
            Task
          </label>
          <input
            id="text-input"
            type="text"
            className="input-text"
            onChange={this.onChangeInput}
            value={taskInput}
          />
          <label htmlFor="select-input" className="label">
            Tags
          </label>
          <select
            id="select-input"
            className="input-text"
            onChange={this.onChangeSelect}
            value={optionId}
          >
            {tagsList.map(each => (
              <option
                key={each.optionId}
                value={each.optionId}
                className="option-text"
              >
                {each.displayText}
              </option>
            ))}
          </select>
          <div className="button-con">
            <button className="button" type="submit">
              Add Task
            </button>
          </div>
        </form>
        <div className="right-cont">
          <h1>Tags</h1>
          <div className="tags-con">
            {tagsList.map(each => (
              <Tags
                key={each.optionId}
                text={each}
                activeTag={each.optionId === TagActive}
                onTagClick={this.onTagButtonClicked}
              />
            ))}
          </div>
          <h1>Tasks</h1>
          {taskList.map(each => (
            <TaskList details={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
