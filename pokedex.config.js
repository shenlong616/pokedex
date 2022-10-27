export const settings = {
  title: "Pokédex",
  version: "0.0.1",
  footer: (
    <u>
      <i>footer</i>
    </u>
  ),

  // https://tailwindcss.com/
  style: {
    background: {
      body: "bg-zinc-900",
      card: "bg-zinc-800",
    },
    border: {
      card: "border-zinc-700",
    },
    color: {
      green: {
        0: "shadow-xl shadow-green-500 ring-1 ring-green-500 ring-offset-2 ring-offset-green-500",
        1: "hover:shadow-xl hover:shadow-green-500 hover:ring-1 hover:ring-green-500 hover:ring-offset-2 hover:ring-offset-green-500",
      },
      red: {
        0: "shadow-xl shadow-red-500 ring-1 ring-red-500 ring-offset-2 ring-offset-red-500",
        1: "hover:shadow-xl hover:shadow-red-500 hover:ring-1 hover:ring-red-500 hover:ring-offset-2 hover:ring-offset-red-500",
      },
      blue: {
        0: "shadow-xl shadow-blue-500 ring-1 ring-blue-500 ring-offset-2 ring-offset-blue-500",
        1: "hover:shadow-xl hover:shadow-blue-500 hover:ring-1 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-blue-500",
      },
    },
  },

  // https://github.com/mkosir/react-parallax-tilt
  tilt: { tiltMaxAngleX: 6, tiltMaxAngleY: 3 },

  // https://headlessui.com/
  headlessui: {
    transition: {
      0: {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-full skew-y-12",
        enterTo: "opacity-100 translate-y-0 skew-y-0",
        leave: "ease-out duration-300",
        leaveFrom: "opacity-100 translate-y-0 skew-y-0",
        leaveTo: "opacity-0 translate-y-full skew-y-12",
      },
      1: {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-out duration-300",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-90",
      },
      2: {
        enter: "ease-out duration-200",
        enterFrom: "opacity-0 backdrop-blur-none",
        enterTo: "opacity-100 backdrop-blur-2xl",
        leave: "ease-out duration-200",
        leaveFrom: "opacity-100 backdrop-blur-2xl",
        leaveTo: "opacity-0 backdrop-blur-none",
      },
    },
  },
};
