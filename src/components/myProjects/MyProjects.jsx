import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./myProjects.scss";
import Estate from "../../assets/images/Real Estate.png";
import Chat from "../../assets/images/Chat App.png";
import Juice from "../../assets/images/Juice Banner.png";
import Shopping from "../../assets/images/HTML-CSS Shopping Website.png";

const Projects = [
  {
    id: 1,
    title: "Real Estate Website using MERN",
    img: Estate,
    docs: "It is an online platform built using the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, offering a seamless shopping experience. With its robust backend and dynamic frontend, it enables users to browse, purchase, and manage products effortlessly, embodying the essence of modern ecommerce solutions.",
    url: "https://jt-estate.onrender.com",
  },
  {
    id: 2,
    title: "Chat Application using MERN",
    img: Chat,
    docs: "It is a real-time messaging platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can engage in instant communication, create chat rooms, and share multimedia seamlessly. With its responsive design and robust backend, MERN Chat Website offers a dynamic and interactive chatting experience.",
    url: "https://real-time-chat-app-h84z.onrender.com",
  },
  {
    id: 3,
    title: "HTML & CSS Shopping Website",
    img: Shopping,
    docs: "It is a user-friendly online platform designed with intuitive navigation and visually appealing layouts. Seamlessly integrating HTML for content structure and CSS for styling, it offers a delightful shopping experience, showcasing products in an organized and aesthetically pleasing manner. With its responsive design, this website ensures accessibility across various devices, enhancing user engagement and satisfaction.",
    url: "https://jinmoyee.github.io/Blog-HTML-AND-CSS-Website/",
  },
  {
    id: 4,
    title: "HTML & CSS Blog Website",
    img: "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_640.jpg",
    docs: "It is your ultimate destination for all things web development. Whether you're a beginner or an expert, discover insightful tutorials, tips, and tricks to enhance your HTML and CSS skills. Stay updated with the latest trends and techniques to create stunning websites.",
    url: "https://jinmoyee.github.io/Blog-HTML-AND-CSS-Website/",
  },
  {
    id: 5,
    title: "HTML and CSS Restaurant Website",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
    docs: "It is a dynamic web platform offering an immersive dining experience. With seamless navigation and visually captivating design, it combines the artistry of HTML and CSS to showcase culinary delights and engage visitors.",
    url: "https://jinmoyee.github.io/Restaurant-HTML-AND-CSS-Website/",
  },
  {
    id: 6,
    title: "HTML and CSS Parallax Website",
    img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
    docs: "It is a dynamic platform that employs parallax scrolling effects achieved through HTML and CSS. It offers an immersive browsing experience, where background images move at different speeds to create a sense of depth. This website showcases the synergy between HTML and CSS to craft visually captivating and interactive web pages.",
    url: "https://jinmoyee.github.io/Parallax-HTML-AND-CSS-Website/",
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
