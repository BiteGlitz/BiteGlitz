// AboutSection.js
import React from "react";
import {
  AboutContainer,
  AboutInnerContainer,
  AboutTitle,
  AboutDescription,
  AboutImage,
  AboutContent,
  SkillsContainer,
  SkillBadge,
  PersonalInterests,
  InterestTitle,
  InterestItem,
} from "./AboutStyle"; // Import your styled components
import AboutImg from "../../images/AboutUs.png"; // Import your about image
import { Bio } from "../../data/constants";

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutInnerContainer>
        <AboutImage src={AboutImg} alt="About me" />
        <AboutContent>
          <AboutTitle>About Me</AboutTitle>
          <AboutDescription>{Bio.aboutDescription}</AboutDescription>
          <SkillsContainer>
            <h3>Skills</h3>
            {Bio.skills?.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </SkillsContainer>
        </AboutContent>
      </AboutInnerContainer>
    </AboutContainer>
  );
};

export default AboutSection;
