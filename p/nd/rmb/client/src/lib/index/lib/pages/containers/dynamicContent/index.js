import CancelAsync from '../cancelAsync';
import AsyncCounter from '../asyncCounter';
import Login from '../login';
function DynamicContent({ match }) {
  var iRoutes = ["ca", "ac", "login"];
  var iRoute = false, routePath = null;
  if(iRoutes.indexOf(match.params.pageUrl) > -1) {
    iRoute = true;
    if (match.params.pageUrl === 'ac') {
      routePath = (<AsyncCounter />);
    } else if (match.params.pageUrl === 'ca'){
      routePath = (<CancelAsync />);
    } else if (match.params.pageUrl === 'login'){
      routePath = (<Login />);
    }
  }
  return (
    <div>
      {iRoute === false ? ( <div><h1>Dynamic Content Route 1</h1><br />
          match.url: {match.url}<br />
          match.path: {match.path}<br />
          match.params: {match.params.pageUrl}<br />
          match.isExact: {match.params.isExact}<br /></div>
      ) : null}
     {(iRoute) ? routePath : ''}
    </div>
  );
}
export default DynamicContent;