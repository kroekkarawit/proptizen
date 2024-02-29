import React, { useState } from "react";
import IconUpload from "./icons/IconUpload";

const DragAndDropImage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
      className="w-300 h-300 border-2 border-dashed border-[#E0E0E0] rounded-xl flex justify-center items-center mt-1"
    >
      {image ? (
        <img src={image} alt="Dropped" className="w-full h-full object-cover" />
      ) : (
        <div className="flex flex-col p-12 justify-center items-center m-4 bg-[#fafafa] w-full h-full ">
          <div className="flex bg-brand rounded-full text-[#FFFCFA] font-normal text-sm h-9 w-[104px] justify-center items-center">
            <IconUpload />
            Upload
          </div>
          <span className="mt-3 font-normal text-base">or Drag photo here</span>
        </div>
      )}
    </div>
  );
};

export default DragAndDropImage;
