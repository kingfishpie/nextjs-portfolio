import { projects } from '../data/projects'
import { links } from '../data/links'
import Project from '../components/project'
import Meta from '../components/meta'
import Button from '../components/button'

export default function Home() {
  return <>
      <Meta title='Carrie Nusbaum - UX design and research management' />
      <main className='container'>
        <header className='header'>
          <div>
            <h1>Carrie Nusbaum, MSI</h1>
            <h2>UX design and research management</h2>
            <p>I’m an experienced UX designer and researcher with design management experience, and a knack for product strategy. I like helping to solve tricky problems, and making things make sense. </p>
            <br />
            <p>I currently live in (and work remotely from) Los Angeles 🌴.</p>
            <br />
            <p>Find me on <a href='https://www.linkedin.com/in/carrienusbaum/'>LinkedIn</a> or email me at <a href='mailto:carrie.nusbaum@gmail.com'>carrie.nusbaum@gmail.com</a></p>
            <br />
            <Button>Email me</Button>
            <Button inverse={true}>See My Resume</Button>
          </div>
          <a href='/' className='logo'>
            <img src='biopic.png' srcSet='biopic.png 3x' />
          </a>
          <br />
        </header>
        

        <h2 className='divider'>--</h2>

        <ul>
          {projects.map((project, index) => <Project project={project} key={index} />)}
        </ul>

        <div className='footer'>
          <p>
          </p>
          <ul>
            {links.map((link, i) => <li key={i}>
              <a href={link.url}>{link.title}</a>
            </li>)}
          </ul>
          <p>
            <a href='mailto:carrie.nusbaum@gmail.com'>carrie.nusbaum@gmail.com</a>
          </p>
        </div>
      </main>
  </>
}