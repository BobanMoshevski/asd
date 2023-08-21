// App bar logo
export const appBarLogo = {
  logoClassName: "logo",
  logoSrc: require("../../images/logo.png"),
  logoAlt: "Logo",
  logoMarginLeft: "-2%",
};

// App bar links
export const appBarLinks = [
  "HOME",
  "ABOUT US",
  "SERVICES",
  "LET'S TALK",
  "CONTACT US",
];

// Home page (top figures)
export const homeTopFigures = [
  {
    divVariant: {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: [-100, 0],
        transition: { duration: 3, delay: 3 },
      },
    },
    divClassName: "home-top-figure1",
    imageClassName: "figure1-img",
    imageSrc: require("../../images/cyborpixel-03.png"),
    imageAlt: "Home top figure 1",
  },
  {
    divVariant: {
      hidden: {
        opacity: 0,
        x: -200,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 3, delay: 3 },
      },
    },
    divClassName: "home-top-figure2",
    imageClassName: "figure2-img",
    imageSrc: require("../../images/shape1-01.png"),
    imageAlt: "Home top figure 2",
  },
  {
    divVariant: {
      hidden: {
        opacity: 0,
        y: -500,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 3, delay: 3 },
      },
    },
    divClassName: "home-top-figure3",
    imageClassName: "figure3-img",
    imageSrc: require("../../images/cyborpixel-07.png"),
    imageAlt: "Home top figure 3",
  },
  {
    divVariant: {
      hidden: {
        opacity: 0,
        y: 850,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 3, delay: 3 },
      },
    },
    divClassName: "home-top-figure4",
    imageClassName: "figure4-img",
    imageSrc: require("../../images/cyborpixel-06.png"),
    imageAlt: "Home top figure 4",
  },
  {
    divVariant: {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 3, delay: 3 },
      },
    },
    divClassName: "home-top-figure5",
    imageClassName: "figure5-img",
    imageSrc: require("../../images/cyborpixel-05.png"),
    imageAlt: "Home top figure 5",
  },
];

// Home page (what makes us component)
export const whatMakesUsFigure = {
  // figureVariant: {
  //   hidden: {
  //     opacity: 0,
  //     x: -300,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 2,
  //       delay: 0.8,
  //     },
  //   },
  // },
  divClassName: "what-makes-figure",
  figureImgClassName: "what-makes-figure-img",
  figureImgSrc: require("../../images/cyborpixel-08.png"),
  figureImgAlt: "What makes us Figure",
};

export const whatMakesUsHeading = {
  // headingVariant: {
  //   hidden: {
  //     opacity: 0,
  //     x: 300,
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 2.5,
  //       delay: 0.8,
  //     },
  //   },
  // },
  headingClassName: "heading font-color what-makes-heading",
  heading: "WHAT MAKES US DIFFERENT MAKES US BETTER",
};

export const whatMakesUsText = {
  leftText:
    "At Dark force, we thrive on what sets us apart because we believe that our differences makes us better. Our team is diverse blend of IT experts, each bringing unique skills, backgrounds, and perspectives to the table. We embrace this diversity as a driving force behind our success. By harnessing our collective knowledge and experiences, we deliver innovative IT solutions that meet the evolving needs of our clients. Our collaborative approach ensures that we leverage our diverse perspectives to tackle challenges head-on.",
  rightText:
    "We believe in thinking outside the box and finding tailored solutions that make a real impact. With our online IT services, we bring cutting-edge technology, industry expertise, and personalized support directly to your fingertips. We understand that every client is unique, and we work closely with you to provide tailored solutions that align with your goals. Trust in our team's expertise and experience. Together, we'll leverage our differences to drive your success and take your IT infrastructure to new heights",
};

// Home page (our services)
export const ourServicesFigure = {
  figureVariant: {
    hidden: {
      opacity: 0,
      x: 290,
    },
    visible: {
      opacity: 1,
      x: 90,
      transition: {
        duration: 1.5,
      },
    },
  },
  divClassName: "our-services-figure",
  figureImgClassName: "our-services-figure-img",
  figureImgSrc: require("../../images/cyborpixel-17.png"),
  figureImgAlt: "Our services figure",
};

export const ourServicesHeading = {
  headingVariant: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 90,
      transition: {
        duration: 1.5,
      },
    },
  },
  headingClassName: "heading font-color our-services-heading",
  heading: "OUR SERVICES",
  headingMarginLeft: "56.5%",
  headingMarginTop: "-380px",
  headingMarginBottom: "150px",
};

