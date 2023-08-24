const LetsTalkForm = () => {
  return (
    <form style={{ width: "30%", margin: "auto", marginTop: "-500px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
    </form>
  );
};

export default LetsTalkForm;
