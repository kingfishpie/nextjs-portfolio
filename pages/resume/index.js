import Meta from '../../components/meta'
import { resume } from '../../data/resume'
import styles from './index.module.css'

export default function Resume() {
  return <>
      <Meta title='Ryan MacInnes - Resume' />
      <div className={styles.layout}>
        <header className={styles.header}>
          <img className={styles.headshot} src='/headshot.jpg' />
          <div className={styles.info}>
            <div className={styles.title}>
              <h1>Ryan MacInnes</h1>
              <h2>Product-Minded Programmer</h2>
            </div>
            <ul>
              <li>ryan@goddamnyouryan.com</li>
              <li>ryanmacinnes.org</li>
            </ul>
          </div>
        </header>

        <ul className={styles.list}>
          {resume.map((entry, index) => <Entry entry={entry} key={index} />)}
        </ul>
      </div>
  </>
}

const Entry = ({ entry }) => <li className={styles.listItem}>
  <div className={styles.entryHeader}>
    <h2 className={styles.entryTitle}>{entry.title}</h2>
    <h3>{entry.job}</h3>
    <h4>{entry.dates}</h4>
  </div>

  <p>{entry.description}</p>
</li>