export { Mainpage } from '/test/lt-lb-umbr-demo-mainpage.js'

export const options = {
    scenarios: {
        Mainpage: {
            executor: "ramping-vus",
            exec: "Mainpage",
            startVUs: 50,
            stages: [
                {duration: '30s', target: 1000},
                {duration: '2m', target: 3000},
                {duration: '0s', target: 6000},
                {duration: '5m', target: 8000},
                {duration: '2m', target: 1000},
            ],
            gracefulRampDown: '0s',
        }
    }
};

