import { experience } from "../../data/experience.data";
import { useNavigate, useParams, useLocation } from "react-router";
import { useEffect } from "react";

export const ExperiencePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const currentIndex = parseInt(id || "0", 10);
  const currentExperience = experience[currentIndex];
  const sectionId =
    (location.state as { sectionId: string } | null)?.sectionId || "experience";

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      const scrollContainer = document.getElementById("root");
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    }, 100);
  }, [currentIndex]);

  if (!currentExperience) {
    return (
      <>
        <button onClick={handleBack} className="backButton">
          ← Back
        </button>
        <div className="experiencePage">
          <p>Experience not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={handleBack} className="backButton">
        ← Back
      </button>
      <div className="experiencePage">
        <div className="experienceCard">
          <h1 className="companyExTitle">{currentExperience.company}</h1>
          <h5 className="experiencePeriod">
            <p className="periodTitle">Period</p>
            {currentExperience.period}
          </h5>
          <h5 className="role">
            <p className="roleTitle">Role</p>
            {currentExperience.role}
          </h5>

          <h5 className="description">
            <p className="descriptionTitle">Description</p>
            {currentExperience.longDescription}
          </h5>
          <ul className="responsabilities">
            <p className="responsabilitiesTitle">Responsabilities</p>
            {currentExperience.responsabilities?.map((res, resIndex) => (
              <li key={resIndex} className="responsabilitie">
                {res}
              </li>
            ))}
          </ul>
          <div className="experienceTechnologies">
            <p className="techTitle">Technologies Used:</p>
            <div className="usedTechnologies">
              {currentExperience.tech?.map((tech, techIndex) =>
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
      </div>
    </>
  );
};
