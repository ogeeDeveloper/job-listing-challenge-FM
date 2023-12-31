import React from 'react'
import SingleJobCard from './SingleJobCard'
import { Job } from '@/types/types';

interface JobListProps {
    jobs: Job[];
    filters: string[];
  }

const AllJobListing = ({jobs, filters}: JobListProps) => {
  const filteredJobs = jobs.filter(job => {
    return filters.every(filter => {
      return job.languages.includes(filter) || job.role.includes(filter);
    });
  });
  return (
    <div className="desktop:space-y-6 mobile:space-y-14">
      {/* {jobs.map((job) => (
        <SingleJobCard key={job.id} job={job} />
      ))} */}
      {filteredJobs.map((job) => (
        <SingleJobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default AllJobListing