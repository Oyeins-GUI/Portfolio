import pfp2 from "../assets/pfp2.webp";

export default function Profile({ type }: { type: "sm" | "lg" }) {
   if (type === "sm")
      return (
         <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
               src={pfp2}
               alt="profile"
               className="border-2 border-white/20 w-full block object-cover"
               srcSet={pfp2}
               loading="lazy"
               decoding="async"
               fetchPriority="high"
            />
         </div>
      );

   return (
      <div className="w-48 h-48 rounded-full overflow-hidden">
         <img
            src={pfp2}
            alt="profile"
            className="border-4 border-white/20 w-full block object-cover"
            srcSet={pfp2}
            loading="lazy"
            decoding="async"
            fetchPriority="high"
         />
      </div>
   );
}
