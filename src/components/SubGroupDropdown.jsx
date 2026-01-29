import { Dropdown, DropdownItem } from "flowbite-react";

export function SubGroupDropdown({ subgroup }) {
  return (
    <Dropdown label={"подгруппа "+subgroup.selectedSubGroup} className="bg-white text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
      <DropdownItem onClick={() => subgroup.setSelectedSubGroup(1)}>1</DropdownItem>
      <DropdownItem onClick={() => subgroup.setSelectedSubGroup(2)}>2</DropdownItem>
    </Dropdown>
  );
}