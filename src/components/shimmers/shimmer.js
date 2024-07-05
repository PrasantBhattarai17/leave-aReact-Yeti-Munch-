import logo from "./gg.png";
const Shimmer=()=>{

  return (
    <div className="flex pb-20  min-h-screen items-center justify-center opacity-70 bg-[#6129c2]">
      <div className="text-center pb-10 mb-20 space-y-4">
        <img
          src={logo}
          alt="Yeti Munch Logo"
          className="w-3/12 mx-auto"
        />

        <div className="relative flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 202.8 230.91"
            className="h-32 w-32 text-white"
          >
            <defs>
              <style>
                {`
                  .cls-2, .cls-3, .cls-4 {
                    stroke: #000;
                    stroke-miterlimit: 10;
                    stroke-width: 8px;
                  }
                  .cls-2 { fill: #54bfd3; }
                  .cls-3 { fill: none; }
                  .cls-4 { fill: #9ed453; }
                `}
              </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  d="M14.36 38.94h141.78a24.3 24.3 0 0 1 24.3 24.3v1H-9.94v-1a24.3 24.3 0 0 1 24.3-24.3z"
                  transform="rotate(-28.25 85.237 51.598)"
                  className="cls-2"
                />
                <path
                  className="cls-2"
                  d="M97.42 30.69a24 24 0 0 0-1.57-3.59C89.9 16 76.82 11.48 66.63 17S53 35.85 59 46.92a24 24 0 0 0 2.13 3.29M87.61 226.81H34.47a26.7 26.7 0 0 1-26.71-26.7v-77.05h191v77.05a26.7 26.7 0 0 1-26.71 26.7H119"
                />
                <circle cx="103.28" cy="226.81" r="4.09" fill="#9ed453" />
                <path className="cls-3" d="M7.76 153.4h105.4M122.16 153.4h17" />
                <path
                  className="cls-4"
                  d="M172.41 67.64a16.58 16.58 0 1 0-27.07 6.89l-4.86 14.74a7 7 0 0 0 4.44 8.81 7 7 0 0 0 8.81-4.44l4.86-14.74a16.56 16.56 0 0 0 13.82-11.26z"
                />
                <circle className="cls-4" cx="107.47" cy="92.97" r="13.09" />
                <circle className="cls-4" cx="185.15" cy="99.49" r="9.83" />
                <path
                  fill="#121211"
                  opacity=".2"
                  d="M5.66 125.11h195v12.5h-195"
                />
              </g>
            </g>
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white">Yeti Munch</h1>
        <p className="text-2xl font-semibold text-amber-300 leading-9 tracking-wide">
       Simmering your Selections......
        </p>
      </div>
    </div>
  );
};



export default Shimmer;
