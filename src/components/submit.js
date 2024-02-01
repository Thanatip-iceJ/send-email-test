import emailjs from "@emailjs/browser";

export const handleSubmit = (e) => {
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
      },
      (error) => {
        console.log(error.text);
      }
    );
};
