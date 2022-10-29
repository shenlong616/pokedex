import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";
import Stat from "./Stat";
import Image from "next/image";

export default function ({ prop1, prop2, prop3 }) {
  console.log(prop3);
  const { id, name, sprites, species } = prop3;

  return (
    <Transition appear show={prop2} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={prop1}>
        <Transition.Child
          as={Fragment}
          enter={settings.headlessui.transition[2].enter}
          enterFrom={settings.headlessui.transition[2].enterFrom}
          enterTo={settings.headlessui.transition[2].enterTo}
          leave={settings.headlessui.transition[2].leave}
          leaveFrom={settings.headlessui.transition[2].leaveFrom}
          leaveTo={settings.headlessui.transition[2].leaveTo}
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter={settings.headlessui.transition[1].enter}
              enterFrom={settings.headlessui.transition[1].enterFrom}
              enterTo={settings.headlessui.transition[1].enterTo}
              leave={settings.headlessui.transition[1].leave}
              leaveFrom={settings.headlessui.transition[1].leaveFrom}
              leaveTo={settings.headlessui.transition[1].leaveTo}
            >
              <Dialog.Panel
                as="fieldset"
                className={clsx(
                  [
                    "w-full max-w-xl transform overflow-hidden rounded-lg p-6 text-left align-middle",
                  ],
                  // test
                  [settings.style.color.green[0][0]],
                  [
                    settings.style.background.dialog,
                    settings.style.border.dialog,
                  ]
                )}
              >
                <legend>
                  <Image
                    width={"50%"}
                    height={"50%"}
                    className="-scale-x-100 select-none"
                    src={
                      sprites?.versions["generation-v"]["black-white"].animated
                        .front_default
                    }
                    alt={species?.name}
                  />
                </legend>
                {/* <Dialog.Title></Dialog.Title> */}
                <Dialog.Description
                  as="div"
                  className={settings.style.text.color[0]}
                >
                  <div className="text-center">
                    <h2 className="select-all text-2xl font-medium uppercase">
                      {name}
                    </h2>
                    <small
                      className={
                        (["select-all font-mono text-xs"],
                        [settings.style.text.color[1]])
                      }
                    >
                      {`#${id}`}
                    </small>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-1/4">1</div>
                    <div className="basis-2/3">
                      <Stat>{["dd", "bg-zinc-500", "10"]}</Stat>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      [
                        "cursor-pointer text-right font-mono text-xs italic underline",
                      ],
                      [settings.style.text.color[1]]
                    )}
                    onClick={() => prop1()}
                  >
                    Close
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
