import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

interface ICardItemProps {
  imageSrc: string;
  altText: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText?: string;
  reverse?: boolean;
}

const CardItemRight = ({
  imageSrc,
  altText,
  subtitle,
  title,
  description,
  buttonText,
  reverse = false,
}: ICardItemProps) => {
  return (
    <section className="w-full py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 gap-4 md:gap-0">
        {/* Image position based on reverse prop */}
        <div
          className={`w-full lg:w-1/2 flex justify-center ${reverse ? 'order-1 lg:order-2 lg:ml-[-30px]' : 'order-1 lg:order-1 lg:mr-[-30px] z-10'}`}
        >
          <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover"
            alt={altText}
            src={imageSrc}
            width={1440}
            height={627}
          />
        </div>

        {/* Content position based on reverse prop */}
        <div className={`w-full lg:w-1/2 bg-[#FDF6EF] border-none flex justify-center ${reverse ? 'order-2 lg:order-1' : ''}`}>
          <div className="p-6 sm:p-8 md:p-12 lg:px-24 lg:py-[200px] text-center lg:text-left">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <p className="opacity-40 font-desktop-title-label text-[#636362] tracking-wide text-sm sm:text-base md:text-lg">
                  {subtitle}
                </p>
                <h2 className="font-desktop-title-headline-4 text-black text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight text-uppercase">
                  {title}
                </h2>
              </div>

              <p className="font-desktop-body-body-copy-1 text-[#636362] text-sm sm:text-base md:text-[16px] leading-7">
                {description}
              </p>

              {buttonText && <div className="mt-4 flex justify-center lg:justify-start">
                <button className="p-0 h-auto flex items-center gap-4 hover:bg-transparent">
                  <span className="font-desktop-button-button-text text-black text-sm sm:text-base md:text-lg">
                    {buttonText}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-solid border-[#ff0000]">
                    <ArrowRightIcon className="w-5 h-5 text-black" />
                  </div>
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItemRight;
