// AboutStyle.js
import styled from "styled-components";

export const AboutContainer = styled.div`
  // background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0%, 100% 100%, 30% 95%, 0 100%);
`;

export const AboutInnerContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px; // Space between content and image
  margin: 0 auto;

  @media (max-width: 768px) {
    // Media query for responsiveness
    flex-direction: column; // Stack content on smaller screens
  }
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #854ce6; // Title color
  margin-bottom: 10px;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  color: #c8cfd8; // Description color
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const AboutImage = styled.img`
  max-width: 400px; // Set maximum width for image
  border-radius: 10px; // Add border radius for aesthetics
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column; // Stack title and description
  align-items: flex-start; // Align to the start
  max-width: 600px; // Limit the width
`;

export const SkillsContainer = styled.div`
  margin-top: 20px; // Space above the skills section
  h3 {
    font-size: 24px;
    color: #854ce6; // Skills section title color
    margin-bottom: 10px;
  }
`;

export const SkillBadge = styled.span`
  background: #854ce6; // Skill badge background color
  color: #f2f5f7; // Skill badge text color
  border-radius: 20px;
  padding: 8px 12px;
  margin-right: 10px;
  display: inline-block;
  font-size: 14px;
`;

export const PersonalInterests = styled.div`
  margin-top: 20px; // Space above personal interests section
`;

export const InterestTitle = styled.h3`
  font-size: 24px;
  color: #854ce6; // Interests section title color
  margin-bottom: 10px;
`;

export const InterestItem = styled.li`
  color: #c8cfd8; // Interest item color
  margin: 5px 0; // Space between interests
  font-size: 16px;
`;
