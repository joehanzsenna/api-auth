'use client'

import Link from "next/link";
import React, { useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      try{
        const res = await fetch('/api/register', {
            method: "POST",
            headers:{
                "content-Type": "aplication/json",
            },
            body: JSON.stringify(formData)
        })
        if (res.status === 200){
          alert("Registration Successful");
           setFormData({
             email: "",
             password: "",
           });
          Router.push("/login");
        }
        if (res.status === 400){
            setErrors('User has been registered')
            alert("User Already Exists");
        }
      }catch(error){
        setErrors("error, try again")
        console.log(error);
      }
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "invalid Email";
    }

    if (!data.password) {
      errors.password = "password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password should not be less than 6";
    }
    return errors;
  };

  return (
    <div className="w-full h-[80vh] bg-blue-600 flex justify-center items-center flex-col">
      <form className="text-white" onSubmit={handleSubmit}>
        <h2>Form Validation </h2>
        <div className="flex flex-col ">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={formData.email}
            className="text-black"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleInputChange}
            value={formData.password}
            className="text-black"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-4 px-4 py-2 bg-red-300"
        />
      </form>

      <div>
        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <Link
          className="block text-center text-blue-500 hover:underline mt-2"
          href="/login"  >
          Login with an existing account
        </Link>
      </div>
    </div>
  );
};

export default Form;
