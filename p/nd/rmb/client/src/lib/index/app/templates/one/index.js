import React from 'react'
import AppRoutes from '../../routes';
import PlainNav from '../../../lib/pages/components/layout/modules/menu/plain/index';
import './temp-one.less';
const TemplateOne = (props) => {
  return (
    <div>
      <header className="p-grid header-bg">
        <div className="mq show-above-md p-lg-2 p-xl-3">
          left header
        </div>
        <div className="p-sm-12 p-md-12 p-lg-8 p-xl-6">
          <PlainNav {...props} />
        </div>
        <div className="mq show-above-md p-lg-2 p-xl-3">
          right header
        </div>
      </header>
      <div className="p-grid">
        <div className="mq show-above-md p-lg-2 p-xl-3">
          left content
        </div>
        <div className="p-sm-12 p-md-12 p-lg-8 p-xl-6">
          <AppRoutes {...props} />
        </div>
        <div className="mq show-above-md p-lg-2 p-xl-3">
          right content
        </div>
      </div>
      <footer className="p-grid">
        <div className="mq show-above-md p-lg-2 p-xl-3">
          left footer
        </div>
        <div className="p-sm-12 p-md-12 p-lg-8 p-xl-6">
          <div className="box"><h1>footer</h1></div>
        </div>
        <div className="mq show-above-md p-lg-2 p-xl-3">
          right footer
        </div>
      </footer>
    </div>
  )
}
export default TemplateOne