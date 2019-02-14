package my.gatling.simulation

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import java.util.Calendar

class GetSomeNews extends Simulation() {

  val httpConf = http
    .baseURL("/")
    .acceptHeader("application/x-www-form-urlencoded")

  def authHeader (auth_token:String):Map[String, String] = {
    Map("Authorization" -> "Bearer ".concat(auth_token))
  }

  val scn =
    scenario(">>> opening_googlenews_homepage >>>")
      .exec(
        http("Get some google news")
          .get("https://news.google.com")
          .header("Content-Type", "application/json")
          .header("Accept", "application/json")
          .check(status.is(200))
          .check(bodyString.saveAs("BODY1"))
      )
  setUp(
    scn.inject(atOnceUsers(5)).protocols(httpConf)
  )
//If you want to ramp multiple users incrementaly.
//    val userCount = Integer.getInteger("users", 1)
//    val durationInSeconds  = java.lang.Long.getLong("duration", 1L)
//  setUp(
//      scn.inject(rampUsers(userCount) over (durationInSeconds seconds))
//  ).protocols(httpConf)
}

