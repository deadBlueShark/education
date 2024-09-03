### HTTP: Hypertext Transfer Protocol (Secure).

*Both HTTP requests and responses consist of two main parts:*
+ Header
+ Body

The request schema looks like this:
+ The start-line with the HTTP method, address, and protocol version...
Ex: GET /get?foo=bar HTTP/1.1
+ Request headers, one per line in the format Name: Value. 
Ex: Host: httpbin.org
+ A blank line to show that the header section is over.
+ The optional request body might be binary.

The response schema looks like this:
+ The start-line with the protocol version, status code, and status string. 
Ex: HTTP/1.1 200 OK.
+ Response headers, one per line in the format Name: Value
Ex: Content-Type: application/json.
+ A blank line to show that the header section is over.
+ The optional response body might be binary.

Example:
```bash
❯ curl -v 'http://httpbin.org/get?foo=bar'

* Host httpbin.org:80 was resolved.
* IPv6: (none)
* IPv4: 44.193.104.184, 34.199.14.71
*   Trying 44.193.104.184:80...
* Connected to httpbin.org (44.193.104.184) port 80
> GET /get?foo=bar HTTP/1.1
> Host: httpbin.org
> User-Agent: curl/8.7.1
> Accept: */*
> 
* Request completely sent off
< HTTP/1.1 200 OK
< Date: Tue, 03 Sep 2024 05:16:17 GMT
< Content-Type: application/json
< Content-Length: 283
< Connection: keep-alive
< Server: gunicorn/19.9.0
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Credentials: true
< 
{
  "args": {
    "foo": "bar"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-66d69ba1-577a7c305f9d8e4c337b92c9"
  }, 
  "origin": "171.225.184.218", 
  "url": "http://httpbin.org/get?foo=bar"
}
* Connection #0 to host httpbin.org left intact
```
