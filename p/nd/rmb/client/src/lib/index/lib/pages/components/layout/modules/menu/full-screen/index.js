import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavSystem from "./nav-system/index"
import NavTrigger from "./nav-trigger/index"
import "./full-screen.less";
const FullScreenNav = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log('Location changed location.pathname => ' + location.pathname);
    props.dispatch({type: 'HIDE_ALL_NAVS'})
  }, [location]);
  return (
    <div>
      <NavSystem {...props} show={props.mainNavVisibility} type="fullPageMainNav" />
      <NavSystem {...props} show={props.userNavVisibility} type="fullPageUserNav" />
      <NavSystem {...props} show={props.langNavVisibility} type="fullPageLangNav" />
      <NavTrigger {...props} />
    </div>
  );
};
export default FullScreenNav;