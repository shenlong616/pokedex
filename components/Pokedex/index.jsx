import { useState } from "react";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { settings } from "../../pokedex.config";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import { Transition } from "@headlessui/react";
import usePokemon from "../../hooks/usePokemon";
import Title from "./components/ui/Title";

export default function () {
  // Card state
  const [state1, setState1] = useState({
    render: [],
    index: 1,
  });

  // Dialog state
  const [state2, setState2] = useState({
    boolean: false,
    data: {},
  });

  const { data } = usePokemon(state1.index);

  return (
    <>
      <Head>
        <title>{`${settings.title} v${settings.version}`}</title>
        <meta name="description" content={settings.description} />
      </Head>

      <Dialog
        prop1={() =>
          setState2((prevState) => {
            return { ...prevState, boolean: false };
          })
        }
        prop2={state2.boolean}
        data={state2.data}
      />

      <div className="grid grid-cols-2 place-items-center gap-2 text-center sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-3 xl:grid-cols-6 xl:gap-3">
        {state1.render}
      </div>

      <InView>
        {({ inView, ref }) => {
          if (data && inView) {
            const array = [
              data.stats[0].base_stat,
              data.stats[1].base_stat,
              data.stats[2].base_stat,
            ];

            setState1((prevState) => {
              return {
                ...prevState,
                index: prevState.index + 1,
                render: prevState.render.concat([
                  <Transition
                    key={prevState.index}
                    show={true}
                    appear
                    enter={settings.headlessui.transition[0].enter}
                    enterFrom={settings.headlessui.transition[0].enterFrom}
                    enterTo={settings.headlessui.transition[0].enterTo}
                  >
                    <div
                      onClick={() =>
                        setState2((prevState) => {
                          return {
                            ...prevState,
                            boolean: true,
                            data: data,
                          };
                        })
                      }
                    >
                      <Card
                        prop1={array.findIndex(
                          (element) => element === Math.max(...array)
                        )}
                        data={data}
                      />
                    </div>

                    <Title>{data.name}</Title>
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
