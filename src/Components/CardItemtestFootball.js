import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    mixWidth: 200,
    margin: "auto",
    boxShadow: "10px",
    borderRadius: 7,
    margin: "23px",
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const CardItemImageFootball = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={"December 19, 2020  "}
          heading={"Adventure"}
          body={"Experience Football on Top of the Himilayan Mountains"}
        />
        <Button color={"primary"} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
});

export default CardItemImageFootball;
