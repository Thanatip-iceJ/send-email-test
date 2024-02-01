import React, { useRef } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import IconBar from "./IconBar";
import emailjs from "@emailjs/browser";

function Box() {
  const form = useRef(null);
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
          console.log(result.text);
          console.log("sent!!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-5 border bg-white w-[40vw] rounded-lg">
      <h2 className="font-semibold text-xl">New Email</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <Input title="To" name={"to_email"} />
        <Input title="Subject" name={"subject"} bold={"font-semibold"} />
        <Textarea name={"message"} />
        <div className="flex flex-col gap-5">
          <IconBar />
          <Button />
        </div>
      </form>
    </div>
  );
}

export default Box;
