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
const App = () => (
  <div className="main-con">
    <div className="left-cont">
      <h1> Create a Task</h1>
      <label>Task</label>
      <input type="text" />
      <label>Tags</label>
      {tagsList.map(each => (
        <select value={each.optionId}>{each.displayText}</select>
      ))}
    </div>
    <div className="right-cont">
      <h1>Tags</h1>
    </div>
  </div>
)

export default App
