$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Application Feature",
  "description": "",
  "id": "login-application-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: User Login Scenario"
    },
    {
      "line": 4,
      "value": "#         Given User is on Appllication"
    },
    {
      "line": 5,
      "value": "#         When Applcation Page Title is is Free CRM"
    },
    {
      "line": 6,
      "value": "#         Then user enter \"ayanray123@gmai.com\" and \"Abcd1234\""
    },
    {
      "line": 7,
      "value": "#         And user clicks on Login button"
    },
    {
      "line": 8,
      "value": "#         When user navigate to user profile Page"
    }
  ],
  "line": 11,
  "name": "User Login ScenarioSecond",
  "description": "",
  "id": "login-application-feature;user-login-scenariosecond",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Appllication",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Applcation Page Title is is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigate to user profile Page",
  "keyword": "When "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-application-feature;user-login-scenariosecond;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-application-feature;user-login-scenariosecond;;1"
    },
    {
      "cells": [
        "ayanray123@gmai.com",
        "Abcd123"
      ],
      "line": 20,
      "id": "login-application-feature;user-login-scenariosecond;;2"
    },
    {
      "cells": [
        "deepa123@gmai.com",
        "Abcd123"
      ],
      "line": 21,
      "id": "login-application-feature;user-login-scenariosecond;;3"
    },
    {
      "cells": [
        "akal223@gmai.com",
        "Abcd123"
      ],
      "line": 22,
      "id": "login-application-feature;user-login-scenariosecond;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "User Login ScenarioSecond",
  "description": "",
  "id": "login-application-feature;user-login-scenariosecond;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Appllication",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Applcation Page Title is is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"ayanray123@gmai.com\" and \"Abcd123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigate to user profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_is_on_appllication()"
});
formatter.result({
  "duration": 6299525100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applcation_Page_Title_is_is_Free_CRM()"
});
formatter.result({
  "duration": 30947500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayanray123@gmai.com",
      "offset": 12
    },
    {
      "val": "Abcd123",
      "offset": 38
    }
  ],
  "location": "LoginSteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 323698100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 7111146200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_profile_Page()"
});
formatter.result({
  "duration": 3954400100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Login ScenarioSecond",
  "description": "",
  "id": "login-application-feature;user-login-scenariosecond;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Appllication",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Applcation Page Title is is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"deepa123@gmai.com\" and \"Abcd123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigate to user profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_is_on_appllication()"
});
formatter.result({
  "duration": 3292253800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applcation_Page_Title_is_is_Free_CRM()"
});
formatter.result({
  "duration": 15425500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepa123@gmai.com",
      "offset": 12
    },
    {
      "val": "Abcd123",
      "offset": 36
    }
  ],
  "location": "LoginSteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 305511600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 7117667000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_profile_Page()"
});
formatter.result({
  "duration": 13079669500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Log in to Facebook]\u003e but was:\u003c[Facebook – log in or sign up]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.LoginSteps.user_navigate_to_user_profile_Page(LoginSteps.java:56)\r\n\tat ✽.When user navigate to user profile Page(src/main/java/Features/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "User Login ScenarioSecond",
  "description": "",
  "id": "login-application-feature;user-login-scenariosecond;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Appllication",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Applcation Page Title is is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enter \"akal223@gmai.com\" and \"Abcd123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigate to user profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_is_on_appllication()"
});
formatter.result({
  "duration": 3564675200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applcation_Page_Title_is_is_Free_CRM()"
});
formatter.result({
  "duration": 19705300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akal223@gmai.com",
      "offset": 12
    },
    {
      "val": "Abcd123",
      "offset": 35
    }
  ],
  "location": "LoginSteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 309605700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 7130796800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_profile_Page()"
});
formatter.result({
  "duration": 3910167900,
  "status": "passed"
});
});