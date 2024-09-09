import React from 'react'
import { GET_ALL_SEARCH_KEYS, FILTER_SEARCH_KEYS, RE_FILTER_SEARCH_KEYS } from '../../../../../infra/actions'
import { AutoComplete } from 'primereact/autocomplete';
import {Button} from "primereact/button";
import './centerSearchBar.less'
const CenterSearchBar = (props) => {
  let autoCompleteElRef = React.createRef();

  function hideAutoCompleteList(evt){
    if(autoCompleteElRef.current.container.lastElementChild.classList.contains("showDropDownOption"))
      autoCompleteElRef.current.container.lastElementChild.classList.remove("showDropDownOption");
    else console.log('No list to hide')
  }
  function showAutoCompleteList(){
    if(autoCompleteElRef.current.container.lastElementChild.classList.contains("showDropDownOption") === false)
      autoCompleteElRef.current.container.lastElementChild.classList.add("showDropDownOption");
    else console.log('Already showing list');

    if(listUL = document.getElementById('pr_id_1_list'))
      listUL.addEventListener('click', function(ev) {
        console.log(ev);
      })
  }
  function handleChange(event) {
    handleSubmit(event.value)
    event.preventDefault();
  }
  function handleSubmit(query) {
    if(typeof query !== 'string') {
    //   if(query.originalEvent) query.originalEvent.preventDefault()
    //   else query.preventDefault()
      return false;
    }
    // hideAutoCompleteList();
    console.log("Form submitted => " + query)
    query = query.toLowerCase()
    if( query.length > 0 && props.filterSearchKeys.length > 0 && ( props.prevSearchKey.length === 0 || query.startsWith(props.prevSearchKey.toLowerCase()) ) ) {
      props.dispatch({ type: FILTER_SEARCH_KEYS, payload: query })
    } else if( query.length > 0 && props.filterSearchKeys.length > 0 && props.prevSearchKey.length > query.length &&  props.prevSearchKey.startsWith(query) ){
      // caused when user type fat after faty, so it is decremental searchKey, where user cleared y from faty to search fat
      props.dispatch({ type: 'RE_FILTER_SEARCH_KEYS', payload: query })
    } else {
      props.dispatch({ type: GET_ALL_SEARCH_KEYS, payload: '' })
    }
    showAutoCompleteList()
    event.preventDefault();
  }
  function handleFocus(event) {
    event.preventDefault();
  }
  function openIframe(key) {
    // dispatch action to open iframe for given search term or open on self if width is less than standard variable to decide whether to open iframe or not to show search results
    console.log("openIframe key => " + key)
  }
  function handleSelect(event) {
    console.log("handleSelect event.value.key => " + event.value.key)
    debugger;
  }
  function handleClick(event) {
    if(event.currentTarget && event.currentTarget.nodeName === 'INPUT') return;
    // console.log("handleClick event.value.key => " + event.value.key)
    debugger;
  }
  function handleKeyUp(event){
    // console.log(event)
    if (event.keyCode === 13) { // enter key up
      // Cancel the default action, if needed
      hideAutoCompleteList()
      openIframe(event.target.value)
      event.preventDefault();
    }
  }


  return (
    <div>
      <span className="p-fluid p-inputgroup">
        <AutoComplete onClick={handleClick} onSelect={handleSelect} onBlur={hideAutoCompleteList} onFocus={handleFocus} ref={autoCompleteElRef} value={props.prevSearchKey} suggestions={props.filterSearchKeys} completeMethod={handleSubmit} onKeyUp={handleKeyUp} field="key" placeholder="Enter you search key here" minLength={1} onChange={handleChange} />
        <Button icon="pi pi-search" className="p-button-warning"/>
      </span>
    </div>
  )
}
export default CenterSearchBar;