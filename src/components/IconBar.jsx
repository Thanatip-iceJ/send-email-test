import React from "react";
import IconItem from "./IconItem";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddLinkIcon from "@mui/icons-material/AddLink";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";

function IconBar() {
  return (
    <div className="flex gap-5 mt-3">
      <IconItem icon={<FormatBoldIcon fontSize="small" />} />
      <IconItem icon={<FormatItalicIcon fontSize="small" />} />
      <IconItem icon={<FormatUnderlinedIcon fontSize="small" />} />
      <IconItem icon={<FormatIndentDecreaseIcon fontSize="small" />} />
      <IconItem icon={<AddLinkIcon fontSize="small" />} />
      <IconItem icon={<InsertPhotoIcon fontSize="small" />} />
      <IconItem icon={<EmojiEmotionsIcon fontSize="small" />} />
    </div>
  );
}

export default IconBar;
