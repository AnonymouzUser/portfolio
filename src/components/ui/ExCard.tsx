import { useState } from "react";
import { experience, type ExperienceData } from "../../data/experience.data";
import { ExModal } from "./ExModal";

export const ExCard = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceData | null>(null);

  return (
    <>
      <div className="experienceContainer">
        {experience.map((exp) => (
          <div key={exp.id} className="experienceItem">
            <button
              className="modalButton"
              onClick={() => setSelectedExperience(exp)}
              aria-label="Open experience details"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="companyHeader">
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="companyLogo"
                />
              )}
              <h2 className="companyTitle">{exp.company}</h2>
            </div>
            <p className="description">{exp.description}</p>
            <ul>
              {exp.tech.map((techs, index) => (
                <li key={index}>
                  {Array.isArray(techs) ? (
                    <>
                      <span
                        className="techSvg"
                        dangerouslySetInnerHTML={{ __html: techs[1] }}
                      />
                      <span>{techs[0]}</span>
                    </>
                  ) : (
                    techs
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ExModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
};
