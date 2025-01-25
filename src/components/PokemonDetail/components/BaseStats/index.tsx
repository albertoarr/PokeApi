import { IPokemon } from "../../../../interfaces/interface";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
  backgroundSelected: string;
}

export const BaseStats = ({ pokemon, backgroundSelected }: Props) => {
  const maxStat = 255;

  const baseStatsNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };

  // El render mapea todas las stats y usando los nombres de estas,
  return (
    <div className={styles.baseStats}>
      {/* @ts-ignore */}
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className={styles.item}>
            <span style={{ color: backgroundSelected }}>
              {/* @ts-ignore */}
              {baseStatsNames[name]}
            </span>
            <div className={styles.rigth}>
              <p>{base_stat}</p>

              {/* Líneas de stats */}
              <div className={styles.line}>
                {/* Traslúcida */}
                <div
                  className={styles.background}
                  style={{ background: backgroundSelected }}
                />
                {/* Opaca */}
                <div
                  className={styles.secondLine}
                  style={{
                    background: backgroundSelected,
                    opacity: "1",
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
