import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Explore my portfolio of innovative projects spanning mobile applications, web development, and cutting-edge technologies. Each project represents a unique challenge solved with creativity and technical excellence.
        </Desc>
     
        <CardContainer className="stagger-animation">
          {toggle === 'all' && projects
            .map((project, index) => (
              <ProjectCard 
                key={project.id || index}
                project={project} 
                openModal={openModal} 
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard 
                key={project.id || index}
                project={project} 
                openModal={openModal} 
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects