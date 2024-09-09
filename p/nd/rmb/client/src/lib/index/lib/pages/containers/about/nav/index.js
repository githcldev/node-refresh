import React from 'react'
import { Steps } from 'primereact/steps';
import './styles.less'
const AboutNav = (props) => {
  const items = [
    {label: 'Personal'},
    {label: 'Seat'},
    {label: 'Payment'},
    {label: 'Confirmation'}
  ];
  function selectObj(obj) {
    console.log(obj)
    
    props.onAboutNavToggle(obj.index)
    // this.setState({activeAboutNavIndex: obj.index})
  }
  return (
    <Steps className="aboutNav" activeIndex={0} model={items} onSelect={(e) => selectObj(e)} readOnly={false}  />
  )
}
export default AboutNav