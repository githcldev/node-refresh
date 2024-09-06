import { Component } from 'react'
import loadable from '@loadable/component';
const AboutNav = loadable(() => import('./nav'));
const AboutSlides = loadable(() => import('./slides'));
import './about.less';

class About extends Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    // this.onAboutNavToggle = this.onAboutNavToggle.bind(this)
  }
  onAboutNavToggle(index) {
    console.log(index)
  }
  render(){
    return (
      <div className="page-about">
        {/* <h1 className="aboutH1">A b o u t   m e n u</h1> */}
        <div className="p-grid">
            <div className="p-col-fixed" style={{width:'100px'}}>
                <AboutNav onAboutNavToggle={this.onAboutNavToggle.bind(this)} sone="sone11" />
            </div>
            <div className="p-col">
                <AboutSlides />
            </div>
        </div>
      </div>
    );
  }
}
export default About;