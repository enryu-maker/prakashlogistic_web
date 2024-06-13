import React, { useRef } from "react";
import { Button } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../Images/banner.png";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iimn6xj", "template_j73mvol", form.current, {
        publicKey: "mKccigPOPJxM9w7Ys",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Pakash Logistics: Get in Touch Today</title>
        <meta
          name="description"
          content="Contact Pakash Logistics today for reliable freight and transport solutions. Our experienced team is ready to assist you with your logistics needs. Reach out to us for inquiries, quotes, or to discuss partnership opportunities"
        />
      </Helmet>
      <ToastContainer /> {/* Toast Container for displaying toast messages */}
      <div
        className="relative w-full h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "10",
        }}
      >
        <div className="text-center text-white md:text-start w-full md:p-20">
          <p className="text-4xl font-bold md:w-full md:text-start">
            Contact Us
          </p>
          <p className="text-lg font-light mt-2">
            We are here to assist you with your inquiries and provide support.
          </p>
          <Button className="mt-4 bg-deep-orange-600">Get in Touch</Button>
        </div>
      </div>
      <div className="flex w-[90%] lg:w-[78%] flex-col justify-center items-center my-16">
        <div className="w-full lg:w-[88%] flex flex-col lg:flex-row h-auto shadow-lg">
          <div className="w-full lg:w-[60%] bg-white h-auto flex flex-col justify-around items-center p-4">
            <p className="text-4xl font-semibold font-Poppins text-blue-gray-900">
              GET A QUOTE
            </p>
            <hr className="w-full my-4" />
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-wrap justify-between items-start"
            >
              <input
                className="w-full lg:w-[45%] bg-gray-200 h-[50px] px-2 text-blue-gray-900 font-Poppins mb-4"
                placeholder="Your Name"
                name="name"
                type="text"
              />
              <input
                className="w-full lg:w-[45%] bg-gray-200 h-[50px] px-2 text-blue-gray-900 font-Poppins mb-4"
                placeholder="Your Mobile Number"
                name="phone"
                type="number"
              />
              <textarea
                className="w-full bg-gray-200 h-[150px] px-2 text-blue-gray-900 font-Poppins mb-4"
                placeholder="Write Message"
                name="message"
              />
              <Button
                type="submit"
                value="send"
                className="bg-primary w-full lg:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="w-full lg:w-[40%] bg-primary h-auto font-Poppins flex flex-col justify-evenly items-center p-4">
            <p className="text-4xl font-semibold font-Poppins text-white">
              CONTACT INFORMATION
            </p>
            <hr className="w-full my-4" />
            <div className="w-full bg-white h-auto rounded-lg flex flex-col justify-center px-5 py-3 mb-4">
              <p className="text-lg font-semibold font-Poppins text-blue-gray-900 py-1">
                Contact Number:
              </p>
              <a
                href="tel:+917773972197"
                className="text-md font-normal text-gray-800 "
              >
                +91 7773972197
              </a>
            </div>
            <div className="w-full bg-white h-auto rounded-lg flex flex-col justify-center px-5 py-3 mb-4">
              <p className="text-lg font-semibold font-Poppins text-blue-gray-900 py-1">
                Mail Address:
              </p>
              <a
                href="mailto:prakashlogistics.org@gmail.com"
                className="text-md font-normal font-Poppins text-gray-800"
              >
                prakashlogistics.org@gmail.com
              </a>
            </div>
            <div className="w-full bg-white h-auto rounded-lg flex flex-col justify-center px-5 py-3">
              <p className="text-lg font-semibold font-Poppins text-blue-gray-900 py-1">
                Office Location:
              </p>
              <p className="text-md font-normal font-Poppins text-gray-800">
                1, Opposite Ceat Ltd, Someshwar Colony, Satpur MIDC, Nashik -
                422007
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[90%] lg:w-[70%] flex-col justify-center items-center h-[50vh] bg-gray-500 mb-10 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.1965705057232!2d73.72167507539194!3d20.00026298140406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAwJzAxLjAiTiA3M8KwNDMnMjcuMyJF!5e0!3m2!1sen!2sin!4v1718195353608!5m2!1sen!2sin"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>
    </div>
  );
}
