import React from "react";
import Heading from "../Heading";

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to choose a prefect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero vero dolorum itaque ducimus perferendis deleniti adipisci quaerat corporis ipsa, distinctio quia eveniet nihil accusantium atque dolor et, labore saepe?",
    image: Img1,
    published: "Jan 20 2025 by Tom",
    aosDelay: "0",
  },
  {
    id: 2,
    title: "How to choose a prefect gadget",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero vero dolorum itaque ducimus perferendis deleniti adipisci quaerat corporis ipsa, distinctio quia eveniet nihil accusantium atque dolor et, labore saepe?",
    image: Img2,
    published: "Jan 20 2025 by Tom",
    aosDelay: "200",
  },
  {
    id: 3,
    title: "How to choose a prefect Vr headset",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero vero dolorum itaque ducimus perferendis deleniti adipisci quaerat corporis ipsa, distinctio quia eveniet nihil accusantium atque dolor et, labore saepe?",
    image: Img3,
    published: "Jan 20 2025 by Tom",
    aosDelay: "400",
  },
];

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* heading section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {BlogData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="bg-whit dark:bg-gray-900"
            >
              {/* img section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* text content */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
