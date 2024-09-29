import Hero from './components/Hero';
import Navbar from './components/Navbar';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
};

export default App;
