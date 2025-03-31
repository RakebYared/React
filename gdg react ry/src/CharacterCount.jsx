import { useState, useEffect, useMemo, useCallback } from "react";

const CharacterCount = ({ initialValue }) => {
  const [text, setText] = useState(initialValue);
  const [count, setCount] = useState(text.length);

  useEffect(() => setCount(text.length), [text]);

  const updateText = useCallback((newText) => {
    if (newText.length <= 200) {
      setText(newText);
    }
  }, []);

  const optimizedText = useMemo(() => text, [text]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-lg w-80">
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none"
        value={optimizedText}
        onChange={(e) => updateText(e.target.value)}
        placeholder="Type something..."
      />
      <span className="text-sm text-gray-600 mt-2">Characters: {count}/200</span>
    </div>
  );
};

export default CharacterCount;
