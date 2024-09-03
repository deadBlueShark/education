<?php
/*
 * 1. PHP and the web server:
 * - PHP is not a web server. It has an integrated web server for debugging purposes,
 * but it’s not suitable for production use.
 * - Instead, a separate web server application receives HTTP requests, parses them,
 * and might request a response from the PHP interpreter.
 * - Web servers can use a built-in PHP interpreter module like mod_php for the
 * Apache HTTP Server.
 * - Or, PHP can run separately, like when the NGINX web server connects to PHP-FPM
 *  via the FastCGI protocol.
 *
 * a. Short-living processes:
 * - Once the PHP interpreter receives the request from the web server, it runs the PHP
 * script to generate a response and cleans up all the context and variables so that
 * when the new request comes in, the PHP script will run from scratch again.
 * Behavior like this makes PHP very different from other languages in which the
 * web server is just part of the application’s long-running process. Clean runs give
 * PHP some unique features.
 *
 * b. No memory leaks
 * All the memory used to generate the response is released after it’s generated.
 * That’s why PHP applications don’t have memory leaks
 *
 * To illustrate this, we’ll create an array with 1,000,000 integers and see how much
 * memory we’ve used. We don’t unset the array explicitly, but the Memory usage value
 * won’t grow after the page refreshes.
 */
printf('Memory usage before: %0.2f KiB <br>', memory_get_usage() / 1024);
$data = array_fill(0, 1000000, 87);
printf('Memory usage after: %0.2f KiB <br>', memory_get_usage() / 1024);

echo '<br>';

/*
 * c. The global state is request-specific
 * The global variables can only contain the data specific to the current request.
 * There can’t be clashes with other requests and user sessions, so the
 * application architecture doesn’t have to account for that.
 *
 * To illustrate this, we’ll show the user agent value from the global variable $_SERVER.
 * It will describe your browser properly even if you try calling the page from
 * two different browsers, meaning this global value is request-specific.
 */
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
printf('User agent: %s <br>', $userAgent);

/*
 * d. Hard-to-preserve state between requests
 * As a side effect of the request-specific state, we can’t just store data in a
 * variable once and read it every time we get an HTTP request.
 * That’s why PHP applications more often rely on databases.
 */
