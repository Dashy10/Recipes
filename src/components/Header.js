import React from 'react'
import JSONData  from '../../json/recipe'

class Header extends React.Component {
  render() {
    return (
       <header>
            <h1>CHICKEN TIKKA MASALA</h1>
            <cite class="contributors">
            <div>By John Doe</div>
            </cite>
        </header>
    )
  }
}

export default Header;