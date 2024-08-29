import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation",
      description:
        "I completed my matriculation at St.Thomas school Indirapuram GZB, building a strong academic foundation . 2017-2018 ",
    },
    {
      _id: "2",
      title: "Intermediate",
      description:
    "I completed my intermediate education in the Science stream (Physics, Chemistry, Mathematics), which laid the foundation for my further studies. 2019-2020",
    },
    {
      _id: "3",
      title: "Bachelor of Technology (IT)",
      description:
        "I pursued my Bachelor of Technology (B.Tech) degree in Information Technology from JSS Academy of Technical Education, Noida, graduating in 2024. During my studies from 2020 to 2024, I gained comprehensive knowledge and hands-on experience in various aspects of IT, including software development, database management, and network security. My education equipped me with the technical skills and problem-solving abilities essential for a successful career in the technology industry. 2020-2024 ",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Education;
