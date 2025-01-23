import { PokeballIconSmall } from "../../assets/pokeball"
import PokemonProvider from "../../context/PokemonContext"

import styles from './styles.module.scss'

export const Home = () => {
    return (
        <div className={styles.home}>
            <header>
                <div>
                    { /* icono svg */ }
                    < PokeballIconSmall />
                    <span>Pokédex</span>
                </div>
            </header>
            <PokemonProvider />

        </div>
    )
}