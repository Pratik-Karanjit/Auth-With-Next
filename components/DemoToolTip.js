"use client";
import * as Tooltip from "@radix-ui/react-tooltip";

export function DemoTooltip() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="underline">Hover me</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-black text-white text-sm px-2 py-1 rounded">
            Tooltip info
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
