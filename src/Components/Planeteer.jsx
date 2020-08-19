import React from 'react';

class Planeteer extends React.Component {


  state = {
    clicked: false
    }
    
    clickHandler = () => {
    this.setState(!this.state.clicked)
    }

    contentDecider = () => {
      if (this.state.clicked){
        return this.props.planeteer.quote
      
      else return this.props.planeteer.bio
     } }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.clickHandler} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text"> {this.contentDecider}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ?
                  "USA-based" : "Working Overseas"}
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
