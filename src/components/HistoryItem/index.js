import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  deleteImg = () => {
    const {delFun, historyDetails} = this.props
    const {id} = historyDetails
    delFun(id)
  }

  render() {
    const {historyDetails} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = historyDetails

    return (
      <li className="li">
        <p className="timeAccessed">{timeAccessed}</p>
        <div className="container">
          <div className="details">
            <img className="logo" src={logoUrl} alt="domain logo" />
            <div className="logos-details">
              <p className="title">{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>
          </div>
          <button
            data-testid="delete"
            id="delete"
            className="delete-img"
            onClick={this.deleteImg}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryItem
