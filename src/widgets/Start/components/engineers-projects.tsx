'use client';
import React, { useState } from "react";
import projects from "src/app/data";
import ProjectCard from "./card-project";
import style from '../styles/projects.module.css';
import MainButton from "src/shareds/button/button";

const ProjectList: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerSlide = 6; 
    const itemsPerPage = 2; 

    const currentSlide = projects.slice(currentIndex, currentIndex + itemsPerSlide);
    
    const handleNext = () => {
        if (currentIndex + itemsPerPage < projects.length) {
            setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.slider}>
                {currentSlide.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className={style.controls}>
                <MainButton label="Назад" currentClick={handlePrev} />
                <MainButton label="Вперед" currentClick={handleNext} />
            </div>
        </div>
    );
};

export default ProjectList;
