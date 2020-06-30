// 组件重新渲染不得不更新state，但有时业务更新state是没有必要的，不能仅仅为了让组件会重新渲染而强制让一个state做无意义的更新，所以自定义一个更新的kooks
import { useState } from "react";

const useUpdate = () => {
  const [, setFlag] = useState();
  const update = () => {
    setFlag(Date.now());
  };
  return update;
};

export default useUpdate;

// 例如：
// const Home = () => {
//   const update = useUpdate;
//   return <div>
//     {Date.now()}
//     <div>
//       <button onClick={update}>update</button>
//     </div>
//   </div>
// }