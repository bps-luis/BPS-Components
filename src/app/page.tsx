'use client'
import Input from './components/textinput/BPS-input'
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({name: '' }); // here you could add more data to this form like email, password, etc.
  const [errorStates, setError] = useState({nameError: ''}); // here you could add more error states like emailError, passwordError, etc.
  const nameRegex = /^[a-zA-Z]+$/; // regex for name validation

 
  // function that handles input change when user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  // function that handles and sets error state on blur  
  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // here is where you would check for regex validation and change error state accordingly
    if (name === 'name') {
      if (value === '') {
        setError((prevError) => ({
          ...prevError,
          nameError: 'Name is required',
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          nameError: '',
        }));
      }
    }
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <Input id={'name'} placeholder='Enter Name' value={form.name}  error={errorStates.nameError} header={'First Name'} onValueChange={handleInputChange} onBlur={handleOnBlur}></Input>
    </main>
  )
}
