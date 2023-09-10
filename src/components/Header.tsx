"use client"

import { KeyboardEvent, useState } from "react";

type Props = {}

const Header = (props: Props) => {
    const [filters, setFilters] = useState([]);

    const addFilter = (newFilter) => {
        setFilters([...filters, newFilter]);
    };

    const removeFilter = (filterIndex) => {
        setFilters(filters.filter((_, index) => index !== filterIndex));
    };

    const clearFilters = () => {
        setFilters([]);
    };

    const onFilterInput = (newFilters: KeyboardEvent<HTMLInputElement>) => {
        if (newFilters.key === "Enter" && newFilters.target.value) {
            addFilter(newFilters.currentTarget.value);
            newFilters.currentTarget.value = "";
        }
    };
    
  return (
    <header className="relative w-full bg-no-repeat bg-center bg-cover h-[150px] bg-primary mobile:bg-image-mobile desktop:bg-image-desktop" 
        id="header-section-id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="top-center">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-white bg-opacity-100 rounded-md shadow-lg">
            <div className="flex items-center space-x-2">
                {/* Individual filters with 'x' to remove them */}
                {filters.map((filter, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-neutral-lightFilter text-neutral-dark rounded-md p-2 mr-2 font-bold">
                        <span>{filter}</span>
                        <button className="p-1 
                        text-white bg-primary hover:text-white hover:bg-black hover:underline transition-all duration-300 ease-in-out" onClick={() => removeFilter(index)}>
                            x
                        </button>
                    </div>
                ))}

                {/* Input field to add new filters */}
                <input 
                    type="text" 
                    placeholder="Add filter" 
                    className="flex-grow bg-transparent outline-none"
                    onKeyDown={onFilterInput}
                />

                {/* Clear all filters button */}
                <button className="ml-auto text-neutral-dark hover:text-neutral-dark hover:underline transition-all duration-300 ease-in-out">
                    Clear
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header