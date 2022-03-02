Feature: Login Application Feature

#Scenario: User Login Scenario
#         Given User is on Appllication
#         When Applcation Page Title is is Free CRM
#         Then user enter "ayanray123@gmai.com" and "Abcd1234"
#         And user clicks on Login button
#         When user navigate to user profile Page 


Scenario Outline: User Login ScenarioSecond
         Given User is on Appllication
         When Applcation Page Title is is Free CRM
         Then user enter "<username>" and "<password>"
         And user clicks on Login button
         When user navigate to user profile Page
         When user navigate to user profile Teto
         
Examples: 
    | username | password |
    | ayanray123@gmai.com | Abcd123 |
    | deepaZZZ123@gmai.com | Abcd123 |
    | akal223@gmai.com | Abcd123 |
