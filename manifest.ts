import { Manifest } from "deno-slack-sdk/mod.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "BME IT Buddy",
  description: "A chat bot that seamlessly integrates TeamDynamix, OpenAI, and Slack to provide efficient ticket assistance for the University of Michigan Biomedical Engineering IT Department.",
  icon: "assets/BME_IT_LOGO.png",
  functions: [],
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
