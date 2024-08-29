import React from "react";

const Experience = () => {
  const experiences = [
    {
      _id: "1",
      title: "InfoPro Learning",
      from: "1-July-2023",
      to: "13-Aug-2023",
      description:
        "I completed a one-month internship at InfoPro Learning under Compunnel Company, where I gained experience working in both the Web and Networking departments, enhancing my technical skills in these areas.",
    },
    {
      _id: "2",
      title: "Code Clause",
      from: "11-Nov-2023",
      to: "Present",
      description:
      "I completed a one-month internship at Code Clause, where I gained experience working in both the Web and Networking departments, enhancing my technical skills in these areas.",
    },
  ];

  return (
    <>
      <div className="experience_component">
        <h3>EXPERIENCE</h3>
        <div className="experiences_container">
          {experiences.map((element) => {
            return (
              <div key={element._id} className="experience">
                <div className="duration">
                  {element.from} <span>to</span> {element.to}
                </div>
                <div className="organization">
                  <p>{element.title}</p>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;