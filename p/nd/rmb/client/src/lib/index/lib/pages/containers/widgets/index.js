import * as React from 'react'
function ContainerWidgets(props) {
  return (
    <div>
      <h1>ContainerWidgets</h1>
      <div className="p-grid p-align-center">
        <div className="p-col">4</div>
        <div className="p-col">4</div>
        <div className="p-col">4</div>
      </div>
      <div className="p-grid p-align-center">
        <div className="p-col">6</div>
        <div className="p-col">6</div>
      </div>
    </div>
  );
}
export default ContainerWidgets;