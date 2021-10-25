import { Tag } from "antd";
import { useState } from "react";
const Toolbar = (props) => {
  const [selectedTags, setselectedTags] = useState([]);

  const { CheckableTag } = Tag;

  const handleChange = (tag, checked) => {
    if (!selectedTags.includes(tag)) {
      setselectedTags((pre) => [...pre, tag]);
    } else {
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
      setselectedTags(nextSelectedTags);
    }
  };

  return (
    <div className="flex flex-row  h-full w-full py-8">
      <div className="w-1/3 h-fulL">
        <h1 className="text-center">Dating App</h1>
      </div>
      <div className="w-1/3 h-full">
        Categories:
        {props.tagsData.map((tag) => {
          return (
            <CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          );
        })}
      </div>
      <div className="w-1/3 h-full">
        <h1>Dating App</h1>
      </div>
    </div>
  );
};
export default Toolbar;
