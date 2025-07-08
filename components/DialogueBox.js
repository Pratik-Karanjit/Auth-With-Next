"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function DialogueBox() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-black text-white rounded">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md w-96 shadow-xl">
          <Dialog.Title className="text-lg font-semibold">
            Dialog Title
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-500">
            This is a description.
          </Dialog.Description>
          <Dialog.Close className="mt-4 text-blue-600">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