export const cardsDetail = [
  {
    cardImageSrc: require("../../images/cyborpixel-09.png"),
    cardName: "Network setup and management",
    cardWidth: "200px",
    cardHeight: "200px",
    cardImgMarginTop: "-120px",
    cardHeadingMarginTop: "0",
    cardHeadingMarginBottom: "40px",
    cardBtnPath: "/services/network-setup-and-management",
  },
  {
    cardImageSrc: require("../../images/cyborpixel-20.png"),
    cardName: "Help desk and technical support",
    cardWidth: "240px",
    cardHeight: "240px",
    cardImgMarginTop: "-110px",
    cardHeadingMarginTop: "-53px",
    cardHeadingMarginBottom: "40px",
    cardBtnPath: "/services/help-desk-and-technical-support",
  },
  {
    cardImageSrc: require("../../images/cyborpixel-24.png"),
    cardName: "Data backup and recovery",
    cardWidth: "190px",
    cardHeight: "190px",
    cardImgMarginTop: "-110px",
    cardHeadingMarginTop: "-4px",
    cardHeadingMarginBottom: "72px",
    cardBtnPath: "/services/data-backup-and-recovery",
  },
  {
    cardImageSrc: require("../../images/cyborpixel-21.png"),
    cardName: "IT consulting and strategy",
    cardWidth: "210px",
    cardHeight: "210px",
    cardImgMarginTop: "-120px",
    cardHeadingMarginTop: "0",
    cardHeadingMarginBottom: "40px",
    cardBtnPath: "/services/it-consulting-and-strategy",
  },
  {
    cardImageSrc: require("../../images/cyborpixel-22.png"),
    cardName: "Web design",
    cardWidth: "170px",
    cardHeight: "170px",
    cardImgMarginTop: "-80px",
    cardHeadingMarginTop: "0",
    cardHeadingMarginBottom: "70px",
    cardBtnPath: "/services/web-design",
  },
  {
    cardImageSrc: require("../../images/cyborpixel-23.png"),
    cardName: "Graphic design",
    cardWidth: "200px",
    cardHeight: "200px",
    cardImgMarginTop: "-115px",
    cardHeadingMarginTop: "3px",
    cardHeadingMarginBottom: "70px",
    cardBtnPath: "/services/graphic-design",
  },
  {
    cardImageSrc: require("../../images/cyborpixel-25.png"),
    cardName: "UI/UX design",
    cardWidth: "170px",
    cardHeight: "170px",
    cardImgMarginTop: "-110px",
    cardHeadingMarginTop: "3px",
    cardHeadingMarginBottom: "70px",
    cardBtnPath: "/services/ui-ux-design",
  },
];

// Home page (why choose us component)
export const whyChooseUsFigure = {
  figureVariant: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  },
  figureImgClassName: "why-choose-figure",
  figureImgSrc: require("../../images/cyborpixel-08.png"),
  figureImgAlt: "What makes us Figure",
  figureImgWidth: "1800px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "-35%",
  figureImgMarginTop: "3000px",
};

export const whyChooseUsHeading = {
  headingVariant: {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  },
  headingClassName: "heading font-color why-choose-heading",
  heading: "WHY CHOOSE US?",
  headingMarginLeft: "25%",
  headingMarginTop: "-500px",
  headingMarginBottom: "150px",
};

export const whyChooseUsCards = [
  {
    cardHeading: "PROFFESIONALISM",
    cardText:
      "Our engineers are fully tested and qualified to fix your problems.",
  },
  {
    cardHeading: "EFFICIENCY",
    cardText:
      "We have unique capabilities in reporting, notification, responsiveness, and case management so we can help you in ways that others simply can't equal.",
  },
  {
    cardHeading: "RELIABILITY",
    cardText:
      "A long-team quality guarantee applies to all the work perfomed by us",
  },
  {
    cardHeading: "WE'RE BIG ENOUGH TO SUPPORT YOU PROPERLY",
    cardText:
      "We're constantly recruiting and growing to meet our clients demands.",
  },
];

// Home page (contact us component)
export const contactUsFigure = {
  figureVariant: {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  },
  figureImgClassName: "contact-us-figure",
  figureImgSrc: require("../../images/cyborpixel-08.png"),
  figureImgAlt: "Contact us Figure",
  figureImgWidth: "1800px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "-40%",
  figureImgMarginTop: "3800px",
};

