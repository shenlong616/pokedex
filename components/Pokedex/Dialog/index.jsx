import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { settings } from "../../../pokedex.config";
import Description from "./Description";
import Legend from "./Legend";
import CloseText from "./CloseText";
import clsx from "clsx";

export default function ({ show, data, onClose }) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog className="z-40 flex flex-col" onClose={onClose}>
        <Transition.Child
          enter={settings.headlessui.transition[2].enter}
          enterFrom={settings.headlessui.transition[2].enterFrom}
          enterTo={settings.headlessui.transition[2].enterTo}
          leave={settings.headlessui.transition[2].leave}
          leaveFrom={settings.headlessui.transition[2].leaveFrom}
          leaveTo={settings.headlessui.transition[2].leaveTo}
          className="fixed inset-0 bg-black/25"
        />

        <Transition.Child
          enter={settings.headlessui.transition[1].enter}
          enterFrom={settings.headlessui.transition[1].enterFrom}
          enterTo={settings.headlessui.transition[1].enterTo}
          leave={settings.headlessui.transition[1].leave}
          leaveFrom={settings.headlessui.transition[1].leaveFrom}
          leaveTo={settings.headlessui.transition[1].leaveTo}
          className="fixed inset-0 m-2 flex flex-col items-center justify-center gap-y-2 overflow-y-auto"
        >
          <Dialog.Panel
            className={clsx("p-5", settings.tailwindcss.card)}
            as="fieldset"
          >
            <Legend data={data} />

            {/* <Dialog.Title></Dialog.Title> */}

            <Dialog.Description as={Fragment}>
              <Description data={data} />
            </Dialog.Description>
          </Dialog.Panel>

          <CloseText onClick={onClose} />
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
