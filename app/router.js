import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("home", { path: "/" });
  this.route("terms", function() {
    this.route("letter", { path: "/:letter" }, function() {
      this.route("term_id", { path: "/:term_id" });
    });
  });
  this.route("term", function() {
    this.route("letter", { path: "/:letter" });
  });
  this.route("disciplines", { path: "disciplines/:disciplines" });
});

export default Router;
