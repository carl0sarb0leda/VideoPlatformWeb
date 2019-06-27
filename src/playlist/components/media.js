import React, { PureComponent } from 'react';
import PropT from 'prop-types';
import './media.css';

//PURE COMPONENT
 
class  Mediasss extends PureComponent {

  //Constructor for states, se crea un objeto que sea modificable ya que props no lo es
  state = {
    author: this.props.author,
  };

  handleClickkk = (event) => {
    //console.log(this.props.title);
    this.setState({ //setState change the state of the atribute
      author: 'Chikoritaa Takahashi',
    });
  };

  render() {
    //the states are changeable, the props NOT
    const { cover, title } = this.props; //destructuring, basicamente busca cover y title en el objeto props
    const { author } = this.state; //destructuring
    const styles = {
        container: {
          color: '#44546b',
          cursor: 'pointer',
          width: 260, //260px
          border: '5px solid blue',
        },
      };

    //This is JSX
    return (

     <div className="Media" onClick={this.handleClickkk}> {/*Media is for media.css || handleClickkk is the handler for onClick*/}
        <div className="Media-image">
        <img className="Media-cover"
             src={cover}
             alt=""
             width={260} heigth={160}
        />
        <h3 className="Media-title">{title}</h3>
        <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

// We are going to validate the data
Mediasss.propTypes = {
  cover: PropT.string,
  title: PropT.string.isRequired, // To validate if the value is compulsory
  author: PropT.string,
  type: PropT.oneOf(['video', 'audio']), //To validate the type of component
};

export default Mediasss;
