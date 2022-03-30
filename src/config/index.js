module.exports = {
  email: "sudheshnadonthineni@gmail.com",
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/sudheshna-donthineni",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sudonthineni/",
    },

    {
      name: "Instagram",
      url: "https://www.instagram.com/_sudheshna/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sudonthineni",
    },
    {
      name: "Youtube",
      url: "https://twitter.com/sudonthineni",
    },
    {
      name: "Email",
      url: "https://twitter.com/sudonthineni",
    },
    {
      name: "Pinterest",
      url: "https://twitter.com/sudonthineni",
    },
  ],
  srConfig: (delay = 200) => {
    return {
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      mobile: true,
      reset: false,
      useDelay: "always",
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }
  },
}
