Server Side Javascript Injection (SSJI)
Obfuscate your js code to prevent hacker from reading code logic, scramble your code (tool: obfuscator, javascript2img, jscrambler)
Security detection tool: OWASP, Snyk, Retire.js, AppSensor

Do not use eval()
Do not use setTimeout(), setInterval(), execScript() with implied eval():

```javascript
setTimeout("alert('Hi')", 2000);
```
