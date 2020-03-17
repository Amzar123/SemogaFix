import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Links from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
// import logo from "../images/gear-with-holes.svg";
import logo from "../images/gear.png";
// import xmark from "../images/x-mark.svg";
import xmark from "../images/3526768.jpg";
import check from "../images/check-mark.svg";
import facebook from "../images/fbookicon.svg";
import instagram from "../images/instaicon.svg";
// import instagram from "../images/instagram.png";
import youtube from "../images/youtubeicon.svg";
import twitter from "../images/twittericon.svg";
// import twitter from "../images/twitter.png";
import "../styles/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    countdown: {
      countdownDate: "2020-3-20 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow"
    },
    title: {
      text: "Sorry this website is under maintenance!"
    },
    description: {
      text:
        "#TenangDiaMasihDiBumi"
    },
    // subscribe: {
    //   placeholder: "Type here for your suggestion",
    //   buttonText: "Submit"
    // },
    links: [
      // {
      //   url: "https://www.facebook.com/groups/CodingFromNull",
      //   logo: facebook,
      //   text: "Join"
      // },
      {
        url: "https://www.instagram.com/_temuin/",
        logo: instagram,
        text: "Follow"
      },
      // {
      //   url: "https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w",
      //   logo: youtube,
      //   text: "Watch"
      // },
      {
        url: " https://twitter.com/_temuin",
        logo: twitter,
        text: "Tweet"
      }
    ],
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureNotification = obj => {
    const notification = { ...this.state.notification };
    notification.message = obj.body.msg;
    if (obj.status === 200) {
      notification.src = check
      notification.alt = "Check Mark"
      notification.level = "success"
    } else {
      notification.src = xmark
      notification.alt = "X Mark"
      notification.level = "error"
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {
      title,
      description,
      logo,
      // subscribe,
      links,
      countdown,
      notification
    } = this.state;

    return (
      <div className="background">
        <Countdown countdownDate={countdown.countdownDate} />
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        {/* <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          changeLogoSpeed={this.changeLogoSpeed}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        /> */}
        <Links links={links} />
      </div>
    );
  }
}

export default ComingSoon;
