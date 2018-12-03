import React, {Component} from 'react';

class FilmItem extends Component {
  render(){
    return (
      // <p>FilmItem</p>
      <div className="FilmItem">
        <li>
          <a href={this.props.url}>{this.props.name}</a>
        </li>
      </div>
    )
  }
}

export default FilmItem;
