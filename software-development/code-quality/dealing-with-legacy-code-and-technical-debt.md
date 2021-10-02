### Definition
  1. Legacy code:
    - Usually older code, but not always
    - Code without sufficient communication artifacts to explain its intent

  Good:
    - Tests are a very effective communication artifacts
    - Other forms of documentation, including readable code

  2. Technical debt

### Getting started: Review the technical debt
  1. Familiarize yourself

  Learn how to build and run:

  * Build for development first:
    - Resources to looking for:
      + README and other text files
      + Project wiki
      + Issue tracker
    - Learn how to run the tests
    - Learn how the application is used:
      + Documentation that's intended for end users
    - Learn about architectural decisions:
      + Documentation which reveals why technical decisions were made
        + Search source code commit histories
    - Learn how to deploy
      + How the updates delivered to users?
      + Where does the application run?
        + In deployment script, README, wiki,
    - Don't get discouraged
      + Write down the unknowns that remains
      + Keep an eyes out for answers as you're working on the project


  * Compiler and other tools
  * Third-party applications, libraries, or databases
  * Are specific version needed?

  2. Remember the prime directive

  The prive directive: One rule that's more important than all others

  Norm Kerth crafted a prive directive for Agile teams to use during retrospective:

  "Regardless of what we discover, we understand and truly believe that everyone
    did the best job they could, given what they knew at the time, their skills
    and abilities, the resources available, and the situation at hand"

    * Don't judge
      - Avoid disparaging(chê bai) previous developers
      - Avoid pointing fingers and blaming
    * Stay positive
      - Your job is to improve
      - Assume positive intent, everyone did their best

  3. Skimming the code

  * Building your mental model
    -  There is alot to learn:
      + Purpose of each file
      + Project organizational structure
      + Which files interact with end users

-> Most project have more code in them than one person could possibly read.
  * Don't attempt to be exhaustive
    - Skim the code
    - Don't attempt to understand every detail
    - Open a bunch of files,  at random, if necessary

  4. Read by refactoring
  You encountered a chunk of code that was so difficult to understand, you didn't
  even know where to begin -> read by refactoring technique:


  - Created by Arlo Belshee
  - Applying small refactorings while reading code

  5. Technical debt will grow like weeds

  * Practices to embrace:
    - TDD
    - Refactoring
    - Clean code practices
    - Monitoring code quality









