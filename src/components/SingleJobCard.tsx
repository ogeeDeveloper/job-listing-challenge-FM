import React from 'react'
import Image  from 'next/image'
import { Job } from '@/types/types';

interface JobCardProps {
    job: Job;
  }

const SingleJobCard = ({job}: JobCardProps) => {
  return (
    <div className="flex items-center bg-white p-8 rounded shadow-lg">
        {/* Logo */}
        <div className='mr-4'>
            <Image src={job.logo} alt={`${job.company} logo`} width={60} height={60} className="rounded-full" />
        </div>

        <div className="flex flex-grow flex-col justify-between pr-4">
            <div>
                <span className="font-bold text-2xlg text-primary">{job.company}</span>
                {job.new && <span className="ml-4 bg-primary text-neutral-lightBg text-sm py-1 px-2 rounded-full">NEW!</span>}
                {job.featured && <span className="ml-2 bg-neutral-veryDark text-white text-sm py-1 px-2 rounded-full">FEATURED</span>}
            </div>
            <div className="text-primary font-[700] text-xl cursor-pointer">{job.position}</div>
            <div className="text-gray-500 text-sm space-x-8">
                {job.postedAt} • {job.contract} • {job.location}
            </div>
        </div>

        <div className="flex space-x-4">
            <span className="text-primary bg-neutral-lightBg hover:bg-primary hover:text-neutral-lightBg cursor-pointer p-2 rounded">{job.role}</span>
            <span className="text-primary bg-neutral-lightBg hover:bg-primary hover:text-neutral-lightBg cursor-pointer p-2 rounded">{job.level}</span>
          {job.languages.map((lang, index) => (
            <span key={index} className="text-primary bg-neutral-lightBg hover:bg-primary hover:text-neutral-lightBg cursor-pointer p-2 rounded">{lang}</span>
          ))}
        </div>
    </div>
  ) 
}

export default SingleJobCard