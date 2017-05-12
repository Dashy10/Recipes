import React from 'react'
import JSONData  from '../../json/recipe'

class UlRecipeMetaData extends React.Component {
  render() {
    return (
        <ul id="recipe_meta_data" className="list-group">
          <li className="list-group-item">Active: 1 Hour</li>
          <li className="list-group-item">Total: 5 Hours</li>
          <li className="list-group-item">6 Servings</li>
        </ul>
    )
  }
}

export default UlRecipeMetaData;

