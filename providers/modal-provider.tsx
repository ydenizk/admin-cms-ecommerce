"use client";

import { StoreModal } from "@/components/modals/store-modal";
import React, { useEffect, useState } from "react";

//HYDRATION dan kurtulmak için yapılıor!!!!
//storemodal ı layout a wrap leyeceğiz,o yuzden client component yapmak için provider yapıoruz.
//hydration error dan sakınmak için,yani ismounted false sa server side çalışacak.modal sadece client side da çalışacak!!!!!!!
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
