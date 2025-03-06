export default function CardCareerResponse({
  careerName,
  skills,
  salaryRange,
  marketDemand,
  careerDescription,
}) {
  return (
    <div className="card-career-response">
      <h2 className="career-name">{careerName}</h2>
      <p className="career-description">{careerDescription}</p>
      <div className="career-market-demand">{marketDemand}</div>
      <div className="salary-range">
        {salaryRange.min} to {salaryRange.max}
      </div>
      <div className="skills required">
        <h3 className="skills-required-title">
          Skills Required For this Career
        </h3>
        <ul className="skills-required-list">
          {skills.map((skill, index) => {
            return <li key={skill.name + index} className={"skill-" + index}>
              <p className="skill-name">{skill.name}</p>
              <p className="time-required-for-learning">{skill.time}</p>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
