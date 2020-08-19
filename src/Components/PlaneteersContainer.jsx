import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  render() {
  let allPlaneteers = this.props.planeteers.map(planeteerObj => <Planeteer key={planeteerObj.id} planeteer={planeteerObj} />)
  return (
    <ul className="cards">
      {allPlaneteers}
    </ul>
  )

};
}
export default PlaneteersContainer;
