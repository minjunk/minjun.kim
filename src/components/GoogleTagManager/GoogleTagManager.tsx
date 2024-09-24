import React from "react";

export type Props = {
  containerId: string;
};

export const GoogleTagManager = ({ containerId }: Props) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${containerId}');`.replace(
          /(\n|\s{2})/g,
          "",
        ),
      }}
    />
  );
};

export const GoogleTagManagerNoScript = ({ containerId }: Props) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
        height="0"
        width="0"
        style={{
          display: "none",
          visibility: "hidden",
        }}
      />
    </noscript>
  );
};

export default GoogleTagManager;
