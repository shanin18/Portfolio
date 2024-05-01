import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/animation.json";

AOS.init();
const Contact = () => {
  const form = useRef();

  const handleGetEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y0f21wk",
        "template_1jd5xag",
        form.current,
        "9NO7DMhDpjZct4IrZ"
      )
      .then(
        () => {
          e.target.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mail send successfully!!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className=" py-16 dark:bg-[#1a1a29]" id="contact">
      <div
        className="container mx-auto px-4 font-poppins flex flex-col md:flex-row justify-around gap-8"
        data-aos="zoom-in-up"
      >
        <div className="">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#7562e0] mb-4 font-poppins">
            Contact Me
          </h2>
          <p className="dark:text-gray-300 font-poppins mb-4">
            Have a project in mind or just want to say hi?
          </p>
            <Lottie animationData={lottieAnimation} loop={true} className="h-60" />
          <div className="flex gap-5 mt-4">
            <a
              href="https://www.linkedin.com/in/shamim-hosan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl text-[#7562e0] hover:shadow-neon"></FaLinkedin>
            </a>
            <a
              href="https://github.com/shanin18"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl text-[#7562e0] hover:shadow-neon rounded-full"></FaGithub>
            </a>
            <a
              href="https://facebook.com/hosanshamim52"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-2xl text-[#7562e0] hover:shadow-neon rounded-full"></FaFacebook>
            </a>
            <a
              href="https://https://discord.com/users/shamim6393"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord className="text-2xl text-[#7562e0] hover:shadow-neon rounded-full"></FaDiscord>
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={handleGetEmail}
          className="max-w-[500px] space-y-3"
        >
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full dark:text-white dark:bg-[#f5f5f513] rounded-md border dark:border-none shadow-sm py-3.5 px-4 outline-none text-sm placeholder-gray-500 font-poppins"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            id="email"
            name="user_email"
            className="w-full dark:text-white dark:bg-[#f5f5f513] rounded-md border dark:border-none shadow-sm py-3.5 px-4 outline-none text-sm placeholder-gray-500 font-poppins"
            placeholder="Your Email"
            required
          />
          <textarea
            id="message"
            name="message"
            className="w-full h-[200px] dark:text-white dark:bg-[#f5f5f513] rounded-md border dark:border-none shadow-sm py-2 px-4 outline-none text-sm placeholder-gray-500 font-poppins"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="font-poppins border border-[#7562e0] bg-[#7562e0] text-white px-5 py-2 rounded-md ease-in-out transition-all duration-200 hover:shadow-neon"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;