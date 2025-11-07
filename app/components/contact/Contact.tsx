import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl space-y-6"
    >
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p className="text-gray-500 max-w-lg">
        Feel free to reach out for opportunities, collaboration, or just to say
        hi
      </p>

      <div className="flex gap-4">
        {/* Email */}
        <a
          href="mailto:plo42@my.bcit.ca"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition shadow-sm"
        >
          <FiMail className="text-2xl" />
          <span className="text-lg">plo42@my.bcit.ca</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/patricia-lo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition shadow-sm"
        >
          <FaLinkedin className="text-2xl text-blue" />
          <span className="text-lg">Connect on LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
