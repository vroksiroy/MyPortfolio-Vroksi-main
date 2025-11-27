import React, { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 12px 16px;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}dd);
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(133, 76, 230, 0.3);
    }
`
const Card = styled.div`
    width: 350px;
    min-height: 520px;
    background: ${({ theme }) => theme.card};
    background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.card_light || theme.card});
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.primary}15;
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.1),
        0 1px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}80);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 12px 24px rgba(133, 76, 230, 0.1);
    }
    
    &:hover::before {
        opacity: 1;
    }
    
    &:hover ${Button} {
        display: block;
    }
    
    @media (max-width: 768px) {
        width: 320px;
        min-height: 480px;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}10, ${({ theme }) => theme.primary}05);
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
    
    ${Card}:hover & {
        transform: scale(1.1);
    }
`

const ImageFallback = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.primary}10);
    color: ${({ theme }) => theme.primary};
    font-size: 48px;
    font-weight: 600;
`

const CardContent = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`

const Tags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`

const Tag = styled.span`
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    backdrop-filter: blur(10px);
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.primary}20;
    transition: all 0.2s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary}25;
        transform: translateY(-1px);
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
`
const Title = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
    line-height: 1.3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    
    ${Card}:hover & {
        color: ${({ theme }) => theme.primary};
    }
`

const Date = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.8;
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`


const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    opacity: 0.9;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
`

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    border: 2px solid ${({ theme }) => theme.card};
    transition: transform 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
    }
`

const ProjectCards = ({project, setOpenModal}) => {
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        setImageError(true);
    };
    
    const getProjectIcon = (title) => {
        const firstLetter = title?.charAt(0)?.toUpperCase() || 'P';
        return firstLetter;
    };
    
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <ImageContainer>
                {!imageError ? (
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        onError={handleImageError}
                        loading="lazy"
                    />
                ) : (
                    <ImageFallback>
                        {getProjectIcon(project.title)}
                    </ImageFallback>
                )}
            </ImageContainer>
            
            <CardContent>
                <Details>
                    <Title>{project.title}</Title>
                    <Date>{project.date}</Date>
                    <Description>{project.description}</Description>
                </Details>
                
                <Tags>
                    {project.tags?.slice(0, 6).map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </Tags>
                
                {project.member && project.member.length > 0 && (
                    <Members>
                        {project.member.slice(0, 3).map((member, index) => (
                            <Avatar key={index} src={member.img} alt={member.name || 'Team member'}/>
                        ))}
                        {project.member.length > 3 && (
                            <span style={{fontSize: '12px', color: 'inherit', opacity: 0.7}}>+{project.member.length - 3} more</span>
                        )}
                    </Members>
                )}
                
                <Button>View Details</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCards