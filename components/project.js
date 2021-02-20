const Project = ({ project }) => <li className='projectListItem'>
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