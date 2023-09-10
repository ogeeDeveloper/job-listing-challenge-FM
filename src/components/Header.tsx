"use client"

import { KeyboardEvent, useState } from "react";

interface Props {
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  }

const Header = ({filters, setFilters}: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

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

    const onFilterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && inputValue) {
          addFilter(inputValue);
          setInputValue('');
          setInputValue('');
        }
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    
  return (
    <header className="relative w-full bg-no-repeat bg-center bg-cover h-[150px] bg-primary mobile:bg-image-mobile desktop:bg-image-desktop mb-14" 
        id="header-section-id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="top-center">
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 p-4 bg-white bg-opacity-100 rounded-md shadow-lg w-[80%] mx-auto">
            <div className="flex items-center ml-4 space-x-2">
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
                    value={inputValue}
                    onKeyDown={onFilterInput}
                    onChange={onChangeInput}
                />

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