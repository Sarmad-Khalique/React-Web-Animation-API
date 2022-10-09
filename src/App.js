import Pickachu from "./assets/pickachu.gif";
import Tree from "./assets/Tree.png";
import "./App.css";

import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, getAnimation: treeAnimation } = useWebAnimations({
    keyframes: {
      transform: "translateX(100%)",
    },

    animationOptions: {
      duration: 800, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
    },
  });
  const { ref: ref2, getAnimation: pickachuAnimation } = useWebAnimations({
    keyframes: {
      transform: "translateX(-100%)",
    },

    animationOptions: {
      duration: 700, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
    },
  });

  const increaseSpeed = () => {
    const animation_1 = treeAnimation();
    const animation_2 = pickachuAnimation();
    animation_1.updatePlaybackRate(animation_1.playbackRate * 1.125);
    animation_2.updatePlaybackRate(animation_2.playbackRate * 1.25);
  };
  const decreaseSpeed = () => {
    const animation_1 = treeAnimation();
    const animation_2 = pickachuAnimation();
    animation_1.updatePlaybackRate(animation_1.playbackRate / 1.25);
    animation_2.updatePlaybackRate(animation_2.playbackRate / 1.125);
  };

  return (
    <div className="App">
      <div className="button-group">
        <div className="increase-button">
          <button onClick={() => increaseSpeed()}>
            Click me to help pickachu run faster
          </button>
        </div>
        <div className="increase-button">
          <button onClick={() => decreaseSpeed()}>
            Click me to slow down pickachu
          </button>
        </div>
      </div>
      <div id="tree-container" ref={ref}>
        <img className="tree-image" src={Tree} alt="tree" />
        <img className="tree-image" src={Tree} alt="tree" />
      </div>
      <img id="pickachu" ref={ref2} src={Pickachu} alt="pickachu" />
    </div>
  );
}

export default App;
