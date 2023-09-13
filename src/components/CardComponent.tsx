"use client";

import React, { useEffect, useState } from "react";
import { Card, Modal } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import ModalComponent from "./ModalComponent";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const CardComponent = ({
  children,
  postId,
}: {
  children: React.ReactNode;
  postId: number;
}) => {
  const isClient = typeof window === "object";
  console.log("Card isClient", isClient);

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("post");

  useEffect(() => {
    if (id && postId === Number(id)) {
      setOpen(true);
    }
  }, [id]);

  const handleOpen = () => {
    router.push(`/?post=${postId}`);
  };

  const handleClose = () => {
    setOpen(false);
    router.push("/"); // 모달이 닫힐 때 원래 페이지로 돌아갑니다.
  };

  return (
    <div>
      <Card
        onClick={handleOpen}
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          width: "470px",
          padding: "20px 30px",
          marginBottom: "40px",
          backgroundColor: "#e6eeff",
        }}
      >
        {children}
      </Card>
      <ModalComponent id={postId} open={open} onClose={handleClose}>
        {children}
      </ModalComponent>
    </div>
  );
};

export default CardComponent;
