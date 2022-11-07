export const settings = {
  api: "https://pokeapi.co/api/v2",
  title: "Pokédex",
  description: "Generated by create next app",
  version: "0.0.2",
  footer: "footer",

  text: {
    CloseButtonText: [
      "Click here to close the dialog.",
      "Or click outside the dialog to close.",
    ],
  },

  // https://tailwindcss.com/
  tailwindcss: {
    text: {
      color: { 0: "text-slate-200", 1: "text-slate-400" },
    },

    background: {
      color: {
        header: "bg-black",
        document: "bg-black",
        footer: "bg-black",
        card: "bg-zinc-900",
        dialog: "bg-zinc-900",
      },
    },

    border: {
      width: { card: "border", dialog: "border" },
      color: { card: "border-zinc-800", dialog: "border-zinc-800" },
    },

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
        enterFrom: "opacity-0 scale-75",
        enterTo: "opacity-100 scale-100",
        leave: "duration-300",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-50",
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
    pointBorderColor: "rgb(241 245 249)", // text-slate-100
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
};
