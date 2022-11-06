// https://github.com/delbaoliveira/website/blob/main/ui/Layout.tsx#L40-L58
export default function () {
  return (
    <svg className="pointer-events-none fixed isolate z-50 h-full w-full mix-blend-color-burn">
      <filter id="pedroduarteisalegend">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1"
          numOctaves="1"
          stitchTiles="stitch"
        />
      </filter>

      <rect
        width="100%"
        height="100%"
        filter="url(#pedroduarteisalegend)"
      ></rect>
    </svg>
  );
}
