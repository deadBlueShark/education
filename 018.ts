namespace First {
  export class Example {
    log() {
      console.log('First');
    }
  }
}

namespace Second {
  export class Example {
    log() {
      console.log('Second');
    }
  }
}

new First.Example().log();
new Second.Example().log();

namespace FirstLevel {
  export namespace SecondLevelOne {
    export class Example {
      log() {
        console.log('SecondLevelOne');
      }
    }
  }

  export namespace SecondLevelTwo {
    export class Example {
      log() {
        console.log('SecondLevelTwo');
      }
    }
  }

  new FirstLevel.SecondLevelOne.Example().log();
  new FirstLevel.SecondLevelTwo.Example().log();

}
