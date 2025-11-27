import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    transition: all 0.3s ease;
    z-index: 1000;
`;

const Wrapper = styled.div`
    max-width: 900px;
    width: 95%;
    max-height: 90vh;
    border-radius: 24px;
    margin: 20px;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border || theme.primary}15;
    color: ${({ theme }) => theme.text_primary};
    padding: 32px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 768px) {
        padding: 24px;
        margin: 10px;
        width: 98%;
        max-height: 95vh;
    }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 16px;
    margin: 24px 0;
    overflow: hidden;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}10, ${({ theme }) => theme.primary}05);
    
    @media (max-width: 768px) {
        height: 200px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const ImageFallback = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.primary}10);
    color: ${({ theme }) => theme.primary};
    font-size: 64px;
    font-weight: 700;
    
    @media (max-width: 768px) {
        font-size: 48px;
    }
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin: 4px 8px 4px 0;
    padding: 8px 16px;
    background: ${({ theme }) => theme.primary}15;
    border: 1px solid ${({ theme }) => theme.primary}25;
    border-radius: 20px;
    transition: all 0.2s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary}25;
        transform: translateY(-1px);
    }
    
    @media only screen and (max-width: 600px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;


// const ButtonGroup = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin: 12px 0px;
//     gap: 12px;
// `;

// const Button = styled.a`
//     width: 100%;
//     text-align: center;
//     font-size: 16px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary};
//     padding: 12px 16px;
//     border-radius: 8px;
//     background-color: ${({ theme }) => theme.primary};
//     ${({ dull, theme }) => dull && `
//         background-color: ${theme.bgLight};
//         color: ${theme.text_secondary};
//         &:hover {
//             background-color: ${({ theme }) => theme.bg + 99};
//         }
//     `}
//     cursor: pointer;
//     text-decoration: none;
//     transition: all 0.5s ease;
//     &:hover {
//         background-color: ${({ theme }) => theme.primary + 99};
//     }
//     @media only screen and (max-width: 600px) {
//         font-size: 12px;
//     }
// `;


const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        setImageError(true);
    };
    
    const getProjectIcon = (title) => {
        const firstLetter = title?.charAt(0)?.toUpperCase() || 'P';
        return firstLetter;
    };
    
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <ImageContainer>
                        {!imageError ? (
                            <Image 
                                src={project?.image} 
                                alt={project?.title || 'Project image'}
                                onError={handleImageError}
                                loading="lazy"
                            />
                        ) : (
                            <ImageFallback>
                                {getProjectIcon(project?.title)}
                            </ImageFallback>
                        )}
                    </ImageContainer>
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    {/* <ButtonGroup>
                        <Button dull href={project?.github} target='new'>View Code</Button>
                        <Button href={project?.webapp} target='new'>View Live App</Button>
                    </ButtonGroup> */}
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default ProjectDetails