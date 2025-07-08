"use client";
import * as Switch from "@radix-ui/react-switch";

export function DemoSwitch() {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="s1">Dark Mode</label>
      <Switch.Root
        id="s1"
        className="w-10 h-6 bg-gray-300 rounded-full data-[state=checked]:bg-black relative"
      >
        <Switch.Thumb className="block w-4 h-4 bg-white rounded-full transition-transform translate-x-1 data-[state=checked]:translate-x-5" />
      </Switch.Root>
    </div>
  );
}