export const contactUsHeading = {
  headingVariant: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  },
  headingClassName: "heading font-color contact-us-heading",
  heading: "CONTACT US",
  headingMarginLeft: "25%",
  headingMarginTop: "-500px",
  headingMarginBottom: "150px",
};

export const homeBottomFigures = [
  {
    figureVariant: {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
        },
      },
    },
    figureClassName: "bottom-figure-1",
    figureImgSrc: require("../../images/cyborpixel-34.png"),
    figureImgAlt: "Home bottom figure 1",
  },
  {
    figureVariant: {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
        },
      },
    },
    figureClassName: "bottom-figure-2",
    figureImgSrc: require("../../images/cyborpixel-35.png"),
    figureImgAlt: "Home bottom figure 2",
  },
  {
    figureVariant: {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
        },
      },
    },
    figureClassName: "bottom-image",
    figureImgSrc: require("../../images/cyp-45.png"),
    figureImgAlt: "Home bottom image",
  },
  {
    figureVariant: {
      hidden: {
        opacity: 0,
        x: -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
        },
      },
    },
    figureClassName: "bottom-figure-3",
    figureImgSrc: require("../../images/cyborpixel-34.png"),
    figureImgAlt: "Home bottom figure 3",
  },
  {
    figureVariant: {
      hidden: {
        opacity: 0,
        x: 100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
        },
      },
    },
    figureClassName: "bottom-figure-4",
    figureImgSrc: require("../../images/cyborpixel-36.png"),
    figureImgAlt: "Home bottom figure 4",
  },
];

// Network setup and management page
export const networkSetupAndManagementFigure = {
  dataAos: "slide-up",
  dataAosOffset: "300",
  dataAosEasing: "ease-in",
  figureImgClassName: "network-setup-figure",
  figureImgSrc: require("../../images/cyborpixel-16.png"),
  figureImgAlt: "Network setup and management image figure",
  figureImgWidth: "2000px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "27%",
  figureImgMarginTop: "-200px",
};

export const networkSetupAndManagementHeading = {
  dataAos: "slide-down",
  dataAosOffset: "300",
  dataAosEasing: "ease-in",
  headingClassName: "heading font-color network-setup-heading",
  heading: "NETWORK SETUP AND MANAGEMENT",
  headingMarginLeft: "53%",
  headingMarginTop: "-500px",
};

export const networkSetupAndManagementImage = {
  dataAos: "slide-left",
  dataAosOffset: "300",
  dataAosEasing: "ease-in",
  imageClassName: "network-setup-img",
  imageSrc: require("../../images/cyborp-photos-43.png"),
  imageAlt: "Network setup and management image",
  imageWidth: "1500px",
  imageHeight: "700px",
  imageMarginLeft: "35%",
  imageMarginTop: "-20px",
};

export const networkSetupAndManagementText = {
  dataAos: "slide-right",
  dataAosOffset: "300",
  dataAosEasing: "ease-in",
  textClassName: "network-setup-text",
  textContent:
    "This service involves designing, implementing, and maintaining computer networks within an organization. It includes tasks like network configuration, troublesooting, security implementation, and performance optimization.",
  textMarginLeft: "14%",
  textMarginTop: "-450px",
};

// Help desk and technical support page
export const helpDeskAndTechnicalSupportFigure = {
  dataAos: "zoom-out-right",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  figureImgClassName: "help-desk-figure",
  figureImgSrc: require("../../images/cyborpixel-08.png"),
  figureImgAlt: "Help desk and technical support image figure",
  figureImgWidth: "2200px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "-40%",
  figureImgMarginTop: "-150px",
};

export const helpDeskAndTechnicalSupportHeading = {
  dataAos: "flip-down",
  dataAosOffset: "100",
  dataAosEasing: "ease-in",
  headingClassName: "heading font-color help-desk-heading",
  heading: "HELP DESK AND TECHNICAL SUPPORT",
  headingMarginLeft: "18%",
  headingMarginTop: "-505px",
};

export const helpDeskAndTechnicalSupportImage = {
  dataAos: "zoom-out-left",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  imageClassName: "help-desk-img",
  imageSrc: require("../../images/cyborp-photos-27.png"),
  imageAlt: "Help desk and technical support",
  imageWidth: "1300px",
  imageHeight: "700px",
  imageMarginLeft: "-7%",
  imageMarginTop: "-90px",
};

export const helpDeskAndTechnicalSupportText = {
  dataAos: "zoom-out-right",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  textClassName: "help-desk-text",
  textContent:
    "Help desk services provide assistance to end-users by addressing their IT- related issues and inquiries. This may incude troubleshooting software and hardwer problems, providing remote assistance, and offering guidance on IT best practices.",
  textMarginLeft: "55%",
  textMarginTop: "-450px",
};

