package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\Features\\Login.feature", //the path of the feature files
		glue={"StepDefination"}, //the path of the step definition files
		format= {"pretty","html:test-outout", "json:report_json/cucumber.json", "junit:report_xml/cucumber.xml"},
		dryRun = false,
		monochrome = true
        ) 


public class testRunnerMy {

}
