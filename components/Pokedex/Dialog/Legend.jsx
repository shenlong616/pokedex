import UI from "../../UI";

export default function ({ data }) {
  return (
    <legend className="flex flex-col text-center">
      <UI.Image>
        <img
          src={
            data.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={data.name}
        />
      </UI.Image>
    </legend>
  );
}
