import { MouseEventHandler } from "react";

export const MoonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" />
  </svg>
);

export const SunIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.995 12C6.995 14.761 9.241 17.007 12.002 17.007C14.763 17.007 17.009 14.761 17.009 12C17.009 9.239 14.763 6.993 12.002 6.993C9.241 6.993 6.995 9.239 6.995 12ZM11 19H13V22H11V19ZM11 2H13V5H11V2ZM2 11H5V13H2V11ZM19 11H22V13H19V11Z" />
    <path d="M5.63702 19.778L4.22302 18.364L6.34402 16.243L7.75802 17.657L5.63702 19.778Z" />
    <path d="M16.242 6.34405L18.364 4.22205L19.778 5.63605L17.656 7.75805L16.242 6.34405Z" />
    <path d="M6.34402 7.75902L4.22302 5.63702L5.63802 4.22302L7.75802 6.34502L6.34402 7.75902Z" />
    <path d="M19.778 18.3639L18.364 19.7779L16.242 17.6559L17.656 16.2419L19.778 18.3639Z" />
  </svg>
);

export const LockIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<SVGSVGElement>;
}) => (
  <svg
    onClick={onClick}
    width="17"
    height="20"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 11C7.93046 11 7.46875 11.4617 7.46875 12.0312C7.46875 12.6008 7.93046 13.0625 8.5 13.0625C9.06954 13.0625 9.53125 12.6008 9.53125 12.0312C9.53125 11.4617 9.06954 11 8.5 11ZM6.09375 12.0312C6.09375 10.7023 7.17106 9.625 8.5 9.625C9.82894 9.625 10.9062 10.7023 10.9062 12.0312C10.9062 13.3602 9.82894 14.4375 8.5 14.4375C7.17106 14.4375 6.09375 13.3602 6.09375 12.0312Z"
      fill="#3A3F42"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 13.0625C8.8797 13.0625 9.1875 13.3703 9.1875 13.75V15.8125C9.1875 16.1922 8.8797 16.5 8.5 16.5C8.1203 16.5 7.8125 16.1922 7.8125 15.8125V13.75C7.8125 13.3703 8.1203 13.0625 8.5 13.0625Z"
      fill="#3A3F42"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.25 8.25C0.25 7.49061 0.865608 6.875 1.625 6.875H15.375C16.1344 6.875 16.75 7.49061 16.75 8.25V17.875C16.75 18.6344 16.1344 19.25 15.375 19.25H1.625C0.865608 19.25 0.25 18.6344 0.25 17.875V8.25ZM15.375 8.25H1.625V17.875H15.375V8.25Z"
      fill="#3A3F42"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 2.0625C7.86182 2.0625 7.24978 2.31601 6.79852 2.76727C6.34726 3.21853 6.09375 3.83057 6.09375 4.46875V7.5625C6.09375 7.9422 5.78595 8.25 5.40625 8.25C5.02655 8.25 4.71875 7.9422 4.71875 7.5625V4.46875C4.71875 3.4659 5.11713 2.50412 5.82625 1.795C6.53537 1.08588 7.49715 0.6875 8.5 0.6875C9.50285 0.6875 10.4646 1.08588 11.1737 1.795C11.8829 2.50412 12.2812 3.4659 12.2812 4.46875V7.5625C12.2812 7.9422 11.9734 8.25 11.5938 8.25C11.2141 8.25 10.9062 7.9422 10.9062 7.5625V4.46875C10.9062 3.83057 10.6527 3.21853 10.2015 2.76727C9.75022 2.31601 9.13818 2.0625 8.5 2.0625Z"
      fill="#3A3F42"
    />
  </svg>
);

