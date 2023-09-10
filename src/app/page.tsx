import AllJobListing from "@/components/AllJobListing";
import Header from "@/components/Header";
import jobData from '@/util/data.json';

export default function Home() {
  return (
   <>
    <Header />
    <div className="mt-8  w-[80%] mx-auto">
     <AllJobListing 
      jobs={jobData}/>
    </div>
   </>
  )
}
