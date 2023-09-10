import React from 'react'
import Image  from 'next/image'
import { Job } from '@/types/types';

interface JobCardProps {
    job: Job;
  }

const SingleJobCard = ({job}: JobCardProps) => {
  return (
    <div className="flex items-center bg-white p-4 rounded shadow-md">
        {/* Logo */}
        <div className='mr-4'>
            <Image src={job.logo} alt={`${job.company} logo`} width={60} height={60} className="rounded-full" />
        </div>

        <div className="flex flex-grow flex-col justify-between pr-4">
            <div>
                <span className="font-bold text-lg">{job.company}</span>
                {job.new && <span className="ml-2 bg-green-500 text-white text-sm py-1 px-2 rounded-full">NEW!</span>}
                {job.featured && <span className="ml-2 bg-black text-white text-sm py-1 px-2 rounded-full">FEATURED</span>}
            </div>
            <div className="text-gray-800 font-medium">{job.position}</div>
            <div className="text-gray-500 text-sm">
                {job.postedAt} • {job.contract} • {job.location}
            </div>
        </div>

        <div className="flex space-x-2">
            <span className="text-gray-800 bg-gray-200 p-2 rounded">{job.role}</span>
            <span className="text-gray-800 bg-gray-200 p-2 rounded">{job.level}</span>
          {job.languages.map((lang, index) => (
            <span key={index} className="text-gray-800 bg-gray-200 p-2 rounded">{lang}</span>
          ))}
        </div>
    </div>
  ) 
}

export default SingleJobCard