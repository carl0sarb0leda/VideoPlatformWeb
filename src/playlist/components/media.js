import React, { Component } from 'react';
import './media.css';

class  Mediasss extends Component {
  render() {
    const { image, title, author } = this.props; //destructuring
    const styles = {
        container: {
          color: '#44546b',
          cursor: 'pointer',
          width: 260, //260px
          border: '1px solid blue',
        },
      };

    return (

     <div className="Media"> {/*From media.css*/}
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

export default Mediasss;
