import ButtonComponent from "../buttonComponent/ButtonComponent";

const Contact = () => {
  return (
    <div className="font-color contact-wrapper">
      <h6 className="contact-heading">LOCATION</h6>

      <p className="contact-text">999 Blue Street, Blue, Street</p>

      <h6 className="contact-heading">CONTACT</h6>

      <p className="contact-text phone-contact">Phone: +389 12 345 678</p>

      <p className="contact-text mail-contact">
        Mail us: darkforce@darkforce.com
      </p>

      <ButtonComponent btnText={"LET'S TALK"} />
    </div>
  );
};

export default Contact;
