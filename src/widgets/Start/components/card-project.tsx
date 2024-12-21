import React from "react";
import Image, { StaticImageData } from "next/image";
import style from '../styles/projects.module.css';
import flex from '../../../shareds/styles/flex.module.css'

interface Project {
    name: string;
    image: StaticImageData;
}

interface CardProps {
    project: Project;
}

const ProjectCard: React.FC<CardProps> = ({ project }) => {
    return (
        <section className={`${style.card} ${flex.flexColumn}`}>
            <Image src={project.image} alt={project.name} className={style.image} />
            <span className={style.name}>{project.name}</span>
        </section>
    );
};

export default ProjectCard;
