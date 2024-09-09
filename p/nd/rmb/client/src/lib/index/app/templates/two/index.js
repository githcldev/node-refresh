import React from 'react'
import { connect } from 'react-redux'
import { GET_ALL_SEARCH_KEYS, FILTER_SEARCH_KEYS } from '../../../lib/infra/actions'
import OpenIframe from '../../../lib/pages/components/layout/modules/openIframe/index';
import FullScreenNav from '../../../lib/pages/components/layout/modules/menu/full-screen/index';
import CenterSearchBar from '../../../lib/pages/components/layout/modules/centerSearchBar/index';
import AppRoutes from '../../routes';
import './temp-two.less';
class TemplateTwo extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // debugger;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // debugger;
  }
  render() {
    const { mainNavVisibility, userNavVisibility, langNavVisibility, siteName, prevSearchKey, filterSearchKeys, openIframe, exLinkToOpenOnSelf, dispatch } = this.props
    let fullPageMenuMarginLeft =( ( window.innerWidth - 992 + ( 20 ) ) / 2);
    fullPageMenuMarginLeft = (( ( window.innerWidth - 992 + ( 20 ) ) / 2) < 5 ) ? 8 : ( ( window.innerWidth - 992 + ( 20 ) ) / 2);
    const fullPagePopupStyle = {
      'width': window.innerWidth - 13,
      'height': window.innerHeight,
      'marginLeft': '-' + fullPageMenuMarginLeft + 'px',
      'display': 'block'
    }
    return (
      <div>
        <div className="wrapper" style={ openIframe === true ? { display: 'block' } : { display: 'none' } }>
          <OpenIframe {...this.props} />
        </div>
        <div className="wrapper" style={ openIframe === true ? { display: 'none' } : { display: 'block' } }>
          <header className="headerWrapper">
            <div className="fullPageNavWrapper">
              <FullScreenNav {...this.props} fullPagePopupStyle={fullPagePopupStyle} />
            </div>
            <div className="searchBarWrapper">
              <CenterSearchBar {...this.props} />
            </div>
          </header>
          <section className="mainContentWrapper">
            <AppRoutes {...this.props} />
          </section>
          <footer className="footerWrapper">
            Powered By: hs<br />
            All rights reserved. Copyright @ 2020
          </footer>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { mainNavVisibility, userNavVisibility, langNavVisibility, siteName } = state.headerNav;
  const { prevSearchKey, filterSearchKeys } = state.searchKeys;
  const { openIframe, exLinkToOpenOnSelf } = state.openIframe;
  return {
    mainNavVisibility, userNavVisibility, langNavVisibility, siteName, prevSearchKey, filterSearchKeys, openIframe, exLinkToOpenOnSelf
  }
}
export default connect(mapStateToProps)(TemplateTwo)