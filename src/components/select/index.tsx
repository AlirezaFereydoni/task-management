// style
import { SelectBoxWrapper } from "./style";

// hooks
import { useState, useEffect, useRef } from "react";

// components
import { Icon } from "../icon";

// type
import { Item } from "../../types/types";

interface iSelect {
  dataList: Item[];
  placeholder: string;
  onChange: (selectedItem: Item) => void;
  initialValue: string;
}

const Select = ({ dataList = [], placeholder, onChange, initialValue }: iSelect) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  // check if outside of select box clicked and close list items
  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      if (isOpen) {
        if (selectRef && !selectRef?.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", clickOutSide);

    return () => document.removeEventListener("mousedown", clickOutSide);
  }, [selectRef, isOpen]);

  // Handle Select item from list
  const onSelect = (selectedItem: Item) => {
    setValue(selectedItem.name);
    if (onChange) onChange(selectedItem);
  };

  return (
    <SelectBoxWrapper onClick={() => setOpen(prev => !prev)} isOpen={isOpen} ref={selectRef}>
      {value && <span>{placeholder}</span>}

      <Icon name="chevronDown" size="1" fill="black" />

      <input disabled value={value} placeholder={placeholder} autoComplete="off" />

      <ul>
        {dataList.length > 0 &&
          dataList.map(item => {
            return (
              <li key={item.id} onClick={() => onSelect(item)}>
                {item.name}
              </li>
            );
          })}

        {dataList.length === 0 && <li>There is no item</li>}
      </ul>
    </SelectBoxWrapper>
  );
};

export { Select };
