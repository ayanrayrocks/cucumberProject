package StepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	WebDriver driver;
	
	@Given("^User is on Appllication$")
	public void user_is_on_appllication() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
		System.out.println("a");
		System.out.println("b");
		System.out.println("c");
		System.out.println("d");
		System.out.println("e");
		System.out.println("f");
		System.out.println("g");
	}
   
	@When("^Applcation Page Title is is Free CRM$")
	public void applcation_Page_Title_is_is_Free_CRM() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   String expected = "Facebook – log in or sign up";
	   String actual = driver.getTitle();
	   Assert.assertEquals(expected,actual);
	   System.out.println("Hi One");
	}

	@Then("^user enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_password(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//input[@id='email']")).sendKeys(username);
	    driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(password);
	}

	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.xpath("//button[@name='login']")).click();
		 Thread.sleep(7000);
	}

	@When("^user navigate to user profile Page$")
	public void user_navigate_to_user_profile_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    String expected = "Log in to Facebook";
	    String actual = driver.getTitle();
	    Assert.assertEquals(expected,actual);
	    System.out.println("Hi Two");
	    Thread.sleep(3000);
	    driver.quit();
	}
}
