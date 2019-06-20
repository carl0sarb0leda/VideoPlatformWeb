import React, { Component } from 'react';
import PropT from 'prop-types';
import './media.css';

class  Mediasss extends Component {

  //Constructor for states
  state = {
    author: this.props.author,
  };

  handleClickkk = (event) => {
    //console.log(this.props.title);
    this.setState({
      author: 'Pirooo Takahashi',
    });
  };

  render() {
    const { image, title } = this.props; //destructuring
    const { author } = this.state; //destructuring
    const styles = {
        container: {
          color: '#44546b',
          cursor: 'pointer',
          width: 260, //260px
          border: '5px solid blue',
        },
      };

    return (

     <div className="Media" onClick={this.handleClickkk}> {/*Media is from media.css*/}
     {/*<div className="Media">*/}
        <div className="Media-cover">
        <img className="Media-image"
             src={image}
             alt=""
             width={260} heigth={160}
        />
        <h3 className="Media-title">{title}</h3>
        <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

// We are going to validate the data
Mediasss.propTypes = {
  image: PropT.string,
  title: PropT.string.isRequired, // To validate if the value is compulsory
  author: PropT.string,
  type: PropT.oneOf(['video', 'audio']), //To validate the type of component
};
export default Mediasss;
