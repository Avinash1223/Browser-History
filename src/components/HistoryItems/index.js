import './index.css'

const HistoryItems = props => {
  const {historyList, deleteHistoryItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const OnDeleteHistoryItem = () => {
    // console.log('item deleted')
    deleteHistoryItems(id)
  }

  return (
    <li className="ListContainer">
      <div className="timeContainer">
        <div className="time-card-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="logoContainer">
          <img src={logoUrl} alt="domain logo" className="social-media-icon" />
          <div className="card-container">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <div className="buttonContainer">
        <button type="button" onClick={OnDeleteHistoryItem} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteLogo"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItems
