import styles from "./styles.module.scss";

interface Props {
  content: string;
  backgroundSelected: string;
}

export const Title = ({ content, backgroundSelected }: Props) => {
  /* 
    Este componente recoge los nombres de los apartados del Json y los dibuja como un título
    con el color de fondo específico.
    - Se usan con "About" y "Base Stats"
  */
  return (
    <span className={styles.title} style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
};
