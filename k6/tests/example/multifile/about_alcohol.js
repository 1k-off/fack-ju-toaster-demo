// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export function AboutAlcohol() {
  let response

  group('page_1 - https://test.com/en-gb/about-alcohol', function () {
    response = http.get('https://test.com/en-gb/about-alcohol', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Cookie:
          '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
        Host: 'test.com',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://test.com/_next/static/media/a9d5d1c9adc4c9fa-s.p.otf',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"16cd0-18e61582b40"',
          Origin: 'https://test.com',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/media/bf1527a0e1e4935e-s.p.otf',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"16bfc-18e61582b40"',
          Origin: 'https://test.com',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/media/da2a9e00bdbc8344-s.p.otf',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"1592c-18e61582b40"',
          Origin: 'https://test.com',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/media/da8910327db3758a-s.p.otf',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"16a28-18e61582b40"',
          Origin: 'https://test.com',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/media/ddeb376b22424226-s.p.otf',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"15a9c-18e61582b40"',
          Origin: 'https://test.com',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/media/f888d3166cc4c626-s.p.otf',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"17bd4-18e61582b40"',
          Origin: 'https://test.com',
          'Sec-Fetch-Dest': 'font',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/webpack-aace1f5a150304b7.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"f73-18e61582b40"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/fd9d1056-59b8d103f9b0721a.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"2a09e-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/69-b7efce20af0c33cc.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"1b7c2-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/main-app-211c41536461e7b5.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"1ce-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/381-029905e7d47cd51f.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"28b9-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/873-3a8be0ab5c329f7d.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 21:34:14 GMT',
          'If-None-Match': 'W/"1be8-18e5dc93ff0"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/app/%5Blocale%5D/layout-33b9eb1b98aaeaf2.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"3468-18e61582b40"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/250-0ab4ea658d65121d.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"503d-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/app/%5Blocale%5D/error-b72b226cde940e64.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 15:42:44 GMT',
          'If-None-Match': 'W/"4c39-18e5c877120"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/949-cfef3fc141fb02ec.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"3c6e-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/876-40b3d0ad1cd8cd7c.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 22:11:43 GMT',
          'If-None-Match': 'W/"487a-18e5deb9118"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/app/%5Blocale%5D/(catch-all)/(catch-all)/%5B...slug%5D/page-d5d975610ebc198d.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"50a2-18e61582b40"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/733-6395311cd250fa85.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Wed, 20 Mar 2024 21:34:14 GMT',
          'If-None-Match': 'W/"64d9-18e5dc93ff0"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/static/chunks/app/%5Blocale%5D/(catch-all)/(catch-all)/layout-fb92f5ae64118e94.js',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'If-Modified-Since': 'Thu, 21 Mar 2024 14:09:12 GMT',
          'If-None-Match': 'W/"2876-18e61582b40"',
          'Sec-Fetch-Dest': 'script',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://test.com/static/jquery-3.7.0.min.js', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Cookie:
          '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
        Host: 'test.com',
        'If-Modified-Since': 'Wed, 20 Mar 2024 22:09:51 GMT',
        'If-None-Match': 'W/"155a5-18e5de9db98"',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://footer.diageohorizon.com/dfs/master.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Faexhosms%2Fwhatisastandarddrink-ill-hero-16-9-1600x900.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Fee1jvsks%2Fdidyouknowbeer-ill-hero-16-9-1600x900.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Fvddbziyf%2Fisittruethatbeer-hero-16-9-1600x900.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Fhsufrhx1%2Fwhataredrinkingguidelines-ill-hero-16-9-1600x900.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Fk25l5nif%2Fwhatisillicitalcohol-ill-thumb-4-3-1280x960.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Flh0hxo50%2Fdrinkinganddriving-ill-hero-16-9-1600x900.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Fugmhjwme%2Fwhyisunderagedrinking-ill-hero-16-9-1600x900.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/_next/image?url=https%3A%2F%2Fmedia-diageo.diageoplatform.com%2Fdiageo-corporate-media%2Fmedia%2Fw0nkmt2w%2Fquiz-promocard-16x9.png&w=1080&q=75',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://test.com/manifest.webmanifest', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://footer.diageohorizon.com/dfs/assets/test.com/test.com_CoreScripts.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://test.com/favicon.ico', {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Cookie:
          '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
        Host: 'test.com',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test.com/?_rsc=56jzj', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Cookie:
          '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
        Host: 'test.com',
        'Next-Router-Prefetch': '1',
        'Next-Router-State-Tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en-gb%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%5B%22slug%22%2C%22about-alcohol%22%2C%22c%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%5D',
        'Next-Url': '/en-gb/about-alcohol',
        RSC: '1',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://test.com/en-gb/about-alcohol/alcohol-units-and-guidelines-explained?_rsc=56jzj',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'Next-Router-Prefetch': '1',
          'Next-Router-State-Tree':
            '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en-gb%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%5B%22slug%22%2C%22about-alcohol%22%2C%22c%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%5D',
          'Next-Url': '/en-gb/about-alcohol',
          RSC: '1',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/en-gb/about-alcohol/did-you-know-beer-wine-and-spirits-all-contain-ethanol?_rsc=56jzj',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'Next-Router-Prefetch': '1',
          'Next-Router-State-Tree':
            '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en-gb%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%5B%22slug%22%2C%22about-alcohol%22%2C%22c%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%5D',
          'Next-Url': '/en-gb/about-alcohol',
          RSC: '1',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/en-gb/about-alcohol/is-it-true-that-beer-is-better-for-you-than-wine?_rsc=56jzj',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'Next-Router-Prefetch': '1',
          'Next-Router-State-Tree':
            '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en-gb%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%5B%22slug%22%2C%22about-alcohol%22%2C%22c%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%5D',
          'Next-Url': '/en-gb/about-alcohol',
          RSC: '1',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://test.com/en-gb/about-alcohol/what-are-drinking-guidelines-and-why-are-they-important?_rsc=56jzj',
      {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A01+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
          Host: 'test.com',
          'Next-Router-Prefetch': '1',
          'Next-Router-State-Tree':
            '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en-gb%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%5B%22slug%22%2C%22about-alcohol%22%2C%22c%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%5D',
          'Next-Url': '/en-gb/about-alcohol',
          RSC: '1',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://www.googletagmanager.com/gtm.js?id=GTM-KWVVFQ', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://footer.diageohorizon.com/dfs/assets/test.com/footerOverride_url.js?_=1711031063857',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        },
      }
    )
    response = http.get('https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://web.diageoagegate.com/api/country.php?callback=jQuery370019316280663876628_1711031063858&format=json&_=1711031063859',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        },
      }
    )
    response = http.get(
      'https://cdn-ukwest.onetrust.com/consent/b79e3eb4-2c69-492b-89e3-91869ea4e6de-test/b79e3eb4-2c69-492b-89e3-91869ea4e6de-test.json',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://cdn-ukwest.onetrust.com/scripttemplates/202401.1.0/otBannerSdk.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.post(
      'https://www.google-analytics.com/j/collect?v=1&_v=j101&aip=1&a=553135439&t=pageview&_s=1&dl=https%3A%2F%2Ftest.com%2Fen-gb%2Fabout-alcohol&dp=%2Fen-gb%2Fabout-alcohol&ul=en-us&de=UTF-8&dt=About%20alcohol%20%7C%20DRINKiQ%20UK&sd=24-bit&sr=2560x1440&vp=1377x1318&je=0&_u=QACAAEABAAAAACgEKi~&cid=1235771358.1695879357&tid=UA-65254468-1&_gid=549753978.1711024951&_slc=1&gtm=45He43k0n71KWVVFQv71149771za200&cd3=v2&cd6=DrinkIQ&cd7=1235771358.1695879357&gcs=G111&gcd=13v3v3l3l5&dma=0&z=1899318077',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain',
          origin: 'https://test.com',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        },
      }
    )
    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j101&aip=1&a=553135439&t=event&ni=1&_s=1&dl=https%3A%2F%2Ftest.com%2Fen-gb%2Fabout-alcohol&dp=%2Fen-gb%2Fabout-alcohol&ul=en-us&de=UTF-8&dt=About%20alcohol%20%7C%20DRINKiQ%20UK&sd=24-bit&sr=2560x1440&vp=1377x1318&je=0&ec=Agegate%20Country%20Detection%20Trial&ea=OneTrustGroupsUpdated%20-%20&el=unknown&_u=QACAAEABAAAAACgEKiC~&cid=1235771358.1695879357&tid=UA-65254468-1&_gid=549753978.1711024951&gtm=45He43k0n71KWVVFQv71149771za200&cd3=v2&cd6=DrinkIQ&cd7=1235771358.1695879357&gcs=G111&gcd=13v3v3l3l5&dma=0&z=63512525',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        },
      }
    )
    response = http.get(
      'https://cdn-ukwest.onetrust.com/consent/b79e3eb4-2c69-492b-89e3-91869ea4e6de-test/7381e06e-e367-4169-9570-5dd611b6c358/en-us.json',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://cdn-ukwest.onetrust.com/scripttemplates/202401.1.0/assets/otCenterRounded.json',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://cdn-ukwest.onetrust.com/scripttemplates/202401.1.0/assets/v2/otPcTab.json',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://cdn-ukwest.onetrust.com/scripttemplates/202401.1.0/assets/otCommonStyles.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://cdn-ukwest.onetrust.com/logos/a9d71640-d3c6-49bc-bdfc-3b401ef238f2/5e6cdc75-fad3-4422-853e-1c630a40b431/Diageo-Logo-Gold.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://cdn-ukwest.onetrust.com/logos/static/powered_by_logo.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://cdn-ukwest.onetrust.com/logos/static/ot_guard_logo.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://test.com/en-gb', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Cookie:
          '_ga_6SGRT6YW75=GS1.1.1697189453.6.0.1697189456.0.0.0; OptanonAlertBoxClosed=2023-11-27T15:42:19.804Z; _ga_VPW8RLNNQ4=GS1.1.1701851446.6.1.1701851477.0.0.0; _ga_T0DSR6FEPY=GS1.1.1701857841.2.0.1701857841.0.0.0; _ga_2TD0R1PLFV=GS1.1.1705063470.5.1.1705065068.0.0.0; _ga_F2T647MNF2=GS1.1.1705063470.19.1.1705065068.0.0.0; _ga=GA1.2.1235771358.1695879357; _gid=GA1.2.549753978.1711024951; hasPickedLocale=true; pickedLocale=en-gb; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Mar+21+2024+16%3A24%3A24+GMT%2B0200+(Eastern+European+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c339612b-8508-4c24-8570-66f7e5afcdd4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false&geolocation=UA%3B63',
        Host: 'test.com',
        'Next-Router-Prefetch': '1',
        'Next-Router-State-Tree':
          '%5B%22%22%2C%7B%22children%22%3A%5B%5B%22locale%22%2C%22en-gb%22%2C%22d%22%5D%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%22(catch-all)%22%2C%7B%22children%22%3A%5B%5B%22slug%22%2C%22about-alcohol%22%2C%22c%22%5D%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D%7D%5D',
        'Next-Url': '/en-gb/about-alcohol',
        RSC: '1',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://footer.diageohorizon.com/dfs/dg_footer.loader.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://footer.diageohorizon.com/dfs/common/dg_footer.builder.1.1.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://footer.diageohorizon.com/dfs/common/PCN_version.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://footer.diageohorizon.com/dfs/common/dg_footer.1.1.template.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        Referer: '',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://footer.diageohorizon.com/dfs/assets/test.com/test.com_en-gb_footer.locale.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
          Referer: '',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(0.1)
}
