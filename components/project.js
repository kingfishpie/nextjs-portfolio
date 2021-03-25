import Button from '../components/button'

const Project = ({ project }) => <li className='projectListItem'>
  <a href={project.link} className='projectImage'>
    <img src={`/projects/${project.image}.png`} srcSet={`/projects/${project.image}-2x.png 2x`} />
  </a>
  <div>
    <a href={project.link} className='projectTitle'>
      <h2>{project.title}</h2>
    </a>
    <h3 dangerouslySetInnerHTML={{__html: project.description }} />
    <h4>
      <Button a href={project.link}>Project Details</Button>
    </h4>
  </div>
  <br />
</li>

export default Project