"use client";

import React from "react";
import { PopupWidget } from "react-calendly";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL as string;

const SuccessPage = ({ params }: { params: { orderId: string } }) => {
  const orderId = params.orderId;

  return (
    <div className="App">
      {document.getElementById("root") && (
        <PopupWidget
          url={calendlyUrl}
          rootElement={document.getElementById("root")!}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      )}
    </div>
  );
};

export default SuccessPage;
