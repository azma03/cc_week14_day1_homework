import React, {Component} from 'react';

class Footer extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.displayIMDBCalender = this.displayIMDBCalender.bind(this);
  // }
  //
  // displayIMDBCalender(){
  //   debugger;
  //    // window.location.hash = this.props.imdbCalender;
  // }

  render(){
    return (
        // <p>Footer</p>
        // <button onClick={this.displayIMDBCalender}>View more upcoming releases >></button>
        <div className="footer">
          <a href={this.props.imdbCalender}>View more upcoming releases >></a>
        </div>
    )
  }
}

export default Footer;
