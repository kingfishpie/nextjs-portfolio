import Link from 'next/link'

const Project = ({ project }) => <li className='projectListItem'>
  <div>
    <a href={project.link} className='projectTitle'>
      <h2>{project.title}</h2>
    </a>
    <h3>{project.description}</h3>
  </div>
</li>

export default Project