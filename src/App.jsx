import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const {VITE_OPTLY_PROJECT_ID_TH, VITE_OPTLY_TOKEN} = import.meta.env;


import './App.css'
import networkManager from './scripts/networkManager';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { ProjectContainer } from './components/ProjectContainer/ProjectContainer';

function App() {
  const [experiments, setExperiments] = useState([]);
  const [selectedProject, setSelectedProject] = useState("th");
  const [isLoading, setIsLoading] = useState(true);

  function handleSelectProject(project) {
    setSelectedProject(project);
    setIsLoading(true);
  };

  function handleExperimentStateChange(experiment, state) {
    console.log(experiment, state);

    // // call api + update optimizely //
    networkManager.updateExperimentStatus(selectedProject, experiment, state)


    // // update UI
    const copy = experiments.map(exp => {
      const copyExp = {...exp};
      if (exp.id === experiment.id) {
        copyExp.status = state;
      }
      return copyExp
    });
    setExperiments(copy);
    
  }

  useEffect(() => {
    const fetchedExperiments = networkManager.fetchExperiments(selectedProject);
      setExperiments(fetchedExperiments);
      setIsLoading(false);
  }, [selectedProject]);

  return (
    <>
      <Header />

      <div style={{display: "flex"}}>
        <Navbar onProjectSelected={handleSelectProject} selectedProject={selectedProject}/>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && <ProjectContainer experiments={experiments} onExperimentStateChange={handleExperimentStateChange}/>}
      </div>
    </>
  )
}

export default App
