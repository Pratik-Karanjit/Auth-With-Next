"use client";
import * as Tabs from "@radix-ui/react-tabs";

export function DemoTabs() {
  return (
    <Tabs.Root defaultValue="tab1" className="w-full">
      <Tabs.List className="flex space-x-2 border-b">
        <Tabs.Trigger value="tab1" className="px-3 py-1">
          Tab 1
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="px-3 py-1">
          Tab 2
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1" className="p-4">
        Content for Tab 1
      </Tabs.Content>
      <Tabs.Content value="tab2" className="p-4">
        Content for Tab 2
      </Tabs.Content>
    </Tabs.Root>
  );
}
