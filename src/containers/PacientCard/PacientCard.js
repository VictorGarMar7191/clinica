import React from "react";
import "@fortawesome/fontawesome-free";
import "./PacientCard.css";
import PersonalData from "../../components/PersonalData/PersonalData";

const PacientCard = () => {
  return (
    <div>
      <div className="resume">
        <div className="resume_left">
           <div className="resume_content">
            <div className="resume_item resume_info">
            <PersonalData />
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">Enfermedades Crónicas</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">Enfermedad 1</div>
                 </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Alergias</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Aleria 1</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">Antecedentes</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis illo fugit officiis distinctio culpa officia totam
              atque exercitationem inventore repudiandae?
            </p>
          </div>
         </div>
      </div>
    </div>
  );
};

export default PacientCard;