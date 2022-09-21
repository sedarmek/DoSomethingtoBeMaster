import React from 'react';
import './AboutDescription.css';

const AboutDescription = () => (
  <div className="AboutDescription">
    <h1>About</h1>
    <p>Este projecto esta basado en el libro de Malcolm Gladwell llamado “Outliers. The story of success”, cuya traducción sería “Los fuera de serie. La historia del éxito”.</p>
    <p>Los diferentes **niveles** dependerán del tiempo que se dedique a la práctica:</p>
    <ol className="aboutDescription_listLevels">
      <li><strong>Con 1 hora:</strong> se conseguirá una introducción básica a la materia(<span>Introduccion</span>).</li>
      <li><strong>Con 10 horas:</strong> se logrará una noción más amplia de los principales conceptos(<span>Junior</span>).</li>
      <li><strong>Con 100 horas:</strong> se adquirirá un nivel medio(<span>Intermedio</span>).</li>
      <li><strong>Con 1.000 horas:</strong> se conseguirá ser especialista(<span>Especialista</span>).</li>
      <li><strong>Con 10.000 horas:</strong> se conseguirá ser un maestro en la materia(<span>Maestro</span>).</li>
    </ol>
  </div>
);

export default AboutDescription;
