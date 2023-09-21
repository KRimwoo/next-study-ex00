"use client";

import ModalComponent from "@/components/ModalComponent";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

type PostInputs = {
  username: string;
  avatar: FileList;
  content: FileList;
};

const Write: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostInputs>();

  const handleClose = () => {
    router.push("/"); // 모달이 닫힐 때 원래 페이지로 돌아갑니다.
  };

  const onSubmit: SubmitHandler<PostInputs> = async (data) => {
    console.log(data);
    const formData = new FormData();
    // formData.append("username", data.username);
    // formData.append("avatar", data.avatar[0]);
    // formData.append("content", data.content[0]);

    try {
      const response = await axios.post(
        "http://localhost:4000/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
    }
    //router.push("/");
  };

  return (
    <ModalComponent id={-1} open={true} onClose={handleClose}>
      <div style={{ width: "100%", height: "100%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              textAlign: "left",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              type="file"
              {...register("avatar", { required: true })}
              style={{
                backgroundColor: "#fff",
                marginRight: "10px",
              }}
            />
            {errors.avatar && <span>Profile image is required</span>}
            <input
              {...register("username", { required: true })}
              placeholder="Your name"
            />
            {errors.username && <span>Name field is required</span>}
          </div>
          <div>
            <input
              type="file"
              {...register("content", { required: true })}
              style={{ width: "100%" }}
            />
            {errors.content && <span>Content image is required</span>}
          </div>
          <button type="submit">Post!</button>
        </form>
      </div>
    </ModalComponent>
  );
};

export default Write;
