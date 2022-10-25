import Image from "next/image";
import { useState } from "react";
import Pokedex from "pokedex-promise-v2";
import Stat from "./components/Stat";
import clsx from "clsx";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { settings } from "../../pokedex.config";
import { Transition } from "@headlessui/react";

export default function () {
  const [state, setState] = useState({
    // boolean: false,
    // data: { count: {} },
    render: [],
    index: 1,
  });

  // useEffect(() => {
  //   new Pokedex().getPokemonsList().then((value) =>
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         boolean: true,
  //         data: { ...prevState.data, count: value.count },
  //       };
  //     })
  //   );
  // }, []);

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

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
                    const { id, stats, sprites, species, name } = response;

                    const array = [
                      stats[0].base_stat,
                      stats[1].base_stat,
                      stats[2].base_stat,
                    ];

                    const getHighestElement = array.findIndex(
                      (element) => element === Math.max(...array)
                    );

                    const totalArray = array.reduce((a, b) => a + b, 0);

                    setState((prevState) => {
                      return {
                        ...prevState,
                        index: prevState.index + 1,
                        render: [
                          ...prevState.render,
                          <Transition
                            key={id}
                            show={true}
                            appear
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0 translate-y-2/3"
                            enterTo="opacity-100 translate-y-0"
                          >
                            <div
                              className={clsx(
                                [
                                  "grid scale-90 cursor-pointer grid-cols-2 rounded-md border border-zinc-700 bg-zinc-800 p-1 transition duration-150 ease-in-out hover:scale-100",
                                ],
                                {
                                  "hover:shadow-xl hover:shadow-green-500":
                                    getHighestElement === 0,
                                },
                                {
                                  "hover:shadow-xl hover:shadow-red-500":
                                    getHighestElement === 1,
                                },
                                {
                                  "hover:shadow-xl hover:shadow-blue-500":
                                    getHighestElement === 2,
                                }
                              )}
                            >
                              <Image
                                src={sprites.front_default}
                                width={"100%"}
                                height={"100%"}
                                alt={species.name}
                                // onLoadingComplete={() => {}}
                              />
                              <div className="self-center">
                                <Stat>
                                  {[
                                    array[0],
                                    "bg-green-500",
                                    (stats[0].base_stat / totalArray) * 100,
                                  ]}
                                </Stat>
                                <div className="my-0.5">
                                  <Stat>
                                    {[
                                      array[1],
                                      "bg-red-500",
                                      (stats[1].base_stat / totalArray) * 100,
                                    ]}
                                  </Stat>
                                </div>
                                <Stat>
                                  {[
                                    array[2],
                                    "bg-blue-500",
                                    (stats[2].base_stat / totalArray) * 100,
                                  ]}
                                </Stat>
                              </div>
                            </div>
                            <small className="font-mono font-medium">
                              {name}
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
