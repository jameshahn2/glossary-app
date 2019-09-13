export default function() {
  this.transition(
    this.hasClass("ember-modal-dialog"),
    this.use("crossFade", { duration: 100 })
  );
}
