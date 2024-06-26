// manifest.ts
import { Manifest } from "deno-slack-sdk/mod.ts";

// Import worksflow

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  // Internal name for app
  name: "BME IT Buddy",

  // Desc of app that lets user use it
  description: "A slack bot that integrates TeamDynamix and OpenAI to provide assistance for the University of Michigan BME IT Department.",

  // App's profo pic
  icon: "assets/BME_IT_LOGO.png",

  // ???
  functions: [],

  // workflows slack bot will use
  workflows: [],

  // If app communicates to any external domains, list here
  outgoingDomains: [],

  // Bot scopes can be declared here
  // for beta, keep as is
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
