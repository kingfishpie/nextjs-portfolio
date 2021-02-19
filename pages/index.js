import { videos } from '../data/videos'
import { links } from '../data/links'
import Video from '../components/video'
import Meta from '../components/meta'

export default function Home() {
  return <>
      <Meta title='Ian MacInnes - Filmmaker based in Los Angeles' />
      <main className='container'>
        <header className='header'>
          <h1>Ian MacInnes</h1>
          <h2>Filmmaker</h2>
          <h2>Los Angeles</h2>
        </header>

        <ul className='videoList'>
          {videos.map((video, index) => <Video video={video} key={index} />)}
        </ul>

        <div className='footer'>
          <p>
            --
            <br />
            Making docs, short films and music videos.
            <br />
            I'm currently working as a video editor at <a href='https://www.tubescience.com/'>TubeScience</a>
            <br />
            I like to explore the hidden secrets of everyday life and regular people.
          </p>
          <ul>
            {links.map((link, i) => <li key={i}>
              <a href={link.url}>{link.title}</a>
            </li>)}
          </ul>
          <p>
            <a href='mailto:hi@ianhatesgum.com'>hi@ianhatesgum.com</a>
          </p>
        </div>
      </main>
  </>
}