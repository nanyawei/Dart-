import { useEffect, useRef, useState } from "react";

const useBackState = initState => {
  const [state, setState] = useState(initState);

  let isUpdate = useRef();

  const setBackState = (state, cb) => {
    setState(prev => {
      const next = typeof state === "function" ? state(prev) : state;
      isUpdate.current = cb(next, prev);
      return next;
    });
  };

  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current();
    }
  });

  return [state, setBackState];
};

export default useBackState;

// 例如：
// const Home = () => {
//   const [count, setCount] = useBackState(0);
//   const handleClick = () =>
//     setCount(count + 1, (next, prev) => {
//       console.log(next, prev);
//     });

//   return (
//     <div className="App">
//       <button onClick={handleClick}> + {count} </button>
//     </div>
//   );
// }
