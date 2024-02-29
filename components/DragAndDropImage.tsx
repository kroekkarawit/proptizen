import React, { useRef } from "react";
import IconUpload from "./icons/IconUpload";
import Image from "next/image";
interface IDragAndDropImageProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  onImageChange: (imageUrl: string) => void;
}

const DragAndDropImage: React.FC<IDragAndDropImageProps> = ({ image, setImage, onImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          onImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          onImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
      className="w-300 h-300 border-2 border-dashed border-[#E0E0E0] rounded-xl flex justify-center items-center mt-1"
    >
      {image ? (
        <Image
          src={image}
          alt="Dropped"
          width={100}
          height={200}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-col p-12 justify-center items-center m-4 bg-[#fafafa] w-full h-full ">
          <div
            className="flex bg-brand rounded-full text-[#FFFCFA] font-normal text-sm h-9 w-[104px] justify-center items-center cursor-pointer"
            onClick={handleUploadClick}
          >
            <IconUpload />
            Upload
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <span className="mt-3 font-normal text-base">or Drag photo here</span>
        </div>
      )}
    </div>
  );
};

export default DragAndDropImage;
