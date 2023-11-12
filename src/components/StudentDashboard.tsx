import React, { useState } from 'react';

type ResourceMap = {
  [grade: string]: {
    powerpoints: string[];
    classworks: string[];
    assignments: string[];
  };
};

const resourcesByGrade: ResourceMap = {
  'Grade 9': {
    powerpoints: ['/slides/grade9/chapter1.pptx', '/slides/grade9/chapter2.pptx'],
    classworks: ['/classwork/grade9/worksheet1.pdf', '/classwork/grade9/worksheet2.pdf'],
    assignments: ['/assignments/grade9/essay1.pdf', '/assignments/grade9/project1.pdf'],
  },
  'Grade 10': {
    powerpoints: [],
    classworks: [],
    assignments: [],
  },
  // ... other grades
};


function StudentDashboard() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 9');
  const [resources, setResources] = useState(resourcesByGrade[selectedGrade]);

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade);
    setResources(resourcesByGrade[grade]);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <select onChange={(e) => handleGradeChange(e.target.value)} value={selectedGrade}>
          {/* Dynamically generate grade options */}
          {Object.keys(resourcesByGrade).map((grade) => (
            <option key={grade} value={grade}>{grade}</option>
          ))}
        </select>
      </header>
      <section className="resources">
        <div className="resource-category">
          <h2>PowerPoint Slides</h2>
          <ul>
            {resources.powerpoints.map((slide, index) => (
              <li key={index}><a href={slide} download>Download Slide {index + 1}</a></li>
            ))}
          </ul>
        </div>
        <div className="resource-category">
          <h2>Classwork</h2>
          <ul>
            {resources.classworks.map((work, index) => (
              <li key={index}><a href={work} download>Download Classwork {index + 1}</a></li>
            ))}
          </ul>
        </div>
        <div className="resource-category">
          <h2>Assignments</h2>
          <ul>
            {resources.assignments.map((assignment, index) => (
              <li key={index}><a href={assignment} download>Download Assignment {index + 1}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;
