const Project = ({ project }) => <li className='projectListItem'>
  <a href={project.link} className='projectImage'>
    <img src={`/projects/${project.image}.png`} srcset={`/projects/${project.image}-2x.png 2x`} />
  </a>
  <div>
    <a href={project.link} className='projectTitle'>
      <h2>{project.title}</h2>
    </a>
    <h3 dangerouslySetInnerHTML={{__html: project.description }} />
    <h4>
      <a href={project.link}>Visit {project.title}</a>
    </h4>
  </div>
</li>

export default Project