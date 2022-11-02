import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";

export default function ({ prop1, prop2, prop3, data }) {
  // console.log(data);

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
          <div className="flex min-h-full items-center justify-center px-4 text-center">
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
                    "w-full max-w-xl transform overflow-hidden rounded-xl px-4 text-left align-middle",
                  ],
                  [
                    settings.style.background.dialog,
                    settings.style.border.dialog,
                  ],
                  {
                    [settings.style.color.green[0][0]]: prop3 === 0,
                  },
                  {
                    [settings.style.color.red[0][0]]: prop3 === 1,
                  },
                  {
                    [settings.style.color.blue[0][0]]: prop3 === 2,
                  }
                )}
              >
                <legend>
                  <img
                    className="-scale-x-100 select-none"
                    src={
                      data.sprites?.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt={data.name}
                  />
                </legend>
                {/* <Dialog.Title></Dialog.Title> */}
                <Dialog.Description
                  as="div"
                  className={settings.style.text.color[0]}
                >
                  <div className="text-center">
                    <h2 className="select-all text-2xl font-medium uppercase">
                      {data.name}
                    </h2>
                    <span
                      className={clsx(
                        ["select-all font-mono text-xs"],
                        [settings.style.text.color[1]]
                      )}
                    >
                      <span className="text-xs">{`#${data.id}`}</span>
                    </span>
                  </div>
                  {data.types?.map((element, index) => (
                    <span
                      key={index}
                      className={clsx(
                        ["mr-1 select-all font-mono text-xs"],
                        [settings.style.text.color[1]]
                      )}
                    >
                      {`#${element.type.name}`}
                    </span>
                  ))}
                  {/* <div
                    className={clsx(
                      [
                        "cursor-pointer text-right font-mono text-xs italic underline",
                      ],
                      [settings.style.text.color[1]]
                    )}
                    onClick={() => prop1()}
                  >
                    Close
                  </div> */}
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
