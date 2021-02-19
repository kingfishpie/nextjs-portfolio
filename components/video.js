import Link from 'next/link'

const Video = ({ video }) => <li className='videoListItem'>
  <div className='embedContainer'>
    <iframe
      src={`https://player.vimeo.com/video/${video.vimeoId}`}
      frameBorder='0'
      allowFullScreen>
    </iframe>
  </div>
  <div className='videoMeta'>
    <h2 className='videoTitle'>{video.title}</h2>
    <h3 className='videoDescription'>{video.description}</h3>
  </div>
  {video.series && <Link href={`/series/${video.series}`}>See more from this series</Link>}
</li>

export default Video