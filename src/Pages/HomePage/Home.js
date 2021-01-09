import React from "react";
import StartSection from "../../Components/StartSection";
import CardItemImage from "../../Components/CardItemtest"; //change back to default CardItem no CardItemtest  (and import CardsSection )
import CardItemImageFootball from "../../Components/CardItemtestFootball";
import CardItemtestLuxury from "../../Components/CardItemtestLuxury";
import CardItemtestMystery from "../../Components/CardItemtestMystery";
import CardItemtestAdventure from "../../Components/CardItemtestAdventure";
import { Card } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../Components/Footer";
import { motion } from 'framer-motion';

const useStyles = makeStyles(() => ({
  gridItem: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    

    <motion.div
    transition={{
      duration: 1.5
    }}
    initial={{
      y: -2000,
      opacity: 0
    }}
    animate={{
      y: 0,
      opacity: 1
    }}>
      <StartSection />
      <Grid container justify="center" alignItems="center">
        <Grid item lg={5} sm={6} xs={12}>
          <CardItemImage />
        </Grid>
        <Grid item lg={5} sm={6} xs={12}>
          <CardItemImageFootball />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardItemtestLuxury />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardItemtestMystery />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <CardItemtestAdventure />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Home;
