import Image from 'next/image';
import hidden from 'public/images/hidden.svg';
import hide from 'public/images/hide.svg';
import React, { useEffect, useState } from 'react';

type PasswordInputProps = {
  name: string;
  placeholder: string;
  value: string;
  header: string;
  error: string;
  setup: boolean;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

export default function PasswordInput({
  name,
  placeholder,
  value,
  header,
  error,
  setup,
  onValueChange,
}: PasswordInputProps) {
  const [inputType, setInputType] = useState('password');
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  console.log(error);
  useEffect(() => {
    if (!isFocused) {
      if (value === '') {
        setErrorMessage('');
      } else {
        const isValid = passwordRegex.test(value);
        if (!isValid) {
          setErrorMessage('Invalid password format.');
        } else {
          setErrorMessage('');
        }
      }
    }
  }, [value, isFocused]);

  const handleToggleClick = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="font-Montserrat">
      <h1
        className={`${
          errorMessage !== '' || error !== '' ? 'text-red-600' : 'text-white'
        } text-sm py-2 ${isFocused ? '' : 'invisible'}`}
      >
        {header}
      </h1>
      <div
        className={`flex flex-row rounded outline outline-1 ${
          errorMessage !== '' || error !== ''
            ? 'outline-red-600'
            : 'outline-shopGray'
        } `}
      >
        <input
          className="px-4 py-2 w-full bg-transparent h-full focus:outline-none max-lg:text-lg text-xl"
          placeholder={placeholder}
          type={inputType}
          id={name}
          name={name}
          value={value}
          required
          onChange={onValueChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div
          onClick={handleToggleClick}
          className="self-center pr-2 cursor-pointer"
        >
          <Image
            src={inputType === 'password' ? hidden : hide}
            alt=""
            width={25}
            height={25}
          />
        </div>
      </div>

      <div
        className={`max-lg:text-sm text-xs pt-1 absolute ${
          setup ? '' : 'invisible'
        }`}
      >
        {errorMessage != '' ? errorMessage : error}
      </div>
    </div>
  );
}
