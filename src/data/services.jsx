import { MdWeb } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
export default [
  {
    title: "Responsive Design",
    description:
      "Maak websites die zichtbaar zijn op apparaten van elk formaat met behulp van responsieve ontwerptechnieken, zoals relatieve maateenheden en mediaquery's.",
    icon: <MdWeb className='w-full h-full'></MdWeb>,
  },
  {
    title: "Wireframe",
    description:
      "high-fidelity / low-fidelity ontwerp met Figma met behulp van: logo's, navigatie, zoekvelden, tekst, knoppen, afbeeldingen en video's",
    icon: <FaHandHoldingHeart className='w-full h-full'></FaHandHoldingHeart>,
  },
  {
    title: "Front End",
    description:
      "Interactieve websites maken met HTML, CSS, Javascript en React / Vite.js",
    icon: <VscCode className='w-full h-full'></VscCode>,
  },
];
