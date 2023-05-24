import React, { useState, useEffect } from "react";
import Popover from "./ui/Popover";

const PopUp = () => {
  const [copiedText, setCopiedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [openaiResponse, setOpenaiResponse] = useState("");

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === "copiedText") {
        setCopiedText(request.text);
      }
    });

    return () => {
      chrome.runtime.onMessage.removeListener();
    };
  }, []);

  return (
    <div>
      <Popover>{copiedText}</Popover>
    </div>
  )
};

export default PopUp;
