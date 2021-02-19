import Meta from '../../components/meta'
import { resume } from '../../data/resume'
import styles from './index.module.css'

export default function Resume() {
  return <>
      <Meta title='Ian MacInnes - Resume' />
      <div className={styles.layout}>
        <header className={styles.header}>
          <img className={styles.headshot} src='/headshot.png' />
          <div className={styles.info}>
            <div className={styles.title}>
              <h1>Ian MacInnes</h1>
              <h2>Filmmaker</h2>
            </div>
            {/* <h3 className={styles.meta}>
              989 513 1696
              <br />
              Los Angeles, CA
              <br />
              hi@ianhatesgum.com
              <br />
              ianhatesgum.com
            </h3> */}
            <ul className={styles.contact}>
              <li>989 513 1696</li>
              <li>hi@ianhatesgum.com</li>
              <li>Los Angeles, CA</li>
              <li>ianhatesgum.com</li>
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
    <h3>{entry.subtitle}</h3>
  </div>

  <p className={styles.entryDescription}>{entry.description}</p>
</li>