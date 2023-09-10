"use client"

import AllJobListing from "@/components/AllJobListing";
import Header from "@/components/Header";
import jobData from '@/util/data.json';
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState([]);
  return (
   <>
    <Header filters={filters} setFilters={setFilters} />
    <div className="mt-8  w-[80%] mx-auto">
     <AllJobListing 
      filters={filters}
      jobs={jobData}/>
    </div>
   </>
  )
}
