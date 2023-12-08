import './index.css'

const Tags = props => {
  const {text, activeTag, onTagClick} = props
  const {optionId, displayText} = text

  const onclickButton = () => {
    onTagClick(optionId)
  }

  const buttonClass = activeTag ? 'Active-but' : 'unActive-but'
  return (
    <div className="button-con">
      <button
        type="button"
        className={`button-tag ${buttonClass}`}
        onClick={onclickButton}
      >
        {displayText}
      </button>
    </div>
  )
}

export default Tags
