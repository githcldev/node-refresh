
		
-------------------------------------------------------------------


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------

<ul>
	<li className="mq hide-sm">hide-sm</li>
	<li className="mq show-sm">show-sm</li>
	<li className="mq show-above-sm">show-above-sm</li>
	<li className="mq hide-above-sm">hide-above-sm</li><hr />
	<li className="mq hide-below-md">hide-below-md</li>
	<li className="mq show-below-md">show-below-md</li>
	<li className="mq hide-md">hide-md</li>
	<li className="mq show-md">show-md</li>
	<li className="mq show-above-md">show-above-md</li>
	<li className="mq hide-above-md">hide-above-md</li><hr />
	<li className="mq hide-below-lg">hide-below-lg</li>
	<li className="mq show-below-lg">show-below-lg</li>
	<li className="mq hide-lg">hide-lg</li>
	<li className="mq show-lg">show-lg</li>
	<li className="mq show-above-lg">show-above-lg</li>
	<li className="mq hide-above-lg">hide-above-lg</li><hr />
	<li className="mq hide-below-xl">hide-below-xl</li>
	<li className="mq show-below-xl">show-below-xl</li>
	<li className="mq hide-xl">hide-xl</li>
	<li className="mq show-xl">show-xl</li>
	<li className="mq hide-above-xl">hide-above-xl</li>
	<li className="mq show-above-xl">show-above-xl</li><hr />
	<li className="mq hide-below-xxl">hide-below-xxl</li>
	<li className="mq show-below-xxl">show-below-xxl</li>
	<li className="mq hide-xxl">hide-xxl</li>
	<li className="mq show-xxl">show-xxl</li>
	<li className="mq hide-above-xxl">hide-above-xxl</li>
</ul>

-------------------------------------------------------------------

this.onAboutNavToggle = this.onAboutNavToggle.bind(this)
	// good if we need advance bind done for one time at constructor of component
	// bind(this) creates a new function where the value of 'this' is fixed
<AboutNav onAboutNavToggle={(obj) => this.onAboutNavToggle(obj)} sone="sone11" />
		// good to use if we do not consume context of this in onAboutNavToggle
<AboutNav onAboutNavToggle={this.onAboutNavToggle.bind(this)} sone="sone11" />
	// good to use if we consume context of this in onAboutNavToggle

-------------------------------------------------------------------

	- deep components styling
	- 
-------------------------------------------------------------------

new custom them black/white
	Considerations:
		1. info portal
		2. user profile pages
		3. advertisement space
https://codecanyon.net/item/mobionic-phonegap-cordova-full-hybrid-app/10191423
https://lifelinemalawi.com/
https://www.engadget.com/
https://www.forixwebdesign.com/work/dakine/
https://www.bbc.com/news
https://www.northampton.ac.uk/
http://www.valetmag.com/
		
-------------------------------------------------------------------

Ref: NODE\EX\ECOMM\cezerin-master\cezerin-master
	import { Field, reduxForm } from 'redux-form';	
	
-------------------------------------------------------------------

Add some cms based on react-redux-saga and build it through
  webpack-prod-config and once success extend the same for usage.
		
-------------------------------------------------------------------

Ref:
	boilerplate-react-master: try this
	react-redux-saga-boilerplate: failed to incorporate has babel env dependency from cmd
		// First try to extend with all needed features
		// such as:
		1. lazy load
		2. suspence component
		3. split suspence component
		4. split app bundle for routes may be known as HMR
		5. seperate vendor bundle
		6. createContext(   
			new api for cloning props 
			from some high level parent to some low level child directly 
			without passing props to in-between component

-------------------------------------------------------------------

build webpack dev & prod
	- react
	- suspense
	- react hoc
	- react routers
	- keep vendors seperate
	
do not engage in ssr, 
	its packaging should be at server side.