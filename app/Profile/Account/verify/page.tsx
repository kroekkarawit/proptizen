"use client";
import React, { useState } from "react";
import DragAndDropImage from "@/components/DragAndDropImage";
import IconClose from "@/components/icons/IconClose";
import IconCheckCircle from "@/components/icons/IconCheckCircle";
import { useRouter } from "next/navigation";

const Verify = () => {
  const router = useRouter();

  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [image, setImage] = useState<string | null>(null);
  const [thaiNationalIdNumber, setThaiNationalIdNumber] = useState<
    string | null
  >("");

  const handleImageChange = (imageUrl: string) => {
    // Handle the image change in the parent component
    console.log("Image URL:", imageUrl);
  };

  const handleSubmitVerify = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("thaiNationalIdNumber", thaiNationalIdNumber || "");

      const uploadedImageUrl = await handleUploadImage(image);
      if (uploadedImageUrl) {
        formData.append("thaiNationalIdCardPhoto", uploadedImageUrl);
      }

      const response = await fetch(
        `https://proptizen-api-staging-cj7z67z5ra-as.a.run.app/users/me`,
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImlhdCI6MTcwODU4NjQ3MiwiZXhwIjoxNzExMTc4NDcyfQ.QdUjkx8leaMjdRoAds6pnxYdd08SeF6Yk9MU0796kJM`,
          },
        }
      );

      if (!response.ok) {
        console.error("Error updating data");
      } else {
        const data = await response.json();
        setIsVerified(true);
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadImage = async (
    image: string | null
  ): Promise<string | null> => {
    //pretend like upload image to s3 or any
    if (!image) {
      return null;
    }

    // Simulate upload and return a fake URL
    return `https://thisbucket.s3.ap-southeast-1.amazonaws.com/static-assets/image?key=${Math.random()
      .toString(36)
      .substring(2, 8)}`;
  };

  return (
    <>
      <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        <div
          aria-hidden="true"
          className="fixed inset-0 w-full h-full bg-[#4d4d4d] cursor-pointer"
        ></div>
        {!isVerified ? (
          <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
            <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-3xl mx-auto max-w-[536px] ">
              <div className="flex justify-end ">
                <div className="flex px-6 pt-4">
                  <IconClose />
                </div>
              </div>
              <div className="px-6 w-full mt-4 ">
                <div className="px-16 flex flex-col">
                  <span className="text-modal-header font-bold font-inter ">
                    Verify your Thai National ID
                  </span>
                  <span className="font-normal text-base font-inter text-secondary pt-1">
                    We’ll check your information and authenticate you within 5
                    -7 days.
                  </span>
                </div>
                <div className="px-16 flex flex-col w-full mt-8">
                  <div className="flex">
                    <span className="text-sm font-medium font-inter mr-0.5">
                      Thai National ID number
                    </span>
                    <span className="text-sm font-medium text-critical font-inter ">
                      *
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Fill your Thai National ID number"
                    maxLength={12}
                    value={thaiNationalIdNumber || ""}
                    onChange={(e) => setThaiNationalIdNumber(e.target.value)}
                    className="mt-1 border boder-[#E0E0E0] rounded-xl h-12 max-w-[360px] placeholder:text-[#9E9E9E] placeholder:text-base  placeholder:font-normal p-2"
                  />
                </div>

                <div className="px-16 flex flex-col w-full mt-8 mb-12	">
                  <div className="flex">
                    <span className="text-sm font-medium font-inter mr-0.5">
                      Thai National ID card Photo
                    </span>
                    <span className="text-sm font-medium text-critical font-inter ">
                      *
                    </span>
                  </div>
                  <DragAndDropImage
                    image={image}
                    setImage={setImage}
                    onImageChange={handleImageChange}
                  />
                  <div
                    className="bg-brand rounded-full h-12 w-full  justify-center items-center flex mt-5 cursor-pointer"
                    onClick={handleSubmitVerify}
                  >
                    <span className="text-[#FFFCFA] flex items-center text-base font-medium ">
                      {isLoading && (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                      Verify
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
              <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-3xl mx-auto max-w-[536px] ">
                <div className="flex justify-end ">
                  <div className="flex px-6 pt-4">
                    <IconClose />
                  </div>
                </div>
                <div className="px-6 w-full mt-4 ">
                  <div className="mx-16 mb-6 rounded-full bg-[#F1F8E9] h-20	w-20 flex justify-center items-center p-4">
                    <IconCheckCircle />
                  </div>
                  <div className="px-16 flex flex-col">
                    <span className="text-modal-header font-bold font-inter ">
                      Verification success
                    </span>
                    <span className="font-normal text-base font-inter text-secondary pt-1">
                      Let’s explore to the Platform, and thank you for your
                      verification
                    </span>
                  </div>

                  <div className="px-16 flex flex-col w-full mt-6 mb-12	">
                    <div
                      className="bg-brand rounded-full h-12 w-full  justify-center items-center flex cursor-pointer"
                      onClick={() =>
                        router.push(
                          "/Profile/Account?thaiNationalIdNumberVerify=success"
                        )
                      }
                    >
                      <span className="text-[#FFFCFA]  text-base font-medium">
                        Continue to Prop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Verify;
