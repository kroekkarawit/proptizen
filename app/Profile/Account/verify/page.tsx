"use client";
import React, { useState } from "react";
import DragAndDropImage from "@/components/DragAndDropImage";
import IconClose from "@/components/icons/IconClose";
import IconCheckCircle from "@/components/icons/IconCheckCircle";
const Verify = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
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
                    className="mt-1 border boder-[#E0E0E0] rounded-xl h-12 max-w-[360px] placeholder:text-[#9E9E9E] placeholder:text-base  placeholder:font-normal placeholder:p-2"
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
                  <DragAndDropImage />
                  <div className="bg-brand rounded-full h-12 w-full  justify-center items-center flex mt-5">
                    <span className="text-[#FFFCFA]   text-base font-medium">
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
                    <div className="bg-brand rounded-full h-12 w-full  justify-center items-center flex">
                      <span className="text-[#FFFCFA]   text-base font-medium">
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
