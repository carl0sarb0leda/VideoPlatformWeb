//HOME CONTAINER COMPONENT
import React, {Component} from 'react'
import HomeL from '../components/home-layout'
import Categories from '../../categories/categories'
import Relat from '../../pages/components/related'
import ModalC from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleErrors from '../../errors/containers/error-container'
import VP from '../../player/containers/video-player'

class HomeContainer extends Component {
    state ={
        modalVisible:false
    }

    handleOpenModal = (event) =>{
        this.setState({
            modalVisible:true
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }
    render(){
        return(
            <HandleErrors>
                <HomeL>
                
                    <Relat></Relat>
                    <VP autoplay={true}/>
                    <Categories
                        categor={this.props.dat.categories}
                        handleCli={this.handleOpenModal}
                    > {/*dat is from home.js and categor is for Categories.js and categories is for search in api.json*/}
                    </Categories>
                    
                    {
                        
                        this.state.modalVisible && //&& is a conditional, ModalC (the portal) will only render if the condition is true
                        <ModalC>
                            <Modal handleClick={this.handleCloseModal}></Modal>
                        </ModalC>
                    }
                </HomeL>
            </HandleErrors>
        )
    }
}

export default HomeContainer