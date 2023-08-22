import { Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <div
      className="font-color"
      style={{ marginLeft: "15%", marginTop: "-380px" }}
    >
      <Typography variant="h5" component="h6">
        LOCATION
      </Typography>

      <Typography variant="h6" component="p">
        999 Blue Street, Blue, Street
      </Typography>

      <Typography variant="h5" component="h6">
        CONTACT
      </Typography>

      <Typography variant="h6" component="p">
        Phone: +389 12 345 678
      </Typography>

      <Typography variant="h6" component="p">
        Mail us: darkforce@darkforce.com
      </Typography>

      <Button>LET'S TALK</Button>
    </div>
  );
};

export default Contact;
