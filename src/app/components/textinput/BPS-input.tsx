import { on } from 'events';
import React, { useState } from 'react'; 

type InputProps = {
  id: string; // doubles as the id and name of the input
  placeholder: string; // placeholder text
  value: string; // value of the input
  error: string; // error message if none then empty string
  header: string; // header text
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // function that handles input change
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void; // function that handles input blur
  
};


export default function Input({
  id,
  placeholder,
  value,
  error,
  header,
  onValueChange,
  onBlur,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false); // state that determines if the input is focused or not


  // function that handles input focus
  const handleFocus = () => {
    setIsFocused(true);
  }; 
  // function that handles input blur
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  // function that handles input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e);
  };
  return (
    <div className="">
      {/* this is where header is displayed and changes based on error and focus states*/}
      <h1
        className={` ${isFocused || value != '' ? '' : 'invisible'} ${
          error !== '' ? 'text-red-600' : 'text-black'
        } text-xs py-2 font-Montserrat `}
      >
        {header}
      </h1>
      {/* outline of the input and changes based on error and focus states */}
      <div
        className={`flex flex-row rounded outline outline-1 ${
          error !== ''
            ? 'outline-red-600'
            : 'outline-shopGray'
        } `}
      >
        {/* actuall input component where set props go into */}
        <input
          className="px-4 py-2 w-full bg-transparent h-full focus:outline-none max-lg:text-lg text-xl"
          placeholder={placeholder}
          id={id}
          name={id}
          value={value}
          required
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
        {/* shows the error and changes based on focus and error states */}
      <div className={`max-lg:text-sm text-xs pt-1 ${isFocused ? 'invisible' : ''} `}>
        {error}
      </div>
    </div>
  );
}
