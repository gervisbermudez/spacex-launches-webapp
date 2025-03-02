import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 246, height = 30 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3636_636)">
        <path
          d="M57.4214 11.0758H36.6731L35.932 11.6626V29.9266H41.6378V23.0317L42.1564 22.5184H57.4212C61.2743 22.5184 63.0528 21.4916 63.0528 18.851V14.6701C63.053 12.1027 61.2745 11.0758 57.4214 11.0758ZM57.4214 17.8239C57.4214 19.0707 56.6062 19.2908 54.7537 19.2908H42.2307L41.6378 18.7774V14.8899L42.1564 14.3765H54.7535C56.532 14.3765 57.4211 14.5966 57.4211 15.8434L57.4214 17.8239ZM73.5753 14.5231L78.54 21.7113L78.2436 22.3715H67.2767L64.4609 25.819H80.7629L81.9486 26.4791L84.468 29.9265H91.063L76.6134 10.8557L73.5753 14.5231ZM139.006 26.259V21.1247L139.599 20.6111H150.64V17.3837H133.152V29.9265H158.939V26.6991H139.673L139.006 26.259ZM133.152 11.0758H159.161V14.5966H133.152V11.0758ZM104.179 14.4498H125.149C124.853 11.8093 123.149 11.0758 118.999 11.0758H103.957C99.2142 11.0758 97.7321 11.956 97.7321 15.55V25.5255C97.7321 29.0464 99.2142 30 103.957 30H118.999C123.223 30 124.853 29.193 125.001 26.4791H104.179L103.586 25.8922V14.8899L104.179 14.4498ZM21.853 18.4107H6.66241L6.21778 17.8974V14.67L6.66241 14.3033H27.1882L27.4846 13.6431C26.8177 11.8826 24.9652 11.0025 21.6307 11.0025H7.32925C2.58687 11.0025 1.10484 11.8827 1.10484 15.4767V17.6039C1.10484 21.1248 2.58687 22.0783 7.32925 22.0783H22.5199L22.9645 22.5183V25.8923L22.594 26.4059H0.660205C0.660205 26.4059 0.141602 26.6991 0.141602 26.7726C0.51206 29.2665 2.21641 29.9265 6.29185 29.9265H21.8531C26.5955 29.9265 28.1517 29.0464 28.1517 25.4523V22.885C28.1516 19.3643 26.5955 18.4107 21.853 18.4107ZM175.538 11.0025H166.942L166.497 11.8826L175.982 18.7775C177.761 17.7505 179.761 16.7237 181.836 15.6968L175.538 11.0025ZM183.244 23.912L191.618 29.9265H200.213L200.584 29.1196L188.135 20.0977C186.505 21.3445 184.8 22.5916 183.244 23.912Z"
          fill="white"
          fillOpacity="0.87"
        />
        <path
          d="M174.278 29.9266H166.497L165.83 28.8996C171.091 23.8386 194.655 2.27384 245.859 0C245.859 0 202.955 1.4669 174.278 29.9266Z"
          fill="white"
          fillOpacity="0.87"
        />
      </g>
      <defs>
        <clipPath id="clip0_3636_636">
          <rect width={246} height={30} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
