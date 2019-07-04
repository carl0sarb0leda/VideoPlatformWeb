//HOME CONTAINER COMPONENT
import React, {Component} from 'react'
import HomeL from '../components/home-layout'
import Categories from '../../categories/categories'
import Relat from '../../pages/components/related'
class HomeContainer extends Component {
    render(){
        return(
            <HomeL>
                <Relat></Relat>
                <Categories categor={this.props.dat.categories}/> {/*dat is from home.js and categor is for Categories.js and categories is for search in api.json*/} 
            </HomeL>
        )
    }
}

export default HomeContainer