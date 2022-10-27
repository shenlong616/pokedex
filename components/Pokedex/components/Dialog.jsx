import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";

export default function ({ prop1, prop2 }) {
  return (
    // https://headlessui.com/react/dialog
    <Transition appear show={prop1} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={prop2}>
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
                className={clsx(
                  [
                    "w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all",
                  ],
                  [settings.style.background.card]
                )}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-slate-400">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
