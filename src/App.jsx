import { useState } from "react";

export default function App() {
  let [op1, setOp1] = useState("");
  let [result, setResult] = useState(0);

  const handleClick_1 = () => {
    setOp1((op1 += "1"));
  };
  const handleClick_2 = () => {
    setOp1((op1 += "2"));
  };
  const handleClick_3 = () => {
    setOp1((op1 += "3"));
  };
  const handleClick_4 = () => {
    setOp1((op1 += "4"));
  };
  const handleClick_5 = () => {
    setOp1((op1 += "5"));
  };
  const handleClick_6 = () => {
    setOp1((op1 += "6"));
  };
  const handleClick_7 = () => {
    setOp1((op1 += "7"));
  };
  const handleClick_8 = () => {
    setOp1((op1 += "8"));
  };
  const handleClick_9 = () => {
    setOp1((op1 += "9"));
  };
  const handleClick_0 = () => {
    setOp1((op1 += "0"));
  };
  const handleClick_dot = () => {
    setOp1((op1 += "."));
  };
  const handleClickAc = () => {
    setOp1("");
    setResult(0);
  };

  const handleClickOperatorAdd = () => {
    setOp1((op1 += "+"));
  };
  const handleClickOperatorSub = () => {
    setOp1((op1 += "-"));
  };
  const handleClickOperatorMul = () => {
    setOp1((op1 += "*"));
  };
  const handleClickOperatorDiv = () => {
    setOp1((op1 += "/"));
  };

  const handleClickResult = () => {
    setResult(eval(op1));
  };

  return (
    <div className="h-screen bg-gray-700 flex justify-center items-center">
      <div className="lg : main bg-gray-900 h-5/6 w-1/5 rounded-3xl p-1 sm: h-screen w-screen rounded-none">
        <div className="diplay-sec h-2/5 w-full text-white flex justify-end items-end flex-col">
          <h1 className="w-full h-1/4 text-right px-3 text-4xl text-gray-600 font-semibold">
            {op1}
          </h1>
          <p className="w-full h-1/4 text-right px-5 text-6xl">{result}</p>
        </div>

        <div className="buttunLis h-3/5 text-white flex justify-center items-center flex-col">
          <div className="row-1 h-1/6 w-full flex justify-center items-center my-1">
            <button
              onClick={handleClickAc}
              className="h-full w-1/5 mx-2 rounded-full bg-white text-black text-2xl font-medium"
            >
              AC
            </button>
            <button className="h-full w-1/5 mx-2 rounded-full bg-white text-black text-2xl font-medium">
              +/-
            </button>
            <button className="h-full w-1/5 mx-2 rounded-full bg-white text-black text-2xl font-medium">
              %
            </button>
            <button
              onClick={handleClickOperatorDiv}
              className="h-full w-1/5 mx-2 rounded-full bg-amber-500 text-white text-2xl font-medium"
            >
              /
            </button>
          </div>
          <div className="row-2 h-1/6 w-full flex justify-center items-center my-1">
            <button
              onClick={handleClick_7}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              7
            </button>
            <button
              onClick={handleClick_8}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              8
            </button>
            <button
              onClick={handleClick_9}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              9
            </button>
            <button
              onClick={handleClickOperatorMul}
              className="h-full w-1/5 mx-2 rounded-full bg-amber-500 text-white text-2xl font-medium"
            >
              *
            </button>
          </div>
          <div className="row-3 h-1/6 w-full flex justify-center items-center my-1">
            <button
              onClick={handleClick_4}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              4
            </button>
            <button
              onClick={handleClick_5}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              5
            </button>
            <button
              onClick={handleClick_6}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              6
            </button>
            <button
              onClick={handleClickOperatorSub}
              className="h-full w-1/5 mx-2 rounded-full bg-amber-500 text-white text-2xl font-medium"
            >
              -
            </button>
          </div>
          <div className="row-4 h-1/6 w-full flex justify-center items-center my-1">
            <button
              onClick={handleClick_1}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              1
            </button>
            <button
              onClick={handleClick_2}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              2
            </button>
            <button
              onClick={handleClick_3}
              className="h-full w-1/5 mx-2 rounded-full bg-zinc-600 text-white text-2xl font-medium"
            >
              3
            </button>
            <button
              onClick={handleClickOperatorAdd}
              className="h-full w-1/5 mx-2 rounded-full bg-amber-500 text-white text-2xl font-medium"
            >
              +
            </button>
          </div>
          <div className="row-5 h-1/6 w-full flex justify-center items-center my-1">
            <button
              onClick={handleClick_0}
              className="h-full w-2/5 rounded-full bg-zinc-600 text-white mx-4 text-2xl font-medium"
            >
              0
            </button>
            <button
              onClick={handleClick_dot}
              className="h-full w-1/5 rounded-full bg-zinc-600 text-white mx-2 text-2xl font-medium"
            >
              .
            </button>
            <button
              onClick={handleClickResult}
              className="h-full w-1/5 rounded-full mx-2 bg-amber-500 text-white text-2xl font-medium"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
