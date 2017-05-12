import React from 'react'
import JSONData  from '../../json/recipe'

class PreperationInfo extends React.Component {
  render() {
    return (
            <p id="pa">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
             <h4 id="sty">{this.props.para}</h4>
            </p>
    )
  }
}

export default PreperationInfo;

