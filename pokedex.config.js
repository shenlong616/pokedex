export const settings = {
  title: "Pokédex",
  description: "Generated by create next app",
  version: "0.0.1",
  footer: (
    <u>
      <i>footer</i>
    </u>
  ),

  // https://tailwindcss.com/
  style: {
    text: { color: { 0: "text-slate-100", 1: "text-slate-400" } },
    background: {
      header: "bg-zinc-900",
      document: "bg-zinc-900",
      footer: "bg-zinc-900",
      card: "bg-zinc-800",
      dialog: "bg-zinc-800",
      alert: "bg-black",
    },
    border: {
      card: "border border-zinc-700",
      dialog: "border border-zinc-700",
    },
    color: {
      green: {
        0: {
          0: "shadow-2xl shadow-green-500",
          1: "hover:shadow-xl hover:shadow-green-500 hover:ring-1 hover:ring-green-500 hover:ring-offset-2 hover:ring-offset-green-500",
        },
        1: "bg-green-500",
      },
      red: {
        0: {
          0: "shadow-2xl shadow-red-500",
          1: "hover:shadow-xl hover:shadow-red-500 hover:ring-1 hover:ring-red-500 hover:ring-offset-2 hover:ring-offset-red-500",
        },
        1: "bg-red-500",
      },
      blue: {
        0: {
          0: "shadow-2xl shadow-blue-500",
          1: "hover:shadow-xl hover:shadow-blue-500 hover:ring-1 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-blue-500",
        },
        1: "bg-blue-500",
      },
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
        enterFrom: "opacity-0 scale-90",
        enterTo: "opacity-100 scale-100",
        leave: "duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-75",
      },
      2: {
        enter: "duration-200",
        enterFrom: "opacity-0 backdrop-blur-none",
        enterTo: "opacity-100 backdrop-blur-2xl",
        leave: "duration-100",
        leaveFrom: "opacity-100 backdrop-blur-2xl",
        leaveTo: "opacity-0 backdrop-blur-none",
      },
    },
  },
};
