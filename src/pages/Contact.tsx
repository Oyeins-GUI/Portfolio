import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../zod";
import { Asterisk } from "lucide-react";
import emailjs from "@emailjs/browser";

export type Inputs = {
   name: string;
   email: string;
   subject: string;
   message: string;
};

export default function Contact() {
   const form = useRef<HTMLFormElement>(null);
   const [submitMessage, setSubmitMessage] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<Inputs>({
      defaultValues: { name: "", email: "", subject: "", message: "" },
      resolver: zodResolver(ContactFormSchema),
   });

   const onSubmit: SubmitHandler<Inputs> = async () => {
      setIsSubmitting(true);

      if (form.current) {
         emailjs
            .sendForm("service_qp31l6j", "contact_form", form.current, {
               publicKey: "ICxOh_tcD2eZlomcm",
            })
            .then(() => {
               setSubmitMessage(
                  "Thank you for your message. We'll get back to you soon!"
               );
               reset();
            })
            .catch((error) => {
               setSubmitMessage("Something went wrong. Please try again");
               console.log("error =>", error);
            });
      }

      setIsSubmitting(false);
      setTimeout(() => {
         setSubmitMessage("");
      }, 5000);
   };

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
      >
         <h2 className="font-saira text-4xl sm:text-5xl font-bold uppercase mb-12 text-gray-700">
            Get in <span className="text-primary">touch</span>
         </h2>
         <div className="max-w-2xl mx-auto">
            <form
               onSubmit={handleSubmit(onSubmit)}
               ref={form}
               className="space-y-6"
            >
               <div>
                  <label
                     htmlFor="name"
                     className="text-sm font-medium text-gray-700 flex items-center gap-[2px]"
                  >
                     Name <Asterisk className="w-3" />
                  </label>
                  <input
                     type="text"
                     id="name"
                     {...register("name", { required: "Name is required" })}
                     className="mt-1 p-2 border outline-transparent block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  />
                  {errors.name && (
                     <p className="text-red text-xs mt-1">
                        {errors.name.message}
                     </p>
                  )}
               </div>
               <div>
                  <label
                     htmlFor="email"
                     className="text-sm font-medium text-gray-700 flex items-center gap-[2px]"
                  >
                     Email <Asterisk className="w-3" />
                  </label>
                  <input
                     type="email"
                     id="email"
                     {...register("email", { required: "Email is required" })}
                     className="mt-1 p-2 border outline-transparent block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  />
                  {errors.email && (
                     <p className="text-red text-xs mt-1">
                        {errors.email.message}
                     </p>
                  )}
               </div>
               <div>
                  <label
                     htmlFor="subject"
                     className="text-sm font-medium text-gray-700 flex items-center gap-[2px]"
                  >
                     Subject <Asterisk className="w-3" />
                  </label>
                  <input
                     type="text"
                     id="subject"
                     {...register("subject", {
                        required: "Subject is required",
                     })}
                     className="mt-1 p-2 border outline-transparent block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  />
                  {errors.subject && (
                     <p className="text-red text-xs mt-1">
                        {errors.subject.message}
                     </p>
                  )}
               </div>
               <div>
                  <label
                     htmlFor="message"
                     className="text-sm font-medium text-gray-700 flex items-center gap-[2px]"
                  >
                     Message <Asterisk className="w-3" />
                  </label>
                  <textarea
                     id="message"
                     rows={4}
                     {...register("message", {
                        required: "Message is required",
                     })}
                     className="mt-1 p-2 border outline-transparent block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  ></textarea>
                  {errors.message && (
                     <p className="text-red text-xs mt-1">
                        {errors.message.message}
                     </p>
                  )}
               </div>
               <div>
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                     {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
               </div>
            </form>
            {submitMessage && (
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-600"
               >
                  {submitMessage}
               </motion.div>
            )}
         </div>
      </motion.div>
   );
}
