import { cn } from "@/lib/utils";

interface FireHeadlineProps {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

const FireHeadline = ({
  title,
  subtitle = "Promotion of all social networks",
  image = "https://storage.perfectcdn.com/l1n66r/83yg7a5ga7k5j8xw.webp",
  className,
}: FireHeadlineProps) => {
  return (
    <div className={cn("relative flex flex-col items-center w-full", className)}>
      {/* Title */}
      <h2 className="font-bold text-sm sm:text-xl md:text-3xl text-center z-10 px-4">
        {title}
      </h2>

      {/* Fire Image Container - independent width */}
      <div className="relative w-full flex justify-center -mt-6 md:-mt-14">
        <img
          src={image}
          alt="fire animation"
          className="
      w-full 
      max-w-4xl 
      h-10 sm:h-14 md:h-20 
      object-cover 
      object-top sm:object-center 
      pointer-events-none 
      select-none
    "
        />
      </div>


      {/* Subtitle */}
      {subtitle && (
        <p className="text-[#606F85] text-sm sm:text-base md:text-xl text-center mt-4 px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default FireHeadline;
