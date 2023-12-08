import {Component} from 'react'

import Tags from './component/Tags'

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
  }

  onTagButtonClicked = id => {
    this.setState({TagActive: id})
  }

  render() {
    const {TagActive} = this.state
    return (
      <div className="main-con">
        <div className="left-cont">
          <h1 className="main-heading"> Create a Task!</h1>
          <label htmlFor="text-input" className="label">
            Task
          </label>
          <input id="text-input" type="text" className="input-text" />
          <label htmlFor="select-input" className="label">
            Tags
          </label>
          <select id="select-input" className="input-text">
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
            <button className="button" type="button">
              Add Task
            </button>
          </div>
        </div>
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
        </div>
      </div>
    )
  }
}

export default App
