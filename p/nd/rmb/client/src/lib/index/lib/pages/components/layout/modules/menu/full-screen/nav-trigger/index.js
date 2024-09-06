import { TOGGLE_MAIN_NAV_VIEW, TOGGLE_USER_NAV_VIEW, TOGGLE_LANG_NAV_VIEW } from '../../../../../../../infra/actions'
const NavTrigger = (props) => {
  function showMenu(evt) {
    let menuType = ""
    switch(evt.target.attributes.alt.nodeValue) {
      case TOGGLE_MAIN_NAV_VIEW:
        menuType = TOGGLE_MAIN_NAV_VIEW;
        break;
      case TOGGLE_USER_NAV_VIEW:
        menuType = TOGGLE_USER_NAV_VIEW;
        break;
      case TOGGLE_LANG_NAV_VIEW:
        menuType = TOGGLE_LANG_NAV_VIEW;
        break;
      default:
        break;
    }
    props.dispatch({
      type: menuType,
      payload: true
    })
  }
  return (
    <div className="p-grid fullPageNavTriggerWrapper">
      <span className="p-sm-1 p-md-1 p-lg-1 fullPageMainNavTrigger">
        <i className="pi pi-bars" onClick={showMenu} alt={TOGGLE_MAIN_NAV_VIEW}></i>
      </span>
      <span className="p-sm-8 p-md-10 p-lg-10 logo">
        <h1>{props.siteName}</h1>
      </span>
      <span className="p-sm-3 p-md-1 p-lg-1 headerRightNavTriggers">
        <span className="userNavTrigger">
          <i className="pi pi-user" onClick={showMenu} alt={TOGGLE_USER_NAV_VIEW}></i>
        </span>
        <span className="chooseLangNavTrigger">
          <i className="pi pi-globe" onClick={showMenu} alt={TOGGLE_LANG_NAV_VIEW}></i>
        </span>
      </span>
    </div>
  );
};
export default NavTrigger;
