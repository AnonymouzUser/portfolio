import { experience } from "../../data/experience.data";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const ExperiencePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const scrollContainer = document.getElementById("root");
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    }, 100);
  }, []);

  return (
    <>
      <button onClick={() => navigate("/")} className="backButton">
        ← Back
      </button>
      <div className="experiencePage">
        {experience.map((exp, index) => (
          <div key={index} className="experienceCard">
            <h1 className="companyExTitle">{exp.company}</h1>
            <h5 className="experiencePeriod">
              <p className="periodTitle">Period</p>
              {exp.period}
            </h5>
            <h5 className="role">
              <p className="roleTitle">Role</p>
              {exp.role}
            </h5>

            <h5 className="description">
              <p className="descriptionTitle">Description</p>
              {exp.longDescription}
            </h5>
            <ul className="responsabilities">
              <p className="responsabilitiesTitle">Responsabilities</p>
              {exp.responsabilities?.map((res, resIndex) => (
                <li key={resIndex} className="responsabilitie">
                  {res}
                </li>
              ))}
            </ul>
            <div className="experienceTechnologies">
              <p className="techTitle">Technologies Used:</p>
              <div className="usedTechnologies">
                {exp.tech?.map((tech, techIndex) =>
                  Array.isArray(tech) && tech.length === 2 ? (
                    <span
                      key={techIndex}
                      className="techSvg"
                      dangerouslySetInnerHTML={{ __html: tech[1] }}
                    />
                  ) : null,
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
