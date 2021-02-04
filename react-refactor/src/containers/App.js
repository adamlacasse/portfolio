import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import ProjectSamples from '../components/ProjectSamples';
import { defaultOpenSections } from '../helpers/constants';
import '../styles/App.scss'

export default () => {
  const [openSections, setOpenSections] = useState(defaultOpenSections);
  const toggleOpenSection = (sectionName) => {
    if (openSections.includes(sectionName)) {
      return setOpenSections(openSections.filter(section => section !== sectionName));
    }
    return setOpenSections([...openSections, sectionName]);
  }

  return (
    <div className="app">
      <Header />
      <Nav openSections={openSections} setOpenSections={setOpenSections} />
      <Bio openSections={openSections} toggleOpenSection={toggleOpenSection} />
      <Experience openSections={openSections} toggleOpenSection={toggleOpenSection} />
      <ProjectSamples openSections={openSections} toggleOpenSection={toggleOpenSection} />
    </div>
  );
};
