import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./myProjects.scss";

const Projects = [
  {
    id: 1,
    title: "Real Estate Website",
    img: "https://cdn.pixabay.com/photo/2017/12/03/22/11/winter-landscape-2995987_640.jpg",
    docs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates debitis earum illum delectus eaque et voluptatum aut? Voluptate suscipit ipsam sequi odio exercitationem vero dicta eaque ratione possimus voluptas.",
    url: "https://github.com/Jinmoyee/Real-Estate-Website",
  },
  {
    id: 2,
    title: "ECommerce Dashboard",
    img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    docs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates debitis earum illum delectus eaque et voluptatum aut? Voluptate suscipit ipsam sequi odio exercitationem vero dicta eaque ratione possimus voluptas.",
    url: "https://github.com/Jinmoyee/ECommerce-Dashboard",
  },
  {
    id: 3,
    title: "Shopping Website",
    img: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_640.jpg",
    docs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates debitis earum illum delectus eaque et voluptatum aut? Voluptate suscipit ipsam sequi odio exercitationem vero dicta eaque ratione possimus voluptas.",
    url: "https://github.com/Jinmoyee/Shopping-Website",
  },
  {
    id: 4,
    title: "Blog Website",
    img: "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_640.jpg",
    docs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates debitis earum illum delectus eaque et voluptatum aut? Voluptate suscipit ipsam sequi odio exercitationem vero dicta eaque ratione possimus voluptas.",
    url: "https://github.com/Jinmoyee/Blog-Website",
  },
  {
    id: 5,
    title: "Social Media",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
    docs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates debitis earum illum delectus eaque et voluptatum aut? Voluptate suscipit ipsam sequi odio exercitationem vero dicta eaque ratione possimus voluptas.",
    url: "https://github.com/Jinmoyee/Social-Media",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="section">
      <div className="section-data">
        <motion.div className="image-section" ref={ref}>
          <img src={item.img} alt="" />
        </motion.div>
        <div className="title-section">
          <motion.div className="motion-div" style={{ y }}>
            <h2>{item.title}</h2>
            <p className="text-lg">{item.docs}</p>
            <div className="button-tag">
              <motion.button
                whileHover={{ backgroundColor: "#FFA500" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(item.url, "_blank")}
              >
                See Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default function MyProjects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="heading" ref={ref}>
      <div className="title-tag">
        <h1>
          My <span>Projects</span>
        </h1>
        <motion.div
          style={{
            scaleX: scaleX,
          }}
        ></motion.div>
      </div>
      {Projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
