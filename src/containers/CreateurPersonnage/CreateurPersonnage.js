import React, { Component } from 'react'
import Titre1 from '../../components/titres/titreh1'
import Btn from '../../components/Buttons/Button'
import Spinner from '../../components/Spinner/Spinner'
import Personnage from './Personnage/Personnage'
import Armes from './Armes/Armes'
import axios from 'axios'
export default class CreateurPersonnage extends Component {
    state = {
        Personnage: {
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0,
            arme: null
        },
        nbPointDisponible: 7,
        armes: null,
        loading: false,
        nom: ''
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        axios.get('https://creaperso-50c55-default-rtdb.firebaseio.com/armes.json')
            .then((response) => {
                const arrArme = Object.values(response.data)
                this.setState({
                    armes: arrArme,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }

    flecheGauche = () => {
        this.setState((oldState, props) => {
            const newPersonnage = { ...this.state.Personnage }
            if (oldState.Personnage.image <= 1) newPersonnage.image = 3
            else newPersonnage.image--

            return {
                Personnage: newPersonnage
            }
        })
    }

    flecheDroite = () => {
        this.setState((oldState, props) => {
            const newPersonnage = { ...this.state.Personnage }
            if (oldState.Personnage.image >= 3) newPersonnage.image = 1
            else newPersonnage.image++

            return {
                Personnage: newPersonnage
            }
        })
    }

    moins = (carac) => {
        this.setState((oldState, props) => {
            if (oldState.Personnage[carac] <= 0 || oldState.nbPointDisponible >= 7) return
            const newPointCarac = oldState.Personnage[carac] - 1
            const newPersin = { ...oldState.Personnage }
            const newNbPointDisponible = oldState.nbPointDisponible + 1
            newPersin[carac] = newPointCarac
            return {
                Personnage: newPersin,
                nbPointDisponible: newNbPointDisponible
            }
        })
    }

    plus = (carac) => {
        this.setState((oldState, props) => {
            if (oldState.Personnage[carac] >= 5 || oldState.nbPointDisponible <= 0) return
            const newPointCarac = oldState.Personnage[carac] + 1
            const newPersin = { ...oldState.Personnage }
            const newNbPointDisponible = oldState.nbPointDisponible - 1
            newPersin[carac] = newPointCarac
            return {
                Personnage: newPersin,
                nbPointDisponible: newNbPointDisponible
            }
        })
    }

    handleChangeArmePersonnage = (arme) => {
        const newPersonnage = { ...this.state.Personnage }
        newPersonnage.arme = arme
        this.setState({
            Personnage: newPersonnage
        })
    }

    handleRenitialiser = () => {
        this.setState({
            Personnage: {
                image: 1,
                force: 0,
                agilite: 0,
                intelligence: 0,
                arme: null
            },
            nbPointDisponible: 7,
            armes: null,
            loading: false,
            nom: ''
        })
    }

    handleValidation = () => {
        this.setState({ loading: true })
        const player = {
            perso: { ...this.state.Personnage },
            nom: this.state.nom
        }

        axios.post('https://creaperso-50c55-default-rtdb.firebaseio.com/persos.json', player)
            .then(response => {
                console.log(response)
                this.setState({
                    loading: false
                })
                this.handleRenitialiser()
                this.props.handleRefresh()
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    loading: false
                })
                this.handleRenitialiser()
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    
                    <Titre1 text='Createurs de personnages' />
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom Utilisateur</label>
                        <input type="email" value={this.state.nom} onChange={(event) => this.setState({ nom: event.target.value })} className="form-control" id="name" placeholder="" />
                    </div>
                    {
                        this.state.loading && <Spinner />
                    }
                    <Personnage
                        {...this.state.Personnage}
                        nbPointDisponible={this.state.nbPointDisponible}
                        flecheGauche={this.flecheGauche}
                        flecheDroite={this.flecheDroite}
                        moins={this.moins}
                        plus={this.plus}
                    />

                    {
                        this.state.armes &&
                        <Armes armes={this.state.armes} handleChangeArmePersonnage={this.handleChangeArmePersonnage} currentArme={this.state.Personnage.arme} />

                    }
                    <div className="row no-gutters">
                        <Btn text="Renitialiser" color="btn-danger" css="col-6" click={this.handleRenitialiser} />
                        <Btn text="Creer" color="btn-success" css="col-6" click={this.handleValidation} />
                    </div>
                </div>
            </>
        )
    }
}
