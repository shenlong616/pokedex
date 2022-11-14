import { settings } from "../../../pokedex.config";

export default function ({ data }) {
  return (
    <legend className="flex flex-col text-center">
      <img
        src={
          data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt={data.name}
        className={settings.tailwindcss.image}
      />
    </legend>
  );
}
