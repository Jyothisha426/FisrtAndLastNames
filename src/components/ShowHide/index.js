import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstName = () => {
    this.setState(previousState => ({isFirstName: !previousState.isFirstName}))
  }

  showLastName = () => {
    this.setState(previousState => ({isLastName: !previousState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="container3">
              <button
                className="button-styles"
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>

              {isFirstName && <p className="name">Joe</p>}
            </div>

            <div className="container3">
              <button
                className="button-styles"
                type="button"
                onClick={this.showLastName}
              >
                Show/Hide Lastname
              </button>
              {isLastName && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
