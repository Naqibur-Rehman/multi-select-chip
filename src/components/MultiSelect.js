import { useState } from "react";
import { DATA } from "../Data";
import ListItem from "../components/ListItem";
import Chip from "../components/Chip";

const MultiSelect = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestedItems, setSuggestedItems] = useState(DATA);

  const handleInputChange = (e) => {
    setIsFocused(true);
    const value = e.target.value;
    setInputValue(value);

    // Filter items based on input value
    const filteredItems = DATA.filter((item) => {
      return (
        item.name.toLowerCase().includes(value.toLowerCase()) &&
        !chips.includes(item)
      );
    });

    setSuggestedItems(filteredItems);
  };

  const handleItemClick = (item) => {
    // Add item to chips and remove it from suggested items
    if (!chips.includes(item)) {
      setChips([...chips, item]);
    }
    // setChips([...chips, item]);
    setInputValue("");
    setIsFocused(false);
    setSuggestedItems(suggestedItems.filter((i) => i.name !== item.name));
  };

  const handleChipRemove = (removedChip) => {
    // Remove chip and add the item back to suggested items
    setChips(chips.filter((chip) => chip.id !== removedChip.id));
    setSuggestedItems([...suggestedItems, removedChip]);
  };

  //remove chip on backspace
  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && inputValue === "" && chips.length >= 1) {
      const removedChip = chips[chips.length - 1];
      setChips(chips.filter((chip) => chip.id !== removedChip.id));
      setSuggestedItems([...suggestedItems, removedChip]);
    }
  };

  return (
    <div className="multiselect">
      <div className="chips">
        {chips.map((item, index) => (
          <Chip key={index} item={item} handleClick={handleChipRemove} />
        ))}
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type to search..."
          className="input"
        />
        <div className="dropdown">
          {isFocused && chips.length >= 1 && inputValue === "" && (
            <ListItem
              item={chips[chips.length - 1]}
              isFocused={true}
              handleClick={handleItemClick}
            />
          )}
          {isFocused &&
            suggestedItems.map((item, index) => (
              <ListItem key={index} item={item} handleClick={handleItemClick} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
