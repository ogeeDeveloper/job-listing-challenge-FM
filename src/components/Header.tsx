"use client"

import { Job } from "@/types/types";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

interface Props {
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
    jobData: Job[];
}

const Header = ({filters, setFilters, jobData }: Props) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [allPossibleFilters, setAllPossibleFilters] = useState<string[]>([]);

    useEffect(() => {
        // const newAllPossibleFilters = new Set();
        const newAllPossibleFilters = new Set<string>();
    
        jobData.forEach((job) => {
          newAllPossibleFilters.add(job.role);
          newAllPossibleFilters.add(job.level);
          job.languages.forEach((language) => newAllPossibleFilters.add(language));
          job.tools.forEach((tool) => newAllPossibleFilters.add(tool));
        });
    
        // setAllPossibleFilters([...newAllPossibleFilters]);
        setAllPossibleFilters(Array.from(newAllPossibleFilters));
      }, [jobData]);

      useEffect(() => {
        if (inputValue) {
          setSuggestions(
            allPossibleFilters.filter((filter) =>
              filter.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          );
        } else {
          setSuggestions([]);
        }
      }, [inputValue, allPossibleFilters]);useEffect(() => {
        if (inputValue) {
          setSuggestions(
            allPossibleFilters.filter((filter) =>
              filter.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          );
        } else {
          setSuggestions([]);
        }
      }, [inputValue, allPossibleFilters]);
      
    const addFilter = (newFilter: string) => {
        if(!filters.includes(newFilter)) {
          setFilters([...filters, newFilter]);
        }
    };

    const removeFilter = (filterIndex: number) => {
        setFilters(filters.filter((_, index) => index !== filterIndex));
    };
    
    const clearFilters = () => {
        setFilters([]);
        setInputValue('');
    };

    const onFilterInput = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && inputValue) {
          addFilter(inputValue);
          setInputValue('');
          setInputValue('');
        }
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    
  return (
    <header className="relative w-full bg-no-repeat bg-center bg-cover h-[150px] bg-primary mobile:bg-image-mobile desktop:bg-image-desktop mb-14" 
        id="header-section-id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="top-center">
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 p-4 bg-white bg-opacity-100 rounded-md shadow-lg w-[80%] mx-auto">
            <div className="flex items-center ml-4 space-x-2">
                {/* Individual filters with 'x' to remove them */}
                {filters.map((filter, index) => (
                  <div key={index} className="flex items-center bg-neutral-lightFilter px-2 text-neutral-dark rounded-md mr-2 font-bold">
                      <span className="flex-shrink-1 pr-2">{filter}</span>
                      <button 
                      className="flex-1 p-2 text-center
                      text-white bg-primary 
                      text-xl hover:text-white 
                      hover:bg-black hover:no-underline transition-all duration-300 ease-in-out" 
                      onClick={() => removeFilter(index)}>
                          x
                      </button>
                  </div>      
              ))}

                {/* Input field to add new filters */}
                <input 
                    type="text" 
                    placeholder="Add filter" 
                    className="flex-grow bg-transparent outline-none"
                    value={inputValue}
                    onKeyDown={onFilterInput}
                    onChange={onChangeInput}
                />

                <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                            addFilter(suggestion);
                            setInputValue('');
                            }}
                        >
                            {suggestion}
                        </div>
                        ))}
                    </div>

                {/* Clear all filters button */}
                <button className="ml-auto text-primary hover:text-primary hover:underline transition-all duration-300 ease-in-out" onClick={clearFilters}>
                    Clear
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header