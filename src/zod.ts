import { z, ZodType } from "zod";
import { Inputs } from "./pages/Contact";

export const ContactFormSchema: ZodType<Inputs> = z.object({
   name: z.string().nonempty({ message: "Name is required" }),
   email: z.string().email("Provide a valid email"),
   subject: z.string().nonempty({ message: "Subject is required" }),
   message: z.string().nonempty({ message: "Message is required" }),
});
