import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, SectionHeader, Serif } from '../Section'
import { toolbox } from '../../data/constants'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Group = styled.div`
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.line_strong};
`

const GroupTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  color: ${({ theme }) => theme.ink};
`

const List = styled.ul`
  margin-top: 18px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Item = styled.li`
  font-size: 15.5px;
  color: ${({ theme }) => theme.ink_2};
`

const Skills = () => {
  return (
    <Container id="toolbox">
      <Wrapper>
        <SectionHeader
          index="04"
          label="Toolbox"
          title={<>Full stack, <Serif>mobile first.</Serif></>}
        />
        <Grid data-reveal>
          {toolbox.map((group) => (
            <Group key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <List>
                {group.items.map((s) => <Item key={s}>{s}</Item>)}
              </List>
            </Group>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  )
}

export default Skills
