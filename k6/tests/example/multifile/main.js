export { AboutAlcohol } from '/app/about_alcohol.js'
export { DrinkingAndYourBody } from '/app/drinking_and_your_body.js'
export { DrinkingAndYourMind } from '/app/drinking_and_your_mind.js'
export { SupportWithDrinkIQ } from '/app/support.js'
export { MainPage } from '/app/mainpage.js'

export const options = {
  scenarios: {
    MainPage: {
      executor: "ramping-vus",
      exec: "MainPage",
      startVUs: 50,
      stages: [
        { duration: '30s', target: 100 },
        { duration: '2m', target: 50 },
        { duration: '0s', target: 200 },
        { duration: '5m', target: 250 },
        { duration: '2m', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
    SupportWithDrinkIQ: {
      executor: "ramping-vus",
      exec: "Support",
      startVUs: 50,
      stages: [
        { duration: '30s', target: 100 },
        { duration: '2m', target: 50 },
        { duration: '0s', target: 200 },
        { duration: '5m', target: 250 },
        { duration: '2m', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
    DrinkingAndYourMind: {
      executor: "ramping-vus",
      exec: "DrinkingAndYourMind",
      startVUs: 50,
      stages: [
        { duration: '30s', target: 100 },
        { duration: '2m', target: 50 },
        { duration: '0s', target: 200 },
        { duration: '5m', target: 250 },
        { duration: '2m', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
    DrinkingAndYourBody: {
      executor: "ramping-vus",
      exec: "DrinkingAndYourBody",
      startVUs: 50,
      stages: [
        { duration: '30s', target: 100 },
        { duration: '2m', target: 50 },
        { duration: '0s', target: 200 },
        { duration: '5m', target: 250 },
        { duration: '2m', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
    AboutAlcohol: {
      executor: "ramping-vus",
      exec: "AboutAlcohol",
      startVUs: 50,
      stages: [
        { duration: '30s', target: 100 },
        { duration: '2m', target: 50 },
        { duration: '0s', target: 200 },
        { duration: '5m', target: 250 },
        { duration: '2m', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

