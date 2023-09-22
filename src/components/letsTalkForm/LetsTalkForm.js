const LetsTalkForm = () => {
  return (
    <form className="form-wrapper">
      <div className="form-border">
        <div className="font-color form-content">
          <label>Your name*</label>
          <input type="text" />

          <label>Email*</label>
          <input type="email" />

          <label>Phone*</label>
          <input type="number" />

          <select>
            <option></option>
          </select>

          <label>Your message</label>
          <textarea></textarea>

          <button>SUBMIT</button>

          <p>
            By submitting, you agree to the DARK FORCE{" "}
            <span style={{ textDecoration: "underline" }}> Privacy Policy</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LetsTalkForm;