export const EyeIcon = () => (
  <svg
    width="17"
    height="12"
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.05538 3.071C3.39628 1.7301 5.50042 0.375 8.5 0.375C11.4996 0.375 13.6037 1.7301 14.9446 3.071C15.6134 3.73983 16.0957 4.40768 16.4116 4.90928C16.5697 5.16051 16.687 5.37132 16.7656 5.52147C16.805 5.59658 16.8347 5.65664 16.8552 5.69912C16.8654 5.72037 16.8733 5.73724 16.8789 5.74941L16.8857 5.76411L16.8878 5.76875L16.8885 5.77038L16.8888 5.77102C16.8888 5.77102 16.889 5.77155 16.375 6C16.889 6.22845 16.8888 6.22898 16.8888 6.22898L16.8885 6.22962L16.8878 6.23125L16.8857 6.23589L16.8789 6.25059C16.8733 6.26276 16.8654 6.27963 16.8552 6.30088C16.8347 6.34336 16.805 6.40342 16.7656 6.47853C16.687 6.62868 16.5697 6.83949 16.4116 7.09072C16.0957 7.59232 15.6134 8.26017 14.9446 8.929C13.6037 10.2699 11.4996 11.625 8.5 11.625C5.50042 11.625 3.39628 10.2699 2.05538 8.929C1.38655 8.26017 0.904266 7.59232 0.588447 7.09072C0.430262 6.83949 0.313036 6.62868 0.234386 6.47853C0.19504 6.40342 0.165285 6.34336 0.144828 6.30088C0.134598 6.27963 0.126687 6.26276 0.12106 6.25059L0.114324 6.23589L0.11223 6.23125L0.1115 6.22962L0.111214 6.22898C0.111214 6.22898 0.110981 6.22845 0.625 6C0.110981 5.77155 0.111214 5.77102 0.111214 5.77102L0.1115 5.77038L0.11223 5.76875L0.114324 5.76411L0.12106 5.74941C0.126687 5.73724 0.134598 5.72037 0.144828 5.69912C0.165285 5.65664 0.19504 5.59658 0.234386 5.52147C0.313036 5.37132 0.430262 5.16051 0.588447 4.90928C0.904266 4.40768 1.38655 3.73983 2.05538 3.071ZM0.625 6L0.110981 5.77155C0.0463397 5.91699 0.0463397 6.08301 0.110981 6.22845L0.625 6ZM1.25394 6C1.32011 6.12396 1.41515 6.29228 1.54046 6.49131C1.8223 6.93893 2.25407 7.5367 2.85087 8.1335C4.04122 9.32385 5.87458 10.5 8.5 10.5C11.1254 10.5 12.9588 9.32385 14.1491 8.1335C14.7459 7.5367 15.1777 6.93893 15.4595 6.49131C15.5849 6.29228 15.6799 6.12396 15.7461 6C15.6799 5.87604 15.5849 5.70772 15.4595 5.50869C15.1777 5.06107 14.7459 4.4633 14.1491 3.8665C12.9588 2.67615 11.1254 1.5 8.5 1.5C5.87458 1.5 4.04122 2.67615 2.85087 3.8665C2.25407 4.4633 1.8223 5.06107 1.54046 5.50869C1.41515 5.70772 1.32011 5.87604 1.25394 6ZM16.375 6L16.889 6.22845C16.9537 6.08301 16.9537 5.91699 16.889 5.77155L16.375 6Z"
      fill="#4C5155"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.5 3.75C7.25736 3.75 6.25 4.75736 6.25 6C6.25 7.24264 7.25736 8.25 8.5 8.25C9.74264 8.25 10.75 7.24264 10.75 6C10.75 4.75736 9.74264 3.75 8.5 3.75ZM5.125 6C5.125 4.13604 6.63604 2.625 8.5 2.625C10.364 2.625 11.875 4.13604 11.875 6C11.875 7.86396 10.364 9.375 8.5 9.375C6.63604 9.375 5.125 7.86396 5.125 6Z"
      fill="#4C5155"
    />
  </svg>
);

