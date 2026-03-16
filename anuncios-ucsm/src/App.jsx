import { Canvas } from "@react-three/fiber";
import { WrappedCarousel } from "./features/announcement/components/Carousel";
import "./App.css";
import "./features/announcement/components/global.css";


function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <WrappedCarousel />
      </Canvas>
    </div>
  );
}

export default App;
