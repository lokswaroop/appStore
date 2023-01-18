// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
