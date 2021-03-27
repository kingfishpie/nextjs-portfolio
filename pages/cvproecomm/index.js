import Meta from '../../components/meta'
import { resume } from '../../data/resume'
import styles from './index.module.css'

export default function Resume() {
  return <>
      <Meta title='CooperVisionPro Ecommerce' />
      <div className={styles.layout}>
        <header className={styles.header}>
          <img className={styles.headshot} src='/biopic.png' />
          <div className={styles.info}>
            <div className={styles.title}>
              <h1>Carrie Nusbaum</h1>
              <h2>UX design and research management</h2>
            </div>
            <ul>
              <li>carrie.nusbaum@gmail.com</li>
              <li>carrienusbaum.com</li>
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