import React from 'react'
import SingleJobCard from './SingleJobCard'
import { Job } from '@/types/types';

interface JobListProps {
    jobs: Job[];
  }

const AllJobListing = ({jobs}: JobListProps) => {
  return (
    <div className="space-y-8 space-x-4">
      {jobs.map((job) => (
        <SingleJobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default AllJobListing