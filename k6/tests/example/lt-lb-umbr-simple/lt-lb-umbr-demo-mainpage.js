import { sleep, group } from 'k6'
import http from 'k6/http'

export function Mainpage() {
  let response

  group('page_1 - https://lt-lb-umbr-demo.k3s.ua.ukad.dev/', function () {
    response = http.get('https://lt-lb-umbr-demo.k3s.ua.ukad.dev/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
        'sec-ch-ua': '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  sleep(1)
}
