import Hero from '../components/Hero';
import HomeCards from '../components/Homecards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <JobListings isHome={true}></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
};

export default HomePage;
