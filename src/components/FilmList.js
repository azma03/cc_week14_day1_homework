import React, {Component} from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {

  render(){
    // debugger;
    const filmNodes = this.props.films.map((film) => {
      return (
          <FilmItem key = {film.id} name={film.name} url={film.url} />
      )
    })
    return (
      <div className="filmList">
        <ul>{filmNodes}</ul>
      </div>
    )
  }
      /*  <div>
          <ul>
            this.props.films.forEach((film) => {
                <FilmItem name={film.name} url={film.url} />
            }
          )
          </ul>
        </div>*/
}

export default FilmList;
