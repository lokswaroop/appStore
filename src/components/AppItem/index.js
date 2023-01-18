// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <>
      <li>
        <img className="image" src={imageUrl} alt="app" />
        <div>
          <p>{appName}</p>
        </div>
      </li>
    </>
  )
}
export default AppItem
