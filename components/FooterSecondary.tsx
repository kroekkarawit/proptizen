import React from "react";

const FooterSecondary = () => {
  return (
    <div className="bg-brand w-full h-[100px] flex flex-col md:flex-row justify-center items-center md:justify-between px-20	gap-y-6 md:gap-y-0">
      <div className="flex flex-row items-center gap-x-6	">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.0312 27.2812V17.3266L19.9688 13.9516V27.2812H25.0312Z"
            fill="#FFFCFA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.2812 12.3619C18.2811 12.3701 18.2811 12.3783 18.2812 12.3865V27.2812H10.9688V12.8965L18.2812 9.24022V12.3619ZM14.625 13.7813C15.091 13.7813 15.4688 14.159 15.4688 14.625V14.6363C15.4688 15.1022 15.091 15.48 14.625 15.48C14.159 15.48 13.7812 15.1022 13.7812 14.6363V14.625C13.7812 14.159 14.159 13.7813 14.625 13.7813ZM15.4688 18C15.4688 17.534 15.091 17.1563 14.625 17.1563C14.159 17.1563 13.7812 17.534 13.7812 18V18.0113C13.7812 18.4772 14.159 18.855 14.625 18.855C15.091 18.855 15.4688 18.4772 15.4688 18.0113V18ZM14.625 20.5313C15.091 20.5313 15.4688 20.909 15.4688 21.375V21.3863C15.4688 21.8522 15.091 22.23 14.625 22.23C14.159 22.23 13.7812 21.8522 13.7812 21.3863V21.375C13.7812 20.909 14.159 20.5313 14.625 20.5313ZM15.4688 24.75C15.4688 24.284 15.091 23.9063 14.625 23.9063C14.159 23.9063 13.7812 24.284 13.7812 24.75V24.7613C13.7812 25.2272 14.159 25.605 14.625 25.605C15.091 25.605 15.4688 25.2272 15.4688 24.7613V24.75Z"
            fill="#FFFCFA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 0C4.02944 0 0 4.02944 0 9V27C0 31.9706 4.02944 36 9 36H27C31.9706 36 36 31.9706 36 27V9C36 4.02944 31.9706 0 27 0H9ZM19.5686 7.15726C19.8173 7.311 19.9688 7.58258 19.9688 7.875V11.9234L26.343 16.173C26.5778 16.3294 26.7188 16.5929 26.7188 16.875V27.2812H28.125C28.591 27.2812 28.9688 27.659 28.9688 28.125C28.9688 28.591 28.591 28.9688 28.125 28.9688H25.8769L25.875 28.9688L25.8731 28.9688H7.875C7.40901 28.9688 7.03125 28.591 7.03125 28.125C7.03125 27.659 7.40901 27.2812 7.875 27.2812H9.28125V12.375C9.28125 12.0554 9.46181 11.7633 9.74766 11.6203L18.7477 7.12033C19.0092 6.98955 19.3198 7.00353 19.5686 7.15726Z"
            fill="#FFFCFA"
          />
        </svg>
        <p className="text-sm font-medium text-[#FFFCFA] ">Terms of Service</p>
        <p className="text-sm font-medium text-[#FFFCFA] ">Privacy Policy</p>
        <p className="text-sm font-medium text-[#FFFCFA] ">© 2023 Prop</p>
      </div>
      <div className="flex flex-row items-center gap-x-10	">
        <div className="cursor-pointer bg-[#FFFCFA] rounded-full h-9	flex items-center">
          <div className="flex py-2	px-4 items-center	">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 3.12496C6.20304 3.12496 3.125 6.203 3.125 9.99996C3.125 13.7969 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.7969 16.875 9.99996C16.875 6.203 13.797 3.12496 10 3.12496ZM1.875 9.99996C1.875 5.51265 5.51269 1.87496 10 1.87496C14.4873 1.87496 18.125 5.51265 18.125 9.99996C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 9.99996Z"
                fill="#A67E59"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.37498 7.49996C2.37498 7.15478 2.6548 6.87496 2.99998 6.87496H17C17.3452 6.87496 17.625 7.15478 17.625 7.49996C17.625 7.84514 17.3452 8.12496 17 8.12496H2.99998C2.6548 8.12496 2.37498 7.84514 2.37498 7.49996Z"
                fill="#A67E59"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.37498 12.5C2.37498 12.1548 2.6548 11.875 2.99998 11.875H17C17.3452 11.875 17.625 12.1548 17.625 12.5C17.625 12.8451 17.3452 13.125 17 13.125H2.99998C2.6548 13.125 2.37498 12.8451 2.37498 12.5Z"
                fill="#A67E59"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.91425 1.96973C10.2071 2.15248 10.2963 2.53801 10.1136 2.83084C7.37574 7.21817 7.37574 12.7818 10.1136 17.1691C10.2963 17.4619 10.2071 17.8474 9.91425 18.0302C9.62141 18.2129 9.23588 18.1237 9.05313 17.8308C6.06256 13.0385 6.06256 6.96138 9.05313 2.16908C9.23588 1.87624 9.62141 1.78699 9.91425 1.96973Z"
                fill="#A67E59"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0858 1.96973C10.3786 1.78699 10.7642 1.87624 10.9469 2.16908C13.9375 6.96138 13.9375 13.0385 10.9469 17.8308C10.7642 18.1237 10.3786 18.2129 10.0858 18.0302C9.79295 17.8474 9.7037 17.4619 9.88644 17.1691C12.6243 12.7818 12.6243 7.21817 9.88644 2.83084C9.7037 2.53801 9.79295 2.15248 10.0858 1.96973Z"
                fill="#A67E59"
              />
            </svg>
            <p className="text-sm font-medium text-brand ml-1 inline-block align-middle">English - THB</p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7211 12.4001C31.7211 12.4001 31.4477 10.4696 30.6055 9.62197C29.5391 8.50635 28.3469 8.50088 27.8 8.43525C23.8844 8.15088 18.0055 8.15088 18.0055 8.15088H17.9945C17.9945 8.15088 12.1156 8.15088 8.2 8.43525C7.65313 8.50088 6.46094 8.50635 5.39453 9.62197C4.55234 10.4696 4.28437 12.4001 4.28437 12.4001C4.28437 12.4001 4 14.6696 4 16.9337V19.0556C4 21.3196 4.27891 23.5892 4.27891 23.5892C4.27891 23.5892 4.55234 25.5196 5.38906 26.3673C6.45547 27.4829 7.85547 27.4446 8.47891 27.5649C10.7211 27.7782 18 27.8438 18 27.8438C18 27.8438 23.8844 27.8329 27.8 27.554C28.3469 27.4884 29.5391 27.4829 30.6055 26.3673C31.4477 25.5196 31.7211 23.5892 31.7211 23.5892C31.7211 23.5892 32 21.3251 32 19.0556V16.9337C32 14.6696 31.7211 12.4001 31.7211 12.4001ZM15.107 21.6313V13.7618L22.6703 17.7103L15.107 21.6313Z"
              fill="#FFFCFA"
            />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9181 4H19.1993V23.0724C19.1993 25.3449 17.3844 27.2116 15.1258 27.2116C12.8672 27.2116 11.0523 25.3449 11.0523 23.0724C11.0523 20.8406 12.8269 19.0145 15.0048 18.9333V14.1449C10.2053 14.2261 6.3335 18.1623 6.3335 23.0724C6.3335 28.0232 10.286 32 15.1662 32C20.0462 32 23.9987 27.9826 23.9987 23.0724V13.2927C25.7733 14.5913 27.9512 15.3623 30.2502 15.4029V10.6145C26.701 10.4928 23.9181 7.57101 23.9181 4Z"
              fill="#FFFCFA"
            />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_572_1219)">
              <path
                d="M32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 24.9877 9.11957 30.7796 15.8125 31.8299V22.0469H12.2578V18H15.8125V14.9156C15.8125 11.4069 17.9027 9.46875 21.1005 9.46875C22.6318 9.46875 24.2344 9.74219 24.2344 9.74219V13.1875H22.4691C20.73 13.1875 20.1875 14.2668 20.1875 15.375V18H24.0703L23.4496 22.0469H20.1875V31.8299C26.8804 30.7796 32 24.9877 32 18Z"
                fill="#FFFCFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_572_1219">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(4 4)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_572_1222)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3122 4H25.6877C29.1739 4 32 6.82609 32 10.3122V25.6877C32 29.1739 29.1739 32 25.6877 32H10.3122C6.82609 32 4 29.1739 4 25.6877V10.3122C4 6.82609 6.82609 4 10.3122 4ZM17.9975 9.10474C23.1451 9.10474 27.3329 12.5032 27.3329 16.6805C27.3329 18.35 26.6845 19.8585 25.3317 21.3416C23.3735 23.5965 18.9941 26.3431 17.9975 26.7622C17.0276 27.1701 17.1408 26.5305 17.1855 26.2782C17.1867 26.2712 17.1879 26.2646 17.189 26.2582C17.2126 26.1182 17.322 25.4594 17.322 25.4594C17.3535 25.2214 17.3859 24.8512 17.2914 24.615C17.1872 24.3551 16.7734 24.2204 16.4689 24.1547C11.9871 23.5624 8.66211 20.4255 8.66211 16.6805C8.66211 12.5032 12.8499 9.10474 17.9975 9.10474Z"
                fill="#FFFCFA"
              />
              <path
                d="M24.2263 19.0929H21.6013C21.5549 19.0929 21.5103 19.0745 21.4775 19.0417C21.4447 19.0089 21.4263 18.9643 21.4263 18.9179V14.8448C21.4263 14.7984 21.4447 14.7539 21.4775 14.7211C21.5103 14.6882 21.5549 14.6698 21.6013 14.6698H24.2263C24.2727 14.6698 24.3172 14.6882 24.35 14.7211C24.3828 14.7539 24.4013 14.7984 24.4013 14.8448V15.5072C24.4013 15.5536 24.3828 15.5981 24.35 15.6309C24.3172 15.6637 24.2727 15.6822 24.2263 15.6822H22.4439V16.369H24.2263C24.2727 16.369 24.3172 16.3875 24.35 16.4203C24.3828 16.4531 24.4013 16.4976 24.4013 16.544V17.2125C24.4013 17.259 24.3828 17.3035 24.35 17.3363C24.3172 17.3691 24.2727 17.3875 24.2263 17.3875H22.4439V18.0753H24.2263C24.2727 18.0753 24.3172 18.0937 24.35 18.1266C24.3828 18.1594 24.4013 18.2039 24.4013 18.2503V18.9118C24.4021 18.9353 24.3982 18.9587 24.3897 18.9807C24.3813 19.0026 24.3686 19.0226 24.3522 19.0395C24.3359 19.0564 24.3163 19.0699 24.2947 19.079C24.273 19.0882 24.2498 19.0929 24.2263 19.0929Z"
                fill="#FFFCFA"
              />
              <path
                d="M14.5254 19.0928C14.5718 19.0928 14.6163 19.0744 14.6491 19.0416C14.682 19.0087 14.7004 18.9642 14.7004 18.9178V18.2563C14.7004 18.2099 14.682 18.1654 14.6491 18.1326C14.6163 18.0998 14.5718 18.0813 14.5254 18.0813H12.743V14.8438C12.743 14.7974 12.7246 14.7529 12.6918 14.7201C12.659 14.6873 12.6144 14.6688 12.568 14.6688H11.903C11.8566 14.6688 11.8121 14.6873 11.7793 14.7201C11.7465 14.7529 11.728 14.7974 11.728 14.8438V18.9152C11.728 18.9616 11.7465 19.0061 11.7793 19.0389C11.8121 19.0718 11.8566 19.0902 11.903 19.0902H14.528L14.5254 19.0928Z"
                fill="#FFFCFA"
              />
              <path
                d="M16.1037 14.6619H15.4422C15.3436 14.6619 15.2637 14.7418 15.2637 14.8404V18.9144C15.2637 19.0129 15.3436 19.0929 15.4422 19.0929H16.1037C16.2023 19.0929 16.2822 19.0129 16.2822 18.9144V14.8404C16.2822 14.7418 16.2023 14.6619 16.1037 14.6619Z"
                fill="#FFFCFA"
              />
              <path
                d="M20.6108 14.6619H19.9493C19.9029 14.6619 19.8584 14.6803 19.8256 14.7131C19.7928 14.7459 19.7743 14.7905 19.7743 14.8369V17.2571L17.9106 14.7397C17.9063 14.7331 17.9013 14.7269 17.8957 14.7214L17.8852 14.7109L17.8756 14.703H17.8703L17.8607 14.696H17.8554L17.8458 14.6907H17.8397H17.8301H17.8239H17.8134H17.8064H17.7959H17.7889H17.7793H17.1047C17.0583 14.6907 17.0138 14.7092 16.9809 14.742C16.9481 14.7748 16.9297 14.8193 16.9297 14.8657V18.9397C16.9297 18.9862 16.9481 19.0307 16.9809 19.0635C17.0138 19.0963 17.0583 19.1147 17.1047 19.1147H17.7671C17.8135 19.1147 17.858 19.0963 17.8908 19.0635C17.9236 19.0307 17.9421 18.9862 17.9421 18.9397V16.4959L19.8084 19.0159C19.8207 19.0337 19.8361 19.0491 19.8539 19.0614L19.8644 19.0684H19.8697L19.8784 19.0727H19.8872H19.8933H19.9056C19.921 19.0766 19.9369 19.0786 19.9528 19.0789H20.6108C20.6572 19.0789 20.7017 19.0604 20.7346 19.0276C20.7674 18.9948 20.7858 18.9503 20.7858 18.9039V14.8404C20.7863 14.8171 20.7821 14.794 20.7735 14.7723C20.7649 14.7507 20.7521 14.731 20.7358 14.7144C20.7195 14.6977 20.7001 14.6845 20.6786 14.6755C20.6571 14.6665 20.6341 14.6619 20.6108 14.6619Z"
                fill="#FFFCFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_572_1222">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(4 4)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FooterSecondary;
