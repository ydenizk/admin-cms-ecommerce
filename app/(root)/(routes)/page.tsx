"use client";

import { useStoreModal } from "@/zustand-hooks/use-store-modal";
import { useEffect } from "react";
import { StoreModal } from "@/components/modals/store-modal";

export default function SetUpHome() {
  //zustand dan farklı şekilde aldık bu sefer,aynı şey.özellikle useeffect içinde kullanacağımız için bu şejilde aldık...
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      <StoreModal />
    </div>
  );
}
