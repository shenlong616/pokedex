import { useState } from "react";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { settings } from "../../pokedex.config";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import { Transition } from "@headlessui/react";
import useSWR from "../../hooks/useSWR";
import Style from "./components/Style";

export default function () {
  // `Card` state
  const [state1, setState1] = useState({
    render: [],
    index: 1,
  });

  // `Dialog` state
  const [state2, setState2] = useState({
    show: false,
    data: {},
  });

  // SWR
  const { data: p0kemon } = useSWR(`${settings.api}/pokemon`);
  const { data: pokemon } = useSWR(`${settings.api}/pokemon/${state1.index}`);

  return (
    <>
      <Head>
        <title>{`${settings.title} v${settings.version}`}</title>
        <meta name="description" content={settings.description} />
      </Head>

      <Dialog
        onClose={() =>
          setState2((prevState) => {
            return { ...prevState, show: false };
          })
        }
        show={state2.show}
        data={state2.data}
      />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-3 xl:grid-cols-6 xl:gap-3">
        {state1.render}
      </div>

      <InView>
        {({ inView, ref }) => {
          if (pokemon && inView && state1.index < p0kemon?.count + 1) {
            const array = [
              pokemon.stats[0].base_stat,
              pokemon.stats[1].base_stat,
              pokemon.stats[2].base_stat,
            ];

            setState1((prevState) => {
              return {
                ...prevState,
                index: prevState.index + 1,
                render: prevState.render.concat([
                  <Transition
                    show={true}
                    appear
                    enter={settings.headlessui.transition[0].enter}
                    enterFrom={settings.headlessui.transition[0].enterFrom}
                    enterTo={settings.headlessui.transition[0].enterTo}
                    className="flex flex-col items-center"
                    key={prevState.index}
                  >
                    <Card
                      prop1={array.findIndex(
                        (element) => element === Math.max(...array)
                      )}
                      onClick={() =>
                        setState2((prevState) => {
                          return {
                            ...prevState,
                            show: true,
                            data: pokemon,
                          };
                        })
                      }
                      data={pokemon}
                    />

                    <Style.pokemonName>{pokemon.name}</Style.pokemonName>
                  </Transition>,
                ]),
              };
            });
          }
          return <div ref={ref}></div>;
        }}
      </InView>
    </>
  );
}
