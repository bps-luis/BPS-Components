import React, { useEffect, useState } from 'react'; 

type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  error: string;
  header: string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  funct?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export default function Input({
  name,
  placeholder,
  value,
  error,
  header,
  onValueChange,
  funct,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>(error);



  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (funct) {
      funct(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e);
  };
  return (
    <div className="">
      <h1
        className={`${
          errorMessage !== '' || error != '' ? 'text-red-600' : 'text-black'
        } text-xs py-2 font-Montserrat ${isFocused || value != '' ? '' : 'invisible'}`}
      >
        {header}
      </h1>
      <div
        className={`flex flex-row rounded outline outline-1 ${
          errorMessage !== ''
            ? 'outline-red-600'
            : 'outline-shopGray'
        } ${isFocused ? ' outline-shopGray' : '' } `}
      >
        <input
          className="px-4 py-2 w-full bg-transparent h-full focus:outline-none max-lg:text-lg text-xl"
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          required
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div className={`max-lg:text-sm text-xs pt-1 ${isFocused ? 'invisible' : ''} `}>
        {errorMessage != '' ? errorMessage : error}
      </div>
    </div>
  );
}
