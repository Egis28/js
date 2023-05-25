import styles from "./Book.module.css"

const Book = () => {
  return (
    <div className={styles.oneBook}>
        <img className={styles.oneBookImg} src="https://augintinis.patarimupasaulis.lt/images/Sunu-veisles/V/vokieciu-spicas-Grossspitz-Mittelspitz-Kleinspitz-2.jpg" alt="book" />
   <h2>Spicas</h2>
   <p>Pomeranijos</p>
   <p>Kaina 800Eur</p>
    </div>
  )
}

export default Book