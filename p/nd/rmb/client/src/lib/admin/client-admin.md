
		
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


		
-------------------------------------------------------------------


		
-------------------------------------------------------------------

	added packages
	npm i -D axios babel-polyfill chart.js classnames primereact primeflex quill react-transition-group 
	Full calendar throws error because all its dependencies are not installed at present
	We are skipping it because it might be of no use to us for now.
	@fullcalendar/core required by primereact calendar to work on admin
		and need installation of following dependencies also.
		https://www.primefaces.org/primereact/#/fullcalendar
			npm install @fullcalendar/daygrid --save
			npm install @fullcalendar/timegrid --save
			npm install @fullcalendar/interaction --save