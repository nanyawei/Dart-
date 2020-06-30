// 防抖，例如： 一直移动鼠标，鼠标最后一次操作的的时候在执行

// function debounce (func, ms) {
//   let timeout;

//   return function () {
//     let context = this;
//     let args = arguments;

//     if (timeout) clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, ms);
//   }
// }

import { useRef, useEffect } from "react";
/**
 * hook 防抖
 * @param {*} fn 回调函数
 * @param {*} ms 时间间隔
 * @param {*} deps 依赖数组项
 */
const useDebounce = (fn, ms = 30, deps = []) => {
  let timer = useRef();

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => fn(), ms);
  }, deps);

  const cancel = () => {
    clearTimeout(timer.current);
    timer = null;
  };

  return [cancel];
};
export default useDebounce;

// 例如：
// const Home = () => {
//   const [origin, setOrigin] = useState("");
//   const [repeat, setRepeat] = useState(origin);

//   const [cancel] = useDebounce(
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
