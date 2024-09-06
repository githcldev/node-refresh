import React from "react";
import { Button } from 'primereact/button';
import { TOGGLE_MAIN_NAV_VIEW, TOGGLE_USER_NAV_VIEW, TOGGLE_LANG_NAV_VIEW } from '../../../../../../../infra/actions'
import PlainNav from '../../plain/index'
const NavSystem = (props) => {
  let forwardAction = ''
  let view = null
  switch(props.type) {
    case "fullPageMainNav":
      forwardAction = TOGGLE_MAIN_NAV_VIEW
      view = (<PlainNav {...props} />)
      break;
    case "fullPageUserNav":
      forwardAction = TOGGLE_USER_NAV_VIEW
      view = forwardAction
      break;
    case "fullPageLangNav":
      forwardAction = TOGGLE_LANG_NAV_VIEW
      view = forwardAction
      break;
    default:
      forwardAction = TOGGLE_MAIN_NAV_VIEW
      break;
  }
  function closeMenu() {
    props.dispatch({
      type: forwardAction, 
      payload: false
    })
  }
  return (
    <nav className={"fullPagePopup " + props.type} style={ props.show === true ? props.fullPagePopupStyle : {display: 'none'} }>
      <div className="p-grid">
        <div className="p-col p-col-align-center">
            <Button icon="pi pi-times" className="p-button-danger" onClick={closeMenu}></Button>
        </div>
      </div>
      <div className="p-grid">
        <div className="p-col p-col-align-center">
            { view }
        </div>
      </div>
    </nav>
  );
};
export default NavSystem;
