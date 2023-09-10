import AllJobListing from "@/components/AllJobListing";
import Header from "@/components/Header";
import jobData from '@/util/data.json';

export default function Home() {
  return (
   <>
    <Header />
     <AllJobListing jobs={jobData}/>
   </>
  )
}
