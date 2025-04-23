import { VelocityProvider } from "../context/VelocityContext";
import IntuitiveIntro from "./IntuitiveIntro";
import HeroHeader from "./HeroHeader";
import MainDiagram from "./MainDiagram";
import { Fragment } from "react/jsx-runtime";

const LorentzianGeometry = () => {
  return (
    <VelocityProvider>
      <Fragment>
        <HeroHeader />
        <IntuitiveIntro />
        <MainDiagram />
      </Fragment>
    </VelocityProvider>
  );
};

export default LorentzianGeometry;
