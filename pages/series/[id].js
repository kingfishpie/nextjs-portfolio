import Link from 'next/link'
import { useRouter } from 'next/router'

import { allSeries } from '../../data/series'
import Video from '../../components/video'
import Meta from '../../components/meta'

export default function Series() {
  const router = useRouter()
  const { id } = router.query
  if (!id) return null // really annoying that we have to do this https://github.com/vercel/next.js/discussions/11484
  const series = allSeries[id]

  return <>
    <Meta title={`${series.name} by Ian MacInnes - Filmmaker based in Los Angeles`} />
    <main className='container'>
      <header className='header'>
        <h1>{series.name}</h1>
        <h2>{series.description}</h2>
        <Link href='/'>Back Home</Link>
      </header>

      <ul className='videoList'>
        {series.videos.map((video, index) => <Video video={video} key={index} />)}
      </ul>
      <div className='footer'>
          <p>
            --
            <br />
            Ian MacInnes
            <br />
            Filmmaker
            <br />
            <a href='mailto:hi@ianhatesgum.com'>hi@ianhatesgum.com</a>
          </p>
          <p>
            <Link href='/'>Back Home</Link>
          </p>
        </div>
    </main>
  </>
}