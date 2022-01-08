Feature: Hear shout
  Scenario: Listener hear message within range
    Given Lucy is located 15 metres from Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy hears Sean's message

  Scenario: Listener hear different message within range
    Given Lucy is located 15 metres from Sean
    When Sean shouts "hello there"
    Then Lucy hears Sean's message
