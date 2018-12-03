import React, {Component} from 'react';
import Header from '../components/Header';
import FilmList from '../components/FilmList';
import Footer from '../components/Footer';

class FilmReleaseBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
  }

  render(){
    return (
      // <p>FilmReleaseBox</p>
      <div className="filmReleaseBox">
        <Header />
        <FilmList films={this.state.data} />
        <Footer imdbCalender="https://www.imdb.com/calendar/?region=gb"/>
      </div>
    )
  }

}

export default FilmReleaseBox;
