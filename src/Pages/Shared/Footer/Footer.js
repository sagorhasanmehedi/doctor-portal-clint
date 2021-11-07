import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import footer from "../../../images/footer-bg.png";
import "./Footer.css";
import { Container, Typography } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${footer})`,
        padding: "100px 0 30px 0",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      sx={{ flexGrow: 1 }}
    >
      <Container>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={3}>
              <Box
                className="fotter-text"
                sx={{ textDecoration: "none", textAlign: "left", pt: "65px" }}
              >
                <li>Emergency Dental Care</li>
                <li>Check Up</li>
                <li>Treatment of Personal Diseases</li>
                <li>Tooth Extraction</li>
                <li>Check Up</li>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Box
                className="fotter-text"
                sx={{ textDecoration: "none", textAlign: "left" }}
              >
                <li className="footer-heading">SERVICES</li>
                <li>Refer a Patient</li>
                <li>Find a Doctor</li>
                <li>Find a Location</li>
                <li>Tooth Extraction</li>
                <li>Physician News</li>
                <li>Get Involved</li>
                <li> Ways to Give</li>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Box
                className="fotter-text"
                sx={{ textDecoration: "none", textAlign: "left" }}
              >
                <li className="footer-heading"> ABOUT CITY OF HOPE</li>
                <li>Who We Are</li>
                <li>Visit Our Newsroom</li>
                <li>Community Benefit</li>
                <li>Website Feedback Form</li>
                <li>Check Up</li>
                <li>Contact Us</li>
                <li>Sitemap</li>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Box
                className="fotter-text"
                sx={{ textDecoration: "none", textAlign: "left" }}
              >
                <li className="footer-heading"> OUR ADDRESS</li>
                <li>
                  {" "}
                  400 North Pepper Ave. <br />
                  Colton, CA 92324
                </li>
                <Box>
                  <FacebookRoundedIcon className="footerison" />
                  <GoogleIcon className="footerison" />
                  <TwitterIcon className="footerison" />
                </Box>
                <li id="callnow">Call Now</li>
                <button className="footerbutton">+20009388</button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              mt: 12,
              typography: "body2",
              fontWeight: "700",
              color: "gray",
            }}
          >
            © 2021 CITY OF HOPE and the City of Hope logo are registered .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
