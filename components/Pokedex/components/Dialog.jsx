import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";

export default function ({ prop1, prop2, prop3 }) {
  const { id, name } = prop3;

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
                    "w-full max-w-md transform overflow-hidden rounded-md border p-6 text-left align-middle shadow-xl transition-all",
                  ],
                  [
                    settings.style.background.dialog,
                    settings.style.border.dialog,
                  ]
                )}
              >
                <legend className="font-medium">
                  <span
                    className={clsx(
                      ["select-all font-mono text-xs"],
                      [settings.style.text.color[1]]
                    )}
                  >
                    {`${id}`}/
                  </span>{" "}
                  <span
                    className={clsx(
                      ["select-all text-xl uppercase"],
                      [settings.style.text.color[0]]
                    )}
                  >
                    {name}
                  </span>
                </legend>
                {/* <Dialog.Title></Dialog.Title> */}
                <Dialog.Description
                  className={clsx(
                    ["mt-2 text-sm"],
                    [settings.style.text.color[1]]
                  )}
                >
                  description
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
