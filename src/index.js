import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Header from './components/Header'
import UlRecipeMetaData from './components/UlRecipeMetaData'
import FoodImage from './components/FoodImage'
import Ingredients from './components/Ingredients'
import Preperation from './components/Preperation'
import PreperationInfo from './components/PreperationInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'


/*render( 
	(<div>,
	 	<App />,
		<Header />,
		<UlRecipeMetaData />,
		<FoodImage />,
		<Ingredients />,
		<Preperation />,
		<PreperationInfo />,
		<PreperationInfo />,
		<PreperationInfo />,
		<Nav />,
		<Footer />,
	 </div>)
document.querySelector('#Main')*/
render(
	 (<div>
	 	<App />
		<Header />
		<UlRecipeMetaData />
		<FoodImage />
		<Ingredients />
		<Preperation />
		<PreperationInfo para="Boss Shauna" />
		<PreperationInfo para="Dash" />
		<PreperationInfo para="Cristman" />
		<Nav />
		<Footer />
	 </div>),
document.querySelector('.flex-container'));
