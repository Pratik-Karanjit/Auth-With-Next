"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export function DemoCheckbox() {
  return (
    <label className="flex items-center gap-2">
      <Checkbox.Root className="w-5 h-5 bg-gray-200 border rounded flex items-center justify-center">
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      Accept terms
    </label>
  );
}
