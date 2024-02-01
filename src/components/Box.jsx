import React, { useRef, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import IconBar from "./IconBar";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Box() {
  const form = useRef(null);
  const [input, setInput] = useState({ subject: "", message: "" });
  const onChangeHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w5y9o97",
        "template_xgidpkr",
        form.current,
        "UcoBt0RyXrsablxZv"
      )
      .then(
        (result) => {
          setInput({ subject: "", message: "" });
          toast.success("Email has been sent.");
          console.log(result.text);
          console.log("sent!!!");
        },
        (error) => {
          toast.error("failed to send the email.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-5 border bg-white w-[40vw] rounded-lg">
      <h2 className="font-semibold text-xl">New Email</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <Input title="To" name={"to_email"} />
        <Input
          title="Subject"
          name={"subject"}
          bold={"font-semibold"}
          value={input.subject}
          onChange={onChangeHandle}
        />
        <Textarea
          name={"message"}
          value={input.message}
          onChange={onChangeHandle}
        />
        <div className="flex flex-col gap-5">
          <IconBar />
          <Button />
        </div>
      </form>
    </div>
  );
}

export default Box;