export const EyeCrossedIcon = () => (
  <svg
    width="17"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.05538 3.696C4.39628 2.3551 6.50042 1 9.5 1C12.4996 1 14.6037 2.3551 15.9446 3.696C16.6134 4.36483 17.0957 5.03268 17.4116 5.53428C17.5697 5.78551 17.687 5.99632 17.7656 6.14647C17.805 6.22158 17.8347 6.28164 17.8552 6.32412C17.8654 6.34537 17.8733 6.36224 17.8789 6.37441L17.8857 6.38911L17.8878 6.39375L17.8885 6.39538C17.8885 6.39538 17.889 6.39655 17.375 6.625C17.889 6.85345 17.8888 6.85398 17.8888 6.85398L17.8878 6.85625L17.8857 6.86089L17.8789 6.87559C17.8733 6.88776 17.8654 6.90463 17.8552 6.92588C17.8347 6.96836 17.805 7.02842 17.7656 7.10353C17.687 7.25368 17.5697 7.46449 17.4116 7.71572C17.0957 8.21732 16.6134 8.88517 15.9446 9.554C14.6037 10.8949 12.4996 12.25 9.5 12.25C6.50042 12.25 4.39628 10.8949 3.05538 9.554C2.38655 8.88517 1.90427 8.21732 1.58845 7.71572C1.43026 7.46449 1.31304 7.25368 1.23439 7.10353C1.19504 7.02842 1.16528 6.96836 1.14483 6.92588C1.1346 6.90463 1.12669 6.88776 1.12106 6.87559L1.11432 6.86089L1.11223 6.85625L1.1115 6.85462C1.1115 6.85462 1.11098 6.85345 1.625 6.625C1.11098 6.39655 1.11121 6.39602 1.11121 6.39602L1.11223 6.39375L1.11432 6.38911L1.12106 6.37441C1.12669 6.36224 1.1346 6.34537 1.14483 6.32412C1.16528 6.28164 1.19504 6.22158 1.23439 6.14647C1.31304 5.99632 1.43026 5.78551 1.58845 5.53428C1.90427 5.03268 2.38655 4.36483 3.05538 3.696ZM1.625 6.625L1.11121 6.39602C1.04657 6.54146 1.04634 6.70801 1.11098 6.85345L1.625 6.625ZM2.25394 6.625C2.32011 6.74896 2.41515 6.91728 2.54046 7.11631C2.8223 7.56393 3.25407 8.1617 3.85087 8.7585C5.04122 9.94885 6.87458 11.125 9.5 11.125C12.1254 11.125 13.9588 9.94885 15.1491 8.7585C15.7459 8.1617 16.1777 7.56393 16.4595 7.11631C16.5849 6.91728 16.6799 6.74896 16.7461 6.625C16.6799 6.50104 16.5849 6.33272 16.4595 6.13369C16.1777 5.68607 15.7459 5.0883 15.1491 4.4915C13.9588 3.30115 12.1254 2.125 9.5 2.125C6.87458 2.125 5.04122 3.30115 3.85087 4.4915C3.25407 5.0883 2.8223 5.68607 2.54046 6.13369C2.41515 6.33272 2.32011 6.50104 2.25394 6.625ZM17.375 6.625L17.8888 6.85398C17.9535 6.70854 17.9537 6.54199 17.889 6.39655L17.375 6.625Z"
      fill="#4C5155"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.5 4.375C8.25736 4.375 7.25 5.38236 7.25 6.625C7.25 7.86764 8.25736 8.875 9.5 8.875C10.7426 8.875 11.75 7.86764 11.75 6.625C11.75 5.38236 10.7426 4.375 9.5 4.375ZM6.125 6.625C6.125 4.76104 7.63604 3.25 9.5 3.25C11.364 3.25 12.875 4.76104 12.875 6.625C12.875 8.48896 11.364 10 9.5 10C7.63604 10 6.125 8.48896 6.125 6.625Z"
      fill="#4C5155"
    />
    <line
      x1="0.749482"
      y1="12.1923"
      x2="19.7495"
      y2="1.19229"
      stroke="#4C5155"
    />
  </svg>
);

export const ArrowDownIcon = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.98483 4.73483C2.13128 4.58839 2.36872 4.58839 2.51517 4.73483L6 8.21967L9.48483 4.73483C9.63128 4.58839 9.86872 4.58839 10.0152 4.73483C10.1616 4.88128 10.1616 5.11872 10.0152 5.26517L6.26516 9.01516C6.11872 9.16161 5.88128 9.16161 5.73484 9.01516L1.98483 5.26517C1.83839 5.11872 1.83839 4.88128 1.98483 4.73483Z"
      fill="#FDFEFA"
    />
  </svg>
);

export const ArrowUpIcon = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.984835 5.01517C1.13128 5.16161 1.36872 5.16161 1.51517 5.01517L5 1.53033L8.48483 5.01517C8.63128 5.16161 8.86872 5.16161 9.01517 5.01517C9.16161 4.86872 9.16161 4.63128 9.01517 4.48483L5.26516 0.734835C5.11872 0.588388 4.88128 0.588388 4.73484 0.734835L0.984835 4.48483C0.838388 4.63128 0.838388 4.86872 0.984835 5.01517Z"
      fill="#FDFEFA"
    />
  </svg>
);

