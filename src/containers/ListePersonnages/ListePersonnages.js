import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner/Spinner'
import Titre1 from '../../components/titres/titreh1'
import Personnage from './Personnage/Personnage'
export default class ListePersonnages extends Component {
    state = {
        Personnage: [],
        loading: false
    }

    loadData = () => {
        this.setState({ loading: true })
        axios.get('https://creaperso-50c55-default-rtdb.firebaseio.com/persos.json')
            .then(response => {
                const arrPersos = Object.values(response.data)
                this.setState({
                    Personnage: arrPersos,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }

    componentDidMount = () => {
        this.loadData()
       
    }

    componentDidUpdate = (oldProps,oldState) => {
        if(oldProps.refresh!==this.props.refresh){
            this.loadData()
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.loading && <Spinner />
                }
                {
                    !this.state.loading &&
                    <div className="row no-gutters">
                        {
                            this.state.Personnage.map((value, index) => {
                                return (
                                    <div className='col-6' key={index}>
                                        <Titre1 text={value.nom} />
                                        <Personnage {...value.perso} />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
