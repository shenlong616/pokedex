import Style from "../Style";

export default function ({ data }) {
  return (
    <legend className="flex flex-col text-center">
      <Style.pokemonImage>
        <img
          src={
            data.sprites?.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={data.name}
        />
      </Style.pokemonImage>
    </legend>
  );
}
