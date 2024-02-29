"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import CardSideMenu from "@/components/CardSideMenu";
import IconPhoto from "@/components/icons/IconPhoto";
import IconCamera from "@/components/icons/IconCamera";
import IconUser from "@/components/icons/IconUser";
import IconMail from "@/components/icons/IconMail";
import IconError from "@/components/icons/IconError";
import IconId from "@/components/icons/IconId";
import IconLock from "@/components/icons/IconLock";
const Account = () => {
  const router = useRouter();

  return (
    <div className="pt-8 px-10 flex flex-row justify-center gap-x-10">
      <CardSideMenu />
      <div>
        <div className="flxe flex-col w-full">
          <p className="text-primary text-profile-header font-bold">Account</p>
          <p className="text-subtitle pt-1">
            Edit account details and preferences
          </p>
        </div>
        <div className="pt-8">
          <span className="text-primary text-xl	font-bold">General</span>
          <div className="flex items-center pt-6 border-b  boder-[#E0E0E0]  pb-4">
            <IconPhoto />
            <div className="flex flex-col pl-6">
              <span className="font-normal text-base text-primary">
                Cover Photo
              </span>
              <span className="font-normal text-sm text-secondary pt-1">
                Recommended size: 1500x400px
              </span>
            </div>
          </div>
          <div className="flex items-center border-b boder-[#E0E0E0]">
            <div className="relative">
              <Image
                src="/assets/images/Cover-Image.png"
                width="1200"
                height="200"
                alt="cover"
                className="w-full pb-4"
              />
              <div className="absolute bottom-8 right-4 bg-black/70 p-3 rounded-full">
                <IconCamera />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-b boder-[#E0E0E0] pb-4">
            <div className="flex items-center">
              <IconUser />
              <div className="flex flex-col pl-6">
                <span className="font-normal text-base text-primary">Name</span>
                <span className="font-normal text-sm text-secondary pt-1">
                  Jon Snow
                </span>
              </div>
            </div>
            <div className="bg-tertiary rounded-full py-2 px-4 h-9  text-primary font-medium text-sm inline-block align-middle ">
              Edit
            </div>
          </div>
        </div>
        <div className="pt-8">
          <span className="text-primary text-xl	font-bold">Verification</span>

          <div className="flex justify-between items-center py-4 border-b boder-[#E0E0E0] pb-4">
            <div className="flex items-center">
              <IconMail />
              <div className="flex flex-col pl-6">
                <span className="font-normal text-base text-primary">
                  Email
                </span>
                <div className="pt-1 flex">
                  <IconError />
                  <span className="font-normal text-sm text-secondary ml-1">
                    Add an email address
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#FFF3E0] border boder-[#FFE0B2] rounded-full py-2 px-4 h-9  text-[#E65100] font-medium text-sm inline-block align-middle ">
              Verify Now
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-b boder-[#E0E0E0] pb-4">
            <div className="flex items-center">
              <IconId />
              <div className="flex flex-col pl-6">
                <span className="font-normal text-base text-primary">
                  Thai National ID
                </span>
                <div className="pt-1 flex">
                  <IconError />
                  <span className="font-normal text-sm text-secondary ml-1">
                    Add your Thai National ID
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={() => router.push("/Profile/Account/verify")}
              className="bg-[#FFF3E0] border boder-[#FFE0B2] rounded-full py-2 px-4 h-9  text-[#E65100] font-medium text-sm inline-block align-middle cursor-pointer"
            >
              Verify Now
            </div>
          </div>
        </div>

        <div className="pt-8">
          <span className="text-primary text-xl	font-bold">Password</span>

          <div className="flex justify-between items-center py-4 border-b boder-[#E0E0E0] pb-4">
            <div className="flex items-center">
              <IconLock />
              <div className="flex flex-col pl-6">
                <span className="font-normal text-base text-primary">
                  Change Password
                </span>
                <span className="font-normal text-sm text-secondary pt-1">
                  •••••••••••
                </span>
              </div>
            </div>
            <div className="bg-tertiary rounded-full py-2 px-4 h-9  text-primary font-medium text-sm inline-block align-middle ">
              Edit
            </div>
          </div>
        </div>
        <div className="flex pt-8 pb-32">
          <span className="text-critical font-medium text-sm py-2 px-4">
            Delete Account
          </span>
          <span className="text-critical font-medium text-sm border boder-critical rounded-full py-2 px-4">
            Deactivate Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Account;
