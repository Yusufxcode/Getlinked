import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Judge from "./components/judge";
import FAQ from "./components/FAQ";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Partners from "./components/Partners";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "judge judge"
                  "faq faq"
                  "timeline timeline"
                  "prizes prizes"
                  "partners partners"
                  "privacy privacy"
                  "footer footer"`}
      >
        <GridItem pl="2" bg="#170E2B" area={"header"}>
          <NavBar />
          <Hero />
        </GridItem>
        <GridItem pl="2" bg="#170E2B" area={"main"}>
          <Main />
        </GridItem>
        <GridItem pl="2" bg="#170E2B" area={"judge"}>
          <Judge />
        </GridItem>
        <GridItem pl="2" bg="#170E2B" area={"faq"}>
          <FAQ />
        </GridItem>
        <GridItem pl="2" bg="#170E2B" area={"timeline"}>
          <Timeline />
        </GridItem>
        <GridItem pl="2" bg="#120B24" area={"prizes"}>
          <Prizes />
        </GridItem>
        <GridItem pl="2" bg="#170E2B" area={"partners"}>
          <Partners />
        </GridItem>
        <GridItem pl="2" bg="#170E2B" area={"privacy"}>
          <Privacy />
        </GridItem>
        <GridItem pl="2" bg="#120B24" area={"footer"}>
          <Footer />
          <Contact />
          <Register />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
