import RouletteJpeg from "./Images/roulette.jpeg";

import { useEffect, useState } from "react";

import "./Roulette.css";
export function Roulette() {
  const [spin, setSpin] = useState("");
  const [rotateDegrees, setRotateDegrees] = useState(0);

  const [modal, setModal] = useState(false);

  let timer: any;
  function handleStartSpin() {
    setSpin("");
    setTimeout(() => {
      setSpin("spin-roulette");
      const degrees = Math.floor(Math.random() * 9000 + 9000);
      setRotateDegrees(degrees);
    }, 50);

    setTimeout(() => {
      setModal(true);
    }, 7000);
  }
  function closeModal() {
    setModal(false);
  }

  useEffect(() => {
    document.title = "Ruleta";
    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  });
  const style = { "--spin-deg": `${rotateDegrees}deg` } as React.CSSProperties;
  return (
    <div className="h-screen w-screen relative bg-white">
      {modal ? (
        <div
          onClick={closeModal}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center z-20 w-64 h-36 bg-white border-2 border-black"
        >
          <p className="text-5xl"> DULCES! </p>
        </div>
      ) : (
        <></>
      )}
      <div className="pt-4 flex-col flex items-center justify-center">
        <div className="relative">
          <img className={spin} style={style} src={RouletteJpeg} />
          <div className="absolute z-10 up-arrow -right-12 top-1/2 -translate-y-1/2 -rotate-90 border-b-gray-700"></div>
        </div>
        <div className="mt-2 z-10 text-2xl">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-full bg-green-300"></div>
            <p> Dulces (99.99%) </p>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-full bg-orange-200"></div>
            <p> Peluche (0.01%) </p>
          </div>
        </div>
        <button
          className="mt-4 px-8 py-2 z-10 text-3xl bg-red-600 text-stone-100"
          onClick={handleStartSpin}
        >
          GIRAR
        </button>
      </div>
    </div>
  );
}
