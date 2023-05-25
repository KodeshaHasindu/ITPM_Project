import React from 'react'
import './aboutUs.scss';
import {  useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function AboutUs() {

  const formRef = useRef();
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pervbza",
        "template_aq7fyx5",
        formRef.current,
        "user_JhyvDIZcscAbjSt8ZPIhI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className='main-content-abUs'>
      <div className='abUsTop'>
        <span>About Us</span>
        <span>We are Care NGO</span>
        <span>we are give your Free Service</span>
      </div>
     
    </div>
  )
}
