import React from 'react'
import JSONData  from '../../json/recipe'

class Nav extends React.Component {
  render() {
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item"><a className="btn btn-default" href="#">Tikka Masala</a></li>
                <li className="nav-item"> <a className="btn btn-default" href="#">Eggs Benedict</a></li>
                <li className="nav-item"> <a className="btn btn-default" href="#">Crawfish Etouffee</a></li>
                <li cclassName="nav-item"> <a className="btn btn-default" href="#">Swedish Meatballs</a></li>
            </ul>
        </nav>
    )
  }
}

export default Nav;