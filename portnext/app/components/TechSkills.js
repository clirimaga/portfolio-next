
import { useState } from "react";
import "./TechSkills.css";
import Spinner from "react-bootstrap/Spinner";

async function getSkills() {
  const res = await fetch("https://fine-wasp-attire.cyclic.app/skills", {
    next: { revalidate: 86400 },
  });
  return res.json();
}

export default async function TechSkills() {
  const [loading, setLoading] = useState(false);
  const skills = await getSkills();
  
  return (
    <section className="row mt-5 text-center" data-aos="fade-down">
      <div id="techskills" className="row mt-5 text-center p-4">
        <h1 className="mb-2 skilltitle">
          {/* {t("Skills.1")} */}
          My Tech Skills
        </h1>
        <div className="mt-5 col-4 d-flex flex-column justify-content-center align-items-center gap-3">
          {loading ? (
            <div className="d-flex justify-content-center my-5">
              <Spinner animation="grow" variant="primary" />
            </div>
          ) : (
            skills.map((skill) =>
              skill.type === "Frontend" ? (
                <img
                  key={skill._id}
                  src={skill.pic}
                  className="skill"
                  alt="skill"
                />
              ) : (
                ""
              )
            )
          )}
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center gap-3">
          {skills.map((skill) =>
            skill.type === "Backend" ? (
              <img
                key={skill._id}
                src={skill.pic}
                className="skill"
                alt="skill"
              />
            ) : (
              ""
            )
          )}
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center gap-3">
          {skills.map((skill) =>
            skill.type === "Extra" ? (
              <img
                key={skill._id}
                src={skill.pic}
                className="skill"
                alt="skill"
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
}
