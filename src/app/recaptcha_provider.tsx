'use client';

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RecaptchaProvider = ({ children }: { children: React.ReactNode }) => {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!key) {
    return (
      <>
        Error loading recaptcha provider
      </>
    )
  }

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={key}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: 'head'
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
    </>
  );
}

export default RecaptchaProvider;