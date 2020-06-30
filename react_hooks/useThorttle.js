// 节流
// function throttle (func, ms) {
//   let previous = 0;
//   return function () {
//     let now = Date.now();
//     let context = this;
//     let args = arguments;
//     if (now - previous > ms) {
//       func.apply(context, args);
//       previous = now;
//     }
//   }
// }
import { useRef, useState, useEffect } from "react";

const useThrottle = (fn, ms = 30, deps = []) => {
  let previous = useRef(0);
  let [time, setTime] = useState(ms);

  useEffect(() => {
    let now = Date.now();
    if (now - previous.current > time) {
      fn();
      previous.current = now;
    }
  }, deps);

  const cancel = () => setTime(0);

  return [cancel];
};

export default useThrottle;

// 例如：
// const Home = () => {
//   const [origin, setOrigin] = useState("");
//   const [repeat, setRepeat] = useState(origin);

//   const [cancel] = useThrottle(
//     () => {
//       setRepeat(origin);
//     },
//     3000,
//     [origin]
//   );

//   return (
//     <div className="App">
//       <input onChange={e => setOrigin(e.target.value)} />
//       <p>origin: {origin} </p>
//       <p>repeat: {repeat} </p>
//     </div>
//   );
// }