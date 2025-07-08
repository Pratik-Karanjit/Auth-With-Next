"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function MyDropDownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="py-4 px-5 bg-black  text-white border rounded-lg mb-4 cursor-pointer">
        Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white border p-2 rounded shadow">
        <DropdownMenu.Item className="px-2 py-1 hover:bg-black hover:text-white cursor-pointer">
          About Us
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-2 py-1 hover:bg-black hover:text-white cursor-pointer">
          Careers
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-2 py-1 hover:bg-black hover:text-white cursor-pointer">
          Our Team
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
