import styles from './Joke.module.css';

const Joke = ({ setup, punchline }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>{setup}</h1>
            <p className={styles.line}>{punchline}</p>
        </div>
    )
}

export default Joke;