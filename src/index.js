import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Header from './components/Header'
import UlRecipeMetaData from './components/UlRecipeMetaData'



render(
	<App /> 
	 (<div>
		<Header />
		<UlRecipeMetaData />
	 </div>),
document.querySelector('#Main'));
