1. Injection threats

SQL Injection, JavaScript Injection ...

One of the most common security issue in this category is referred to as cross-site
scripting attacks. This attack is basically when malicious code is executed inside
of a user input.

2. Broken authentication

-> Where a hacker is able to see or exploit user information
Examples:

- Text passwords -> Use bcrypt/crypto
- Session IDs in browser -> session libs
- Unsecured HTTP -> HTTPS

3. Sensitive data
Do not expose sensitive data to public

4. XML external entities

- Non-closed element
- Non-existing attributes
- Bad XML

XML on the attack

- Exploits malformed doc
- Causing CPU into overdrive
- DOS attack

5. Security misconfiguration

When:
- Uses dev version for prod
- Debugging is on
- Default credentials
- Improper access controls

6. Insecure deserialization

Deserialization is the transformation of data coming from a file or the network,
typically from a JSON or XML format, into an object that your application can read.
Serialization is opposite, where the object is serialized into readable JSON format

7. Components with vulnerabilities
Libraries, NPM packages...

Test with Snyk and Retire.js

8. Insufficient logging and monitoring

Most host providers have logs, monitoring
Add another tools such as ElasticSearch, Google Analytics...