// Data backup and recovery page
export const dataBackupAndRecoveryFigure = {
  dataAos: "zoom-in-right",
  dataAosOffset: "100",
  dataAosEasing: "ease-in",
  figureImgClassName: "data-backup-figure",
  figureImgSrc: require("../../images/cyborpixel-14.png"),
  figureImgAlt: "Data backup and recovery image figure",
  figureImgWidth: "2200px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "50%",
  figureImgMarginTop: "-10px",
};

export const dataBackupAndRecoveryHeading = {
  dataAos: "zoom-in-down",
  dataAosOffset: "100",
  dataAosEasing: "ease-in",
  headingClassName: "heading font-color data-backup-heading",
  heading: "DATA BACKUP AND RECOVERY",
  headingMarginLeft: "60%",
  headingMarginTop: "-615px",
};

export const dataBackupAndRecoveryImage = {
  dataAos: "zoom-in-left",
  dataAosOffset: "100",
  dataAosEasing: "ease-in",
  imageClassName: "data-backup-img",
  imageSrc: require("../../images/cyborp-photos-28.png"),
  imageAlt: "Data backup and recovery",
  imageWidth: "1100px",
  imageHeight: "600px",
  imageMarginLeft: "45%",
  imageMarginTop: "-63px",
};

export const dataBackupAndRecoveryText = {
  dataAos: "zoom-in-left",
  dataAosOffset: "100",
  dataAosEasing: "ease-in",
  textClassName: "data-backup-text",
  textContent:
    "This service involves implementing systems and processes to regulary back up important data and develop strategies for restoring data in case of loss or disaster. It includes defining backup schedules, choosing appropriate backup methods, and testing recovery procedures.",
  textMarginLeft: "15%",
  textMarginTop: "-400px",
};

// It consulting and strategy page
export const itConsultingAndStrategyFigure = {
  dataAos: "zoom-in-right",
  dataAosOffset: "300",
  dataAosEasing: "ease-in-sine",
  figureImgClassName: "it-consulting-figure",
  figureImgSrc: require("../../images/cyborpixel-08.png"),
  figureImgAlt: "Data backup and recovery image figure",
  figureWidth: "2200px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "-28%",
  figureImgMarginTop: "-150px",
};

export const itConsultingAndStrategyHeading = {
  dataAos: "zoom-in-right",
  dataAosOffset: "300",
  dataAosEasing: "ease-in-sine",
  headingClassName: "heading font-color it-consulting-heading",
  heading: "IT CONSULTING AND STRATEGY",
  headingMarginLeft: "7%",
  headingMarginTop: "-505px",
};

export const itConsultingAndStrategyImage = {
  dataAos: "zoom-in-right",
  dataAosOffset: "300",
  dataAosEasing: "ease-in",
  imageClassName: "it-consulting-img",
  imageSrc: require("../../images/cyborp-photos-29.png"),
  imageAlt: "It consulting and strategy",
  imageWidth: "1500px",
  imageHeight: "700px",
  imageMarginLeft: "-15.7%",
  imageMarginTop: "-144px",
};

export const itConsultingAndStrategyText = {
  dataAos: "zoom-in-left",
  dataAosOffset: "300",
  dataAosEasing: "ease-in-sine",
  textClassName: "it-consulting-text",
  textContent:
    "IT consulting services provide expert advice and guidance to organizations on technology-related matters. This includes assessing existing IT infrastucture, identifuing areas for improvement, and developing IT strategies aligned with business goals.",
  textMarginLeft: "55%",
  textMarginTop: "-350px",
};

// Web design page
export const webDesignFigure = {
  dataAos: "zoom-out-up",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  figureImgClassName: "web-design-figure",
  figureImgSrc: require("../../images/cyborpixel-08.png"),
  figureImgAlt: "Web design figure",
  figureImgWidth: "2200px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "54%",
  figureImgMarginTop: "-270px",
};

export const webDesignHeading = {
  dataAos: "zoom-out-down",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  headingClassName: "heading font-color web-design-heading",
  heading: "WEB DESIGN",
  headingMarginLeft: "76%",
  headingMarginTop: "-207px",
};

