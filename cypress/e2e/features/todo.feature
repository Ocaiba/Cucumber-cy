Feature:  TODO List Management

  As a user, I want to manage my TODO list so that I can keep track of my tasks.

  @scenario1
  Scenario: Visit the TODO landing page
    Given I open landing page
    Then I see landing page correctly
    And I do not see TODOs

  @scenario2
  Scenario: Add a new TODO
    Given I open landing page
    When I add new TODO with message "This is a new TODO"
    Then I see new TODO correctly with message "This is a new TODO"

  @scenario3
  Scenario: Edit the current TODO
    Given I open landing page
    And I add new TODO with message "This is a new TODO"
    When I edit TODO with message "This is the new message TOD"
    Then I see new TODO correctly with message "This is the new message TOD"

  @scenario4
  Scenario: Check one TODO
    Given I open landing page
    And I add new TODO with message "This is a new TODO"
    When I check one TODO
    Then I see TODO checked correctly

  @scenario5
  Scenario: Clear completed TODO
    Given I open landing page
    And I add new TODO with message "This is a new TODO"
    And I check one TODO
    When I clear completed TODOs
    Then I do not see TODOs

  @scenario6
  Scenario: Check "All" filter
    Given I open landing page
    And I add new TODO with message "This is a new TODO"
    And I check one TODO
    And I add new TODO with message "This is a second TODO"
    When I select "All" filter
    Then I see 1 left TODOs

  @scenario7
  Scenario: Check "Active" filter
    Given I open landing page
    And I add new TODO with message "This is a new TODO"
    And I check one TODO
    And I add new TODO with message "This is a second TODO"
    When I select "Active" filter
    Then I see 1 "left" TODOs

  @scenario8
  Scenario: Check "Completed" filter
    Given I open landing page
    And I add new TODO with message "This is a new TODO"
    And I check one TODO
    And I add new TODO with message "This is a second TODO"
    When I select "Completed" filter
    Then I see 1 "completed" TODOs
