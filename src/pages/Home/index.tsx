import { PokeballIconSmall } from "../../assets/pokeball"

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
        </div>
    )
}