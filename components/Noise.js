// https://github.com/delbaoliveira/website/blob/main/ui/Layout.tsx#L40-L58
export default function Noise() {
  return (
    <svg
      className="pointer-events-none fixed isolate z-50 opacity-30 mix-blend-color-burn"
      width="100%"
      height="100%"
    >
      <filter id="pedroduarteisalegend">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".9"
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
