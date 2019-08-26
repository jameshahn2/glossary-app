import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("home", { path: "/" });
  this.route("term", function() {
    this.route("letter", { path: "/:letter" })
  });
  this.route("terms", function() {
    this.route("letter", { path: "/:letter" }, function() {
      this.route("term_id", { path: "/:term_id" });
    });
  });
  this.route("disciplines", function() {
    this.route("groups", { path: "/:groups" });
  });
});

export default Router;
