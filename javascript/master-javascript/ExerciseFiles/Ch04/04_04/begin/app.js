'use strict';

const loggedIn = true;

if (!!loggedIn) {
  console.log('Display user account information');
} else {
  console.log('Initiate OAuth request');
}
