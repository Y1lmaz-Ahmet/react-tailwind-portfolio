import { MdWeb } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
export default [
  {
    title: "Responsive Design",
    description:
      "Creating websites that are viewable on devices of any size using responsive design techniques such as relative units of measure and media queries.",
    icon: <MdWeb className='w-full h-full'></MdWeb>,
  },
  {
    title: "Wireframe",
    description:
      "high-fidelity/low-fidelity design with Figma using: logos, navigation, search fields, text, buttons, images and videos",
    icon: <FaHandHoldingHeart className='w-full h-full'></FaHandHoldingHeart>,
  },
  {
    title: "Front End",
    description:
      "Creating interactive websites with HTML, CSS, Javascript and React / Vite.js",
    icon: <VscCode className='w-full h-full'></VscCode>,
  },
];
