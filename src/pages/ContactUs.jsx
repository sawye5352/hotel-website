import React from "react";
import ContactForm from "../components/ContactForm.jsx";

export default function ContactUs() {
  return (
    <div className="max-w-48 lg:max-w-3xl xl:max-w-6xl mx-auto">
      <h1 className="text-xl md:text-4xl font-bold text-center py-10 md:py-20 tracking-[3px] mr-5">
        CONTACT US
      </h1>
      <ContactForm />
    </div>
  );
}
