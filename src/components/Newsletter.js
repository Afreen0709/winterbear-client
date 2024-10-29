import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage(""); // Clear any previous messages

    // Form data to send
    const formData = {
      email,
      subject: "Newsletter Subscription",
      // additionalRecipients: [""],
    };

    try {
      const response = await fetch(
        "https://us-central1-email-js-1a09b.cloudfunctions.net/emailjs/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result === "Email sent successfully") {
        setMessage("Subscription successful!");
        setEmail(""); // Clear the email field on success
      } else {
        setMessage("Error: " + result);
      }
    } catch (error) {
      setMessage("Error sending email!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-5 news-latter-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading">
              <h3 className="text-dark">Newsletter Subscribe</h3>
            </div>
            <p className="text-dark px-5">
              Be among the first to stay updated on our latest collections, exclusive offers, and other special perks by subscribing to our newsletter!
            </p>
            <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="form-control mr-2 w-50"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-subscribe" disabled={isSubmitting}>
                {isSubmitting ? "Please Wait" : "Subscribe"}
              </button>
            </form>
            {message && <p className="text-dark mt-2">{message}</p>}
            <div className="row mt-4 justify-content-center">
              <div className="col-md-4 text-dark">
                <i className="fa-solid fa-phone-volume" /> +91-9035576906
              </div>
              <div className="col-md-4 text-dark">
                <i className="fa-regular fa-envelope" /> hello@winterbear.in
              </div>
              <span className="mt-4 text-dark social">
                <i className="fab rnd-bord p-2 fa-facebook" />
                <i className="fab rnd-bord p-2 fa-twitter" />
                <i className="fab rnd-bord p-2 fa-linkedin-in" />
                <i className="fab rnd-bord p-2 fa-instagram" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