export const webDesignImage = {
  dataAos: "zoom-out-down",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  imageClassName: "web-design-img",
  imageSrc: require("../../images/cyborp-photos-32.png"),
  imageAlt: "Web design",
  imageWidth: "1300px",
  imageHeight: "600px",
  imageMarginLeft: "41%",
  imageMarginTop: "-54px",
};

export const webDesignText = {
  dataAos: "zoom-out-up",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  textClassName: "web-design-text",
  textContent:
    "Creation and development of websites. Web designers work on various aspects of a website, including its layout, visual elements, colorschemes, typography, and overall user experience. They aim to create websites that are visually appealing, easy to navigate, and optimized for different devices and screen sizes. Web designers often use design tools coding languages (such as HTML, CSS, and JavaScript), and content management system (such as WordPress or Drupal) to build functional and aesthetically pleasing websites. The design process typically incudes gathering requirements, creating wireframes and mockups, coding and development, and testing for usability and compatibility.",
  textMarginLeft: "10%",
  textMarginTop: "-650px",
};

// Graphic design
export const graphicDesignFigure = {
  dataAos: "zoom-out-up",
  dataAosOffset: "100",
  dataAosEasing: "linear",
  figureImgClassName: "graphic-design-figure",
  figureImgSrc: require("../../images/cyborpixel-17.png"),
  figureImgAlt: "Graphic design figure",
  figureImgWidth: "2200px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "35%",
  figureImgMarginTop: "-300px",
};

export const graphicDesignHeading = {
  dataAos: "zoom-out-down",
  dataAosOffset: "100",
  dataAosEasing: "linear",
  headingClassName: "heading font-color graphic-design-heading",
  heading: "GRAPHIC DESIGN",
  headingMarginLeft: "61%",
  headingMarginTop: "-340px",
};

export const graphicDesignImage = {
  dataAos: "zoom-out-down",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  imageClassName: "graphic-design-img",
  imageSrc: require("../../images/cyborp-photos-30.png"),
  imageAlt: "Graphic design",
  imageWidth: "900px",
  imageHeight: "500px",
  imageMarginLeft: "40%",
  imageMarginTop: "-20px",
};

export const graphicDesignText = {
  dataAos: "zoom-out-up",
  dataAosOffset: "100",
  dataAosEasing: "linear",
  textClassName: "graphic-design-text",
  textContent:
    "Help desk services provide assistance to end-users by addressing their IT-related issues and inquries. This may include troubleshooting software and hardware problems, providing remote assistance, and offering guidance on IT best practices.",
  textMarginLeft: "10%",
  textMarginTop: "-350px",
};

// UI/UX design
export const uiUxDesignFigure = {
  dataAos: "zoom-out-up",
  dataAosOffset: "100",
  dataAosEasing: "linear",
  figureImgClassName: "ui-ux-design-figure",
  figureImgSrc: require("../../images/cyborpixel-17.png"),
  figureImgAlt: "UI/UX design figure",
  figureImgWidth: "1900px",
  figureImgHeight: "800px",
  figureImgMarginLeft: "-55%",
  figureImgMarginTop: "-10px",
};

export const uiUxDesignHeading = {
  dataAos: "zoom-out-down",
  dataAosOffset: "100",
  dataAosEasing: "linear",
  headingClassName: "heading font-color ui-ux-design-heading",
  heading: "UI/UX DESIGN",
  headingMarginLeft: "17%",
  headingMarginTop: "-630px",
};

export const uiUxDesignImage = {
  dataAos: "zoom-out-down",
  dataAosOffset: "100",
  dataAosEasing: "ease-in-sine",
  imageClassName: "ui-ux-design-img",
  imageSrc: require("../../images/cyborpixel-31.png"),
  imageAlt: "UI/UX design",
  imageWidth: "1400px",
  imageHeight: "600px",
  imageMarginLeft: "-7%",
  imageMarginTop: "-100px",
};

export const uiUxDesignText = {
  dataAos: "zoom-out-up",
  dataAosOffset: "100",
  dataAosEasing: "linear",
  textClassName: "ui-ux-design-text",
  textContent:
    "Design services aim to create interface that are visually appealing, intuitive, and easy to use for end-users. User Interface (UI) design focuses on the visual aspects of an application or website, including the layout, typography, color schemes, and visual elements. UserExperience (UX) design, on the other hand, focuses on the overall experience and interaction users have with a digital product. It involves understanding user behaviors, conducting user research, creating wireframes and prototypes, and testing the usability of the design. The goal is to enhance user satisfaction, accessibility, and efficiency while using the product.",
  textMarginLeft: "60%",
  textMarginTop: "-450px",
};
