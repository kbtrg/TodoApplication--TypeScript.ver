import { Dialog, Transition } from '@headlessui/react'
import React from 'react'

export const MyModal = React.memo((props) => (
  <Transition appear show={props.modalOpen} as={React.Fragment}>
    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={props.closeModal}>
      <div className="min-h-screen px-4 text-center">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              {props.modalTitle}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{props.modalBody}</p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={props.closeModal}
              >
                閉じる
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
))
MyModal.displayName = 'MyModal'
