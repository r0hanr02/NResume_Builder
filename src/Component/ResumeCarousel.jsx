import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const templates = [
  {
    id: 1,
    img: "https://d.novoresume.com/images/doc/skill-based-resume-template.png",
    name: "Modern Resume",
  },
  {
    id: 2,
    img: "https://static.resumecoach.com/assets/templates/thumbnails/en/noPhoto/munich-736x1041.webp",
    name: "Classic Resume",
  },
  {
    id: 3,
    img: "https://d.novoresume.com/images/doc/minimalist-resume-template.png",
    name: "Minimal Resume",
  },
];

const ResumeCarousel = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Choose Your <span className="text-red-600">Resume Template</span>
      </h2>

      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-lg shadow-xl "
        >
          {templates.map((template) => (
            <SwiperSlide
              key={template.id}
              className="flex flex-col items-center justify-center px-5"
            >
              <div className="overflow-hidden rounded-lg  transition-transform duration-300 hover:scale-105 flex justify-center ">
                <img
                  src={template.img}
                  alt={template.name}
                  className="h-[550px] rounded-lg"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-700">
                {template.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ResumeCarousel;
