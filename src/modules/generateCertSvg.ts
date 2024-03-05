import { UserRecord } from "../interfaces/UserRecord";

export const generatorMap: {
  [key in keyof Required<
    Omit<UserRecord, "email" | "isDonating" | "profileUI">
  >]: (colour: string) => string;
} = {
  isRespWebDesignCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M112 48h352v48h48V32a32.09 32.09 0 00-32-32H96a32.09 32.09 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H112zm492 80H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-12 336H432V176h160z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  is2018DataVisCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M0 0h7.75a45.5 45.5 0 110 91H0V71h7.75a25.5 25.5 0 100-51H0zm36.251 0h32a27.75 27.75 0 0121.331 45.5A27.75 27.75 0 0168.251 91h-32a53.69 53.69 0 0018.746-20H68.25a7.75 7.75 0 100-15.5H60.5a53.69 53.69 0 000-20h7.75a7.75 7.75 0 100-15.5H54.997A53.69 53.69 0 0036.251 0z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isFrontEndLibsCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isJsAlgoDataStructCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isApisMicroservicesCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M112 48h352v48h48V32a32.09 32.09 0 00-32-32H96a32.09 32.09 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H112zm492 80H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-12 336H432V176h160z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isInfosecQaCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isQaCertV7: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M126.2 286.4l64.2-63.6c2.1-2.1 2.1-5.5 0-7.6l-12.6-12.7c-2.1-2.1-5.5-2.1-7.6 0l-47.6 47.2-20.6-20.9c-2.1-2.1-5.5-2.1-7.6 0l-12.7 12.6c-2.1 2.1-2.1 5.5 0 7.6l37.1 37.4c1.9 2.1 5.3 2.1 7.4 0zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336zM112 328c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm168-88h-63.3c-1.3 1.8-2.1 3.9-3.7 5.5L186.2 272H280c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isInfosecCertV7: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  is2018FullStackCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
    <defs>
    <path
      d='M239 303.14L310.43 248.57L381.86 303.14L354.57 391.43L266.28 391.43L239 303.14Z'
      id='aZt9D86Ps'
    />
    <path
      d='M327.11 393.59L344.3 496.78L309.91 479.58L275.51 496.78L292.71 393.59L327.11 393.59Z'
      id='b7LyrCUAE'
    />
  </defs>
  <g>
    <g>
      <use
        fill='{{colour}}'
        fillOpacity='0'
        opacity='1'
        xlinkHref='#aZt9D86Ps'
      />
      <g>
        <use
          fillOpacity='0'
          opacity='1'
          stroke='{{colour}}'
          strokeOpacity='1'
          strokeWidth='14'
          xlinkHref='#aZt9D86Ps'
        />
      </g>
    </g>
    <g>
      <use
        fill='{{colour}}'
        fillOpacity='0'
        opacity='1'
        xlinkHref='#b7LyrCUAE'
      />
      <g>
        <use
          fillOpacity='0'
          opacity='1'
          stroke='{{colour}}'
          strokeOpacity='1'
          strokeWidth='14'
          xlinkHref='#b7LyrCUAE'
        />
      </g>
    </g>
  </g>
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isFrontEndCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isBackEndCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M424 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-88-24c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm64-144c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm176-72a47.758 47.758 0 01-6.438 24A47.758 47.758 0 01512 208v96a47.758 47.758 0 01-6.438 24A47.758 47.758 0 01512 352v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96a47.758 47.758 0 016.438-24A47.758 47.758 0 010 304v-96a47.758 47.758 0 016.438-24A47.758 47.758 0 010 160V64c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v96zm-464 0h416V64H48v96zm416 48H48v96h416v-96zm0 144H48v96h416v-96zm-64-216c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isDataVisCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M0 0h7.75a45.5 45.5 0 110 91H0V71h7.75a25.5 25.5 0 100-51H0zm36.251 0h32a27.75 27.75 0 0121.331 45.5A27.75 27.75 0 0168.251 91h-32a53.69 53.69 0 0018.746-20H68.25a7.75 7.75 0 100-15.5H60.5a53.69 53.69 0 000-20h7.75a7.75 7.75 0 100-15.5H54.997A53.69 53.69 0 0036.251 0z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isFullStackCert: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <defs>
  <path
    d='M239 303.14L310.43 248.57L381.86 303.14L354.57 391.43L266.28 391.43L239 303.14Z'
    id='aZt9D86Ps'
  />
  <path
    d='M327.11 393.59L344.3 496.78L309.91 479.58L275.51 496.78L292.71 393.59L327.11 393.59Z'
    id='b7LyrCUAE'
  />
</defs>
<g>
  <g>
    <use
      fill='{{colour}}'
      fillOpacity='0'
      opacity='1'
      xlinkHref='#aZt9D86Ps'
    />
    <g>
      <use
        fillOpacity='0'
        opacity='1'
        stroke='{{colour}}'
        strokeOpacity='1'
        strokeWidth='14'
        xlinkHref='#aZt9D86Ps'
      />
    </g>
  </g>
  <g>
    <use
      fill='{{colour}}'
      fillOpacity='0'
      opacity='1'
      xlinkHref='#b7LyrCUAE'
    />
    <g>
      <use
        fillOpacity='0'
        opacity='1'
        stroke='{{colour}}'
        strokeOpacity='1'
        strokeWidth='14'
        xlinkHref='#b7LyrCUAE'
      />
    </g>
  </g>
</g>
</svg>`.replace(/\{\{colour\}\}/g, colour),
  isSciCompPyCertV7: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isDataAnalysisPyCertV7: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M510.62 92.63C516.03 94.74 521.85 96 528 96c26.51 0 48-21.49 48-48S554.51 0 528 0s-48 21.49-48 48c0 2.43.37 4.76.71 7.09l-95.34 76.27c-5.4-2.11-11.23-3.37-17.38-3.37s-11.97 1.26-17.38 3.37L255.29 55.1c.35-2.33.71-4.67.71-7.1 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 4.27.74 8.34 1.78 12.28l-101.5 101.5C56.34 160.74 52.27 160 48 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-4.27-.74-8.34-1.78-12.28l101.5-101.5C199.66 95.26 203.73 96 208 96c6.15 0 11.97-1.26 17.38-3.37l95.34 76.27c-.35 2.33-.71 4.67-.71 7.1 0 26.51 21.49 48 48 48s48-21.49 48-48c0-2.43-.37-4.76-.71-7.09l95.32-76.28zM400 320h-64c-8.84 0-16 7.16-16 16v160c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V336c0-8.84-7.16-16-16-16zm160-128h-64c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm-320 0h-64c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zM80 352H16c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V368c0-8.84-7.16-16-16-16z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isMachineLearningPyCertV7: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isRelationalDatabaseCertV8: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isCollegeAlgebraPyCertV8: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M289 24.2C292.5 10 305.3 0 320 0H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H345L239 487.8c-3.2 13-14.2 22.6-27.6 24s-26.1-5.5-32.1-17.5L76.2 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c12.1 0 23.2 6.8 28.6 17.7l73.3 146.6L289 24.2zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isFoundationalCSharpCertV8: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M158.167 2.502C150.135 4.76 148.205 5.812 82 44.013 12.831 83.925 11.995 84.521 5.228 98.692L1.5 106.5v165l3.728 7.808c6.797 14.235 7.384 14.65 78.772 55.756 76.299 43.933 71.084 41.424 86 41.381 13.647-.039 15.215-.595 36.5-12.943 7.7-4.468 36.204-20.913 63.342-36.545 52.729-30.374 55.406-32.179 61.334-41.351C339.297 273.041 339 276.712 339 189c0-87.712.297-84.041-7.824-96.606-5.928-9.172-8.605-10.977-61.334-41.351C242.704 35.411 214.2 18.95 206.5 14.464 184.503 1.648 172.115-1.418 158.167 2.502M87.929 129.367c-9.93 2.678-19.154 10.497-24.085 20.417-3.685 7.414-3.661 71.065.03 78.496 10.37 20.877 35.098 27.776 53.885 15.032 19.078-12.942 21.674-42.283 3.741-42.283-6.196 0-12.5 6.137-12.5 12.169 0 10.617-13.203 15.734-20.25 7.848L86 217.968v-57.936l2.75-3.078c7.047-7.886 20.25-2.769 20.25 7.848 0 6.032 6.304 12.169 12.5 12.169 13.356 0 16.388-17.097 5.805-32.73-8.589-12.686-24.791-18.806-39.376-14.874m99.983.913c-4.692 3.162-5.88 6.078-5.897 14.47L182 152h-6.532c-11.322 0-17.501 4.39-17.433 12.385.077 8.874 4.866 12.599 16.215 12.608L182 177v24l-7.75.007c-11.349.009-16.138 3.734-16.215 12.608-.068 7.995 6.111 12.385 17.433 12.385H182l.015 7.25c.027 13.279 7.631 19.859 17.525 15.164 5.079-2.41 6.754-5.788 7.268-14.652l.449-7.762H230v6.766c0 8.126 2.123 12.758 7.062 15.407 9.798 5.255 17.927-1.51 17.934-14.923L255 226h6.532c11.207 0 17.468-4.384 17.468-12.231C279 205 273.861 201 262.596 201H255v-24h7.596c11.265 0 16.404-4 16.404-12.769 0-7.847-6.261-12.231-17.468-12.231H255l-.004-7.25c-.007-13.413-8.136-20.178-17.934-14.923-4.939 2.649-7.062 7.281-7.062 15.407V152H207.257l-.449-7.762c-.796-13.744-9.582-20.235-18.896-13.958M207 189v12h23v-24h-23v12' />
</svg>
`.replace(/\{\{colour\}\}/g, colour),
  isJsAlgoDataStructCertV8: (colour) =>
    `<svg viewBox='0 0 640 512' xmlns='http://www.w3.org/2000/svg'>
  <path fill="{{colour}}" d='M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z' />
</svg>
`.replace(/\{\{colour\}\}/g, colour)
} as const;