export const CopyIcon = () => (
  <svg
    width="14"
    height="17"
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75795 10.6727C3.75795 10.3334 4.03301 10.0583 4.37231 10.0583H9.2872C9.62651 10.0583 9.90156 10.3334 9.90156 10.6727C9.90156 11.012 9.62651 11.287 9.2872 11.287H4.37231C4.03301 11.287 3.75795 11.012 3.75795 10.6727Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75795 8.21522C3.75795 7.87592 4.03301 7.60086 4.37231 7.60086H9.2872C9.62651 7.60086 9.90156 7.87592 9.90156 8.21522C9.90156 8.55452 9.62651 8.82958 9.2872 8.82958H4.37231C4.03301 8.82958 3.75795 8.55452 3.75795 8.21522Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.431662 1.81712C0.662092 1.58669 0.974623 1.45724 1.3005 1.45724H4.37231C4.71161 1.45724 4.98667 1.7323 4.98667 2.0716C4.98667 2.4109 4.71161 2.68596 4.37231 2.68596H1.3005L1.3005 15.5876H12.359V2.68596H9.2872C8.9479 2.68596 8.67284 2.4109 8.67284 2.0716C8.67284 1.7323 8.9479 1.45724 9.2872 1.45724H12.359C12.6849 1.45724 12.9974 1.58669 13.2279 1.81712C13.4583 2.04755 13.5877 2.36009 13.5877 2.68596V15.5876C13.5877 15.9134 13.4583 16.226 13.2279 16.4564C12.9974 16.6868 12.6849 16.8163 12.359 16.8163H1.3005C0.974624 16.8163 0.662093 16.6868 0.431662 16.4564C0.201232 16.226 0.0717773 15.9134 0.0717773 15.5876V2.68596C0.0717773 2.36008 0.201232 2.04755 0.431662 1.81712Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.82976 1.45724C6.178 1.45724 5.55294 1.71615 5.09208 2.17701C4.63122 2.63787 4.37231 3.26293 4.37231 3.91469H9.2872C9.2872 3.26293 9.02829 2.63787 8.56743 2.17701C8.10657 1.71615 7.48151 1.45724 6.82976 1.45724ZM4.22324 1.30817C4.91453 0.616879 5.85212 0.228516 6.82976 0.228516C7.80739 0.228516 8.74498 0.616879 9.43627 1.30817C10.1276 1.99946 10.5159 2.93705 10.5159 3.91469V4.52905C10.5159 4.86835 10.2409 5.14341 9.90156 5.14341H3.75795C3.41864 5.14341 3.14359 4.86835 3.14359 4.52905V3.91469C3.14359 2.93705 3.53195 1.99946 4.22324 1.30817Z"
      fill="black"
    />
  </svg>
);

export const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.16992 6.01313C4.40984 5.7732 4.79883 5.7732 5.03876 6.01313L7.82974 8.80411L10.6207 6.01313C10.8606 5.7732 11.2496 5.7732 11.4896 6.01313C11.7295 6.25305 11.7295 6.64204 11.4896 6.88197L8.26416 10.1074C8.02423 10.3473 7.63524 10.3473 7.39532 10.1074L4.16992 6.88197C3.93 6.64204 3.93 6.25305 4.16992 6.01313Z"
      fill="#FCF9FC"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.82974 0.45752C8.16904 0.45752 8.4441 0.732579 8.4441 1.07188V9.67295C8.4441 10.0122 8.16904 10.2873 7.82974 10.2873C7.49044 10.2873 7.21538 10.0122 7.21538 9.67295V1.07188C7.21538 0.732579 7.49044 0.45752 7.82974 0.45752Z"
      fill="#FCF9FC"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.07176 9.05858C1.41106 9.05858 1.68612 9.33364 1.68612 9.67295V13.9735H13.9734V9.67295C13.9734 9.33364 14.2484 9.05858 14.5877 9.05858C14.927 9.05858 15.2021 9.33364 15.2021 9.67295V13.9735C15.2021 14.2994 15.0726 14.6119 14.8422 14.8423C14.6118 15.0727 14.2992 15.2022 13.9734 15.2022H1.68612C1.36024 15.2022 1.04771 15.0727 0.817282 14.8423C0.586852 14.6119 0.457397 14.2994 0.457397 13.9735V9.67295C0.457397 9.33364 0.732457 9.05858 1.07176 9.05858Z"
      fill="#FCF9FC"
    />
  </svg>
);
