import React from 'react'
import { SubHeading } from './ProjectsStyle'
import { Container, Wrapper, SectionHeader, Serif, Mono } from '../Section'
import { CaseStudy, ProjectRow } from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ onOpen: open }) => {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <Container id="work">
      <Wrapper>
        <SectionHeader
          index="01"
          label="Selected work"
          title={<>Case studies from products <Serif>in production.</Serif></>}
          desc="Each one started with a real user problem, and I owned the result: architecture, delivery and the numbers after launch."
        />
        <div>
          {featured.map((project, i) => (
            <CaseStudy key={project.id} project={project} index={i} reverse={i % 2 === 1} onOpen={() => open(project)} />
          ))}
        </div>
        <SubHeading data-reveal>
          <h3>Also shipped</h3>
          <Mono>{more.length} projects</Mono>
        </SubHeading>
        <div data-reveal>
          {more.map((project) => (
            <ProjectRow key={project.id} project={project} onOpen={() => open(project)} />
          ))}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Projects
