/**
 * 不同路由希望像多页面一样能切换到不同的标题
 */
import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = title;
  }, []);

  return;
};

export default useTitle;

// 例如：
// const Home = () => {
//   useTitle('hooks hooks');
//   return (
//     <div className="App"></div>
//   );
// }