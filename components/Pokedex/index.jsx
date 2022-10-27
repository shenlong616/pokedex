import { useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { settings } from "../../pokedex.config";
import Card from "./components/Card";
import Dialog from "./components/Dialog";

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

      <div className="grid grid-cols-2 place-items-center gap-2 text-center sm:grid-cols-4 sm:gap-2 md:grid-cols-5 md:gap-4 xl:grid-cols-8 xl:gap-3">
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
                          <div
                            key={prevState.index}
                            onClick={() => setState2(true)}
                          >
                            <Card response={response} />
                          </div>,
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
