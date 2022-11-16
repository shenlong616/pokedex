export const settings = {
  title: "Pokédex",
  description: "Generated by create next app",
  version: "0.0.2",
  footer: "footer",

  text: {
    CloseText: [
      <span>
        <span className="text-slate-200">Click here</span>{" "}
        <span className="text-slate-400">to close the dialog</span>
      </span>,
      <span>
        <span className="text-slate-200">Or click outside</span>{" "}
        <span className="text-slate-400">the dialog to close it</span>
      </span>,
    ],
  },

  // https://pokeapi.co/
  pokeapi: {
    endpoint: {
      pokemon: "https://pokeapi.co/api/v2/pokemon",
      pokemonSpecies: "https://pokeapi.co/api/v2/pokemon-species",
    },
  },

  // https://tailwindcss.com/
  tailwindcss: {
    text: {
      color: { main: "text-slate-200", subMain: "text-slate-400" },
    },

    background: {
      color: {
        header: "bg-black",
        document: "bg-black",
        footer: "bg-black",
      },
    },

    // other
    image: "-scale-x-100 select-none",

    card: "rounded-md border border-zinc-800 bg-zinc-900",

    groupColor: {
      green: [
        "bg-green-500",
        "hover:shadow-xl hover:shadow-green-500 hover:ring-1 hover:ring-green-500 hover:ring-offset-2 hover:ring-offset-green-500",
      ],

      red: [
        "bg-red-500",
        "hover:shadow-xl hover:shadow-red-500 hover:ring-1 hover:ring-red-500 hover:ring-offset-2 hover:ring-offset-red-500",
      ],

      blue: [
        "bg-blue-500",
        "hover:shadow-xl hover:shadow-blue-500 hover:ring-1 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-blue-500",
      ],
    },
  },

  // https://headlessui.com/
  headlessui: {
    transition: {
      0: {
        enter: "duration-300",
        enterFrom: "opacity-0 translate-y-full skew-y-12",
        enterTo: "opacity-100 translate-y-0 skew-y-0",
        leave: "duration-200",
        leaveFrom: "opacity-100 translate-y-0 skew-y-0",
        leaveTo: "opacity-0 translate-y-full skew-y-12",
      },
      1: {
        enter: "duration-300",
        enterFrom: "opacity-0 -translate-y-3",
        enterTo: "opacity-100 translate-y-0",
        leave: "duration-200",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 -translate-y-5",
      },
      2: {
        enter: "duration-75",
        enterFrom: "opacity-0 backdrop-blur-none",
        enterTo: "opacity-100 backdrop-blur",
        leave: "duration-75",
        leaveFrom: "opacity-100 backdrop-blur",
        leaveTo: "opacity-0 backdrop-blur-none",
      },
    },
  },

  // https://www.chartjs.org/docs/latest/charts/radar.html
  chart: {
    animation: false,
    normalized: true,
    borderWidth: 1,
    pointStyle: "cross",
    pointRadius: 3,
    pointHoverRadius: 3,
    backgroundColor: "rgb(39 39 42 / 30%)", // bg-zinc-800
    borderColor: "rgb(63 63 70)", // border-zinc-700
    pointBorderColor: "rgb(248 250 252)", // text-slate-50
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          callback: () => undefined,
        },
      },
    },
  },

  // https://www.npmjs.com/package/table
  table: {
    // https://www.npmjs.com/package/ascii-table
    border: {
      topBody: "-",
      topJoin: "-",
      topLeft: ".",
      topRight: ".",

      bottomBody: "-",
      bottomJoin: "-",
      bottomLeft: "˙",
      bottomRight: "˙",

      bodyLeft: "|",
      bodyRight: "|",
      bodyJoin: "|",

      joinBody: "-",
      joinLeft: "|",
      joinRight: "|",
      joinJoin: "-",
    },

    // https://github.com/gajus/table#configdrawhorizontalline
    drawHorizontalLine: (lineIndex, rowCount) => {
      return lineIndex === 0 || lineIndex === rowCount;
    },
  },

  // https://swr.vercel.app/
  swr: {
    // https://swr.vercel.app/docs/getting-started#quick-start
    fetcher: (...args) => fetch(...args).then((res) => res.json()),
  },

  // https://uiwjs.github.io/react-codemirror/
  codemirror: {
    placeholder: "Nứng loz hay j mà xóa hết nội dung của ng ta!?",
    height: "400px",
    width: "100%",
    // https://uiwjs.github.io/react-codemirror/#/extensions/basic-setup
    basicSetup: {
      lineNumbers: false,
      foldGutter: false,
    },
  },
};
