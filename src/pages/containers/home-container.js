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

    handleOpenModal = (element) =>{
        this.setState({
            modalVisible:true,
            element //element: element  --sugar syntax
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }
    searchingFor = (term)=>{
        return function(x){
            console.log('oooo')
            return x.title.toLowerCase().includes(term.toLowerCase()) || !term
        }
    }
    render(){
        const filtered = this.props.dat.categories
        return(
            <HandleErrors>
                <HomeL>

                    <Relat></Relat>
                   
                    <Categories
                        categor={this.props.dat.categories}
                        openModal={this.handleOpenModal}
                        searching={this.searchingFor}
                    > {/*dat is from home.js and categor is for Categories.js and categories is for search in api.json*/}
                    </Categories>

                    {

                        this.state.modalVisible && //&& is a conditional, ModalC (the portal) will only render if the condition is true
                        <ModalC>
                            <Modal handleClick={this.handleCloseModal}>
                                <VP 
                                autoplay //autoplay={true} 
                                src={this.state.element.src} //element.src search 'src' into the data from api
                                title={this.state.element.title}/>
                            </Modal>
                        </ModalC>
                    }
                </HomeL>
            </HandleErrors>
        )
    }
}

export default HomeContainer