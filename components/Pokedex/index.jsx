import { useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { settings } from "../../pokedex.config";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import { Transition } from "@headlessui/react";

export default function () {
  const [state, setState] = useState({
    render: [],
    index: 1,
  });

  // Dialog
  const [state2, setState2] = useState(false);

  return (
    <>
      <Head>
        <title>{`${settings.title} v${settings.version}`}</title>
        <meta name="description" content={settings.description} />
      </Head>

      <Dialog prop1={state2} prop2={() => setState2(false)} />

      <div className="grid grid-cols-2 place-items-center gap-3 text-center sm:grid-cols-3 sm:gap-4 md:grid-cols-5 md:gap-5 xl:grid-cols-7 xl:gap-5">
        {state.render}
      </div>

      <InView>
        {({ inView, ref }) => {
          if (inView) {
            (async () => {
              await new Pokedex().getPokemonByName(
                state.index,
                (response, error) => {
                  if (!error) {
                    setState((prevState) => {
                      return {
                        ...prevState,
                        index: prevState.index + 1,
                        render: [
                          ...prevState.render,
                          <Transition
                            key={prevState.index}
                            show={true}
                            appear
                            enter={settings.headlessui.transition[0].enter}
                            enterFrom={
                              settings.headlessui.transition[0].enterFrom
                            }
                            enterTo={settings.headlessui.transition[0].enterTo}
                          >
                            <div onClick={() => setState2(true)}>
                              <Card response={response} />
                            </div>
                            <small className="select-all font-mono font-medium">
                              {response.name}
                            </small>
                          </Transition>,
                        ],
                      };
                    });
                  }
                }
              );
            })();
          }
          return <div ref={ref}></div>; // thang loz nay se quyet dinh co nen render hay ko
        }}
      </InView>
    </>
  );
}
