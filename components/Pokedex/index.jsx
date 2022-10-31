import { useState } from "react";
import Pokedex from "pokedex-promise-v2";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { settings } from "../../pokedex.config";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import { Transition } from "@headlessui/react";

export default function () {
  // Card
  const [state1, setState1] = useState({
    render: [],
    index: 1,
  });

  // Dialog
  const [state2, setState2] = useState({
    boolean: false,
    response: {},
    prop3: null,
  });

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
        prop3={state2.prop3}
        response={state2.response}
      />

      <div className="grid grid-cols-2 place-items-center gap-3 text-center sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 xl:grid-cols-6 xl:gap-5">
        {state1.render}
      </div>

      <InView>
        {({ inView, ref }) => {
          if (inView) {
            (async () => {
              await new Pokedex().getPokemonByName(
                state1.index,
                (response, error) => {
                  if (!error) {
                    const array = [
                      response.stats[0].base_stat,
                      response.stats[1].base_stat,
                      response.stats[2].base_stat,
                    ];

                    const getHighestElement = array.findIndex(
                      (element) => element === Math.max(...array)
                    );

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
                            enterFrom={
                              settings.headlessui.transition[0].enterFrom
                            }
                            enterTo={settings.headlessui.transition[0].enterTo}
                          >
                            {/* Dialog */}
                            <div
                              onClick={() =>
                                setState2((prevState) => {
                                  return {
                                    ...prevState,
                                    boolean: true,
                                    response: response,
                                    prop3: getHighestElement,
                                  };
                                })
                              }
                            >
                              <Card
                                prop1={getHighestElement}
                                response={response}
                              />
                            </div>

                            <span className="select-all font-mono text-xs font-medium">
                              {response.name}
                            </span>
                          </Transition>,
                        ]),
                      };
                    });
                  }
                }
              );
            })();
          }
          return <div ref={ref}></div>; // khi dang scroll ma gap thang loz nay, thi render them noi dung
        }}
      </InView>
    </>
  );
}
