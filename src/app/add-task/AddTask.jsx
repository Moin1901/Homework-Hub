"use client";
import React, { useState, useRef, useEffect } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";
import Tesseract from "tesseract.js";

const AddTask = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [reminderVisible, setReminderVisible] = useState(false); // State to control the visibility of the reminder

  const imageInputRef = useRef(null);

  const captureImageFromCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      const video = document.createElement("video");
      video.srcObject = mediaStream;
      video.play();

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");

      // Capture an image from the camera stream
      video.onloadeddata = () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const capturedImageDataUrl = canvas.toDataURL("image/jpeg");

        // Send the captured image data to the image extraction function
        extractTextFromImage(capturedImageDataUrl);

        // Clean up by stopping the media stream
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    } catch (error) {
      console.error("Error capturing image from camera: ", error);
    }
  };

  const extractTextFromImage = async (imageDataUrl) => {
    try {
      const {
        data: { text },
      } = await Tesseract.recognize(imageDataUrl, "eng");
      setTask({
        ...task,
        content: text,
      });
      setCapturedImage(imageDataUrl);
    } catch (error) {
      console.error("Error extracting text from image: ", error);
    }
  };

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    // temp solution
    userId: "64a506ab413f1d5bcafcdbec",
  });

  // const handleClearForm = () => {
  //   // Clear all form fields and the captured image
  //   setTask({
  //     title: "",
  //     content: "",
  //     status: "none",
  //     userId: "64a506ab413f1d5bcafcdbec",
  //   });
  //   setCapturedImage(null);
  // };
  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    // validate task data
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });
      // Clear all form fields and the captured image
      setTask({
        title: "",
        content: "",
        status: "none",
        userId: "64a506ab413f1d5bcafcdbec",
      });
      setCapturedImage(null);
      if (task.status === "pending") {
        // Show the reminder after a delay of 5 seconds (5000 milliseconds)
        const reminderTimeout = setTimeout(() => {
          setReminderVisible(true);
        }, 2000);

        // Clear the reminder timeout when the component unmounts
        return () => {
          clearTimeout(reminderTimeout);
        };
      } else {
        setReminderVisible(false); // Hide the reminder if the status is not "pending"
      }
    } catch (error) {
      console.log(error);
      // toast.error("Task not added !!", {
      //   position: "top-center",
      // });
    }
  };

  const handleCaptureImage = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // If the device supports getUserMedia, provide an option to capture from the camera
      captureImageFromCamera();
    } else {
      // Fallback to file input for devices that do not support getUserMedia
      imageInputRef.current.click();
    }
  };

  const handleSelectImage = () => {
    // Trigger the file input click to select an image from the device
    imageInputRef.current.click();
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-3xl text-center">Add your task here </h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/* task CONTENT */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              value={task.content}
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
            />
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button
              className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
              onClick={handleCaptureImage}
            >
              <span role="img" aria-label="camera">
                📷 Capture Image
              </span>
            </button>
            <button
              className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800 ms-3"
              onClick={handleSelectImage}
            >
              <span role="img" aria-label="folder">
                📂 Select Image
              </span>
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={imageInputRef}
              onChange={async (e) => {
                const imageFile = e.target.files[0];
                if (imageFile) {
                  const imageDataUrl = URL.createObjectURL(imageFile);
                  extractTextFromImage(imageDataUrl);
                }
              }}
            />
          </div>
          {capturedImage && (
            <img
              src={capturedImage}
              alt="Captured Homework"
              className="mt-4 rounded-lg shadow"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          )}

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {reminderVisible && (
            <div className="mt-4 bg-yellow-100 border border-yellow-300 p-3 rounded-lg text-yellow-800">
              Don't forget to complete your pending homework!
            </div>
          )}

          {/* button actions */}
          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800"
              type="submit"
            >
              Add Task
            </button>
            <button
              className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3"
              type="button"
              // onClick={handleClearForm} // Clear the form fields and the captured image
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
