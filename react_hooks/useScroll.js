import { useState, useEffect } from "react";

const useScroll = scrollRef => {
  const [pos, setpos] = useState([0, 0]);

  const handleScroll = e => {
    setpos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
  };

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", handleScroll, false);
    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return pos;
};

export default useScroll;

// 例如：
// const Home = () => {
//   const scrollRef = useRef(null);
//   const [x, y] = useScroll(scrollRef);

//   return (
//     <div className="App">
//       <div
//         ref={scrollRef}
//         style={{
//           width: 200,
//           height: 200,
//           overflow: "auto",
//           background: "#ccc"
//         }}
//       >
//         <div style={{ width: 500, height: 600 }}>inner</div>
//       </div>
//       x: {x}
//       <br />
//       y: {y}
//     </div>
//   );
// }