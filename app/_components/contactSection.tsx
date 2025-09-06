"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useActiveSectionInView } from "../_lib/hooks";

import { sendEmailAction } from "../_lib/actions";

import SectionHeading from "./sectionHeading";
import SubmitButton from "./submitButton";

const ContactSection = () => {
  const { ref } = useActiveSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,40rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mohamednabeeh008@gmail.com">
          mohamednabeeh008@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmailAction(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 transition-all dark:bg-white/80 dark:focus:bg-white dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          className="h-52 my-3 p-4 rounded-lg border border-black/10 transition-all dark:bg-white/80 dark:focus:bg-white dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default ContactSection;
