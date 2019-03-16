# Botkit Anywhere

[![Build Status](https://travis-ci.org/send-help-pl0x/botkit.svg?branch=buitim%2Ftesting)](https://travis-ci.org/send-help-pl0x/botkit)

- [Botkit Anywhere](#botkit-anywhere)
	- [Quick Start Guide](#quick-start-guide)
	- [Add Features with Botkit CMS](#add-features-with-botkit-cms)
	- [The full power of Botkit, in your app or site](#the-full-power-of-botkit-in-your-app-or-site)
	- [Customizable web-based chat client](#customizable-web-based-chat-client)
	- [Chat Server and API](#chat-server-and-api)
- [Developer & Support Community](#developer--support-community)
		- [Need more help?](#need-more-help)
- [About Botkit](#about-botkit)

Embed a bot in any web page or app with Botkit for the Web.

Botkit Anywhere is a self-contained chat server, API and web-based messaging client that has been built on top of the industry leading Botkit development stack.

## Quick Start Guide

You can deploy this starter kit project directly to Glitch, or clone it to your own development environment:

-   [Remix on Glitch](https://glitch.com/~botkit-web)

-   Use the Botkit command line utility to install locally:

```bash
npm i -g botkit
botkit new -p web
```

Once the environment is created, follow these next steps to get it up and running:

-	If you decided to manually build the web environment, in your `bot.js` file, create an instance of the bot using `Botkit.anywhere()`. This will create a Botkit controller with all of the core features as well as some additonal methods.
-	Alternatively, if you used the automated method of building the environment, simply open `bot.js` and look for `bot_options`. Here, you can customize your bot's typing delay factor, enable/disable debug mode, and decide whether to show a typing indicator.

Here are the following properties you can edit when using the Bot controller:


| Name              | Type    | Description                                          |
| ----------------- | ------- | ---------------------------------------------------- |
| studio_token      | String  | An API token from Botkit Studio                      |
| debug             | Boolean | Enable debug logging                                 |
| replyWithTyping   | Boolean | Send typing indicators automatically (default false) |
| typingDelayFactor | Float   | Adjust the speed of the typing delay                 |

When using Botkit Anywhere and the built-in web chat client, Botkit will fire a small number of native events. By default, there are four built-in events:

| Event            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| message_received | the bot has received a message                                 |
| hello            | a new user has connected to the bot                            |
| welcome_back     | a returning user has established a new connection to the bot   |
| reconnect        | an ongoing user session has experienced a disconnect/reconnect |

While we do have built-in events, you are free to add your own as well! If you automatically built the environment via the helper tool, check `skills/_connection_events.js` for and example of how t utilize these events. Here, we use specifically the `hello` and the `welcome_back` events for the `conductOnboarding` method.

A developer can also add quick replies. Quick replies are buttons that appear at the bottom of the message client, and offer suggested replies to the user. Clicking a quick reply is essentially the same as the user typing the suggested reply and sending it as a message.

To add quick replies to Botkit Web messages, include a `quick_replies` field that includes an array of objects, each with a `title` and a `payload`. The title will displayed on the button itself, while the payload is the actual text sent back to the bot by the user. See below for an example entry:

```
var reply = {
  text: 'Look, quick replies!',
  quick_replies: [
      {
          title: 'Hello',
          payload: 'hello'
      },
      {
          title: 'Help me!',
          payload: 'help'
      },
  ]
}
```

We can also send file attachments! Files can range from images, to PDFs, to MP3s. To do this, we will need to add a `files` field that includes an array of objects, each with a `url` and an `image` field. The URL field should contain a valid URL otherwise it simply won't work. The image should also be set to `true` if the file is an image. See below for an example entry:

```
var reply = {
  text: 'Look, an image!',
  files: [
      {
        url: 'http://tableflipper.com/IRX2.gif',
        image: true
      }
  ]
}
```

Finally, we have some methods to edit the bot's behavior. In this quick start guide, we will specifically be looking at how to edit the typing delay and whether to show a typing indicator.

To show a typing indicator, we can utilize a simple method of the controller object. `bot.replyWithTyping(message, reply)` works just like the normal bot.reply(), but instead of sending the message immediately, sends a typing indicator first, then waits for a short period before sending the actual message. To use this, put what you are listening for as `message` and what you want to respond with as `reply`. The delay factor is set in `typingDelayFactor` on the bot controller instantiation.

That covers all of the basics! For more in depth information, please refer to our extended and thorough "Get Started" guide available in our [documentation here](https://botkit.ai/getstarted.html).

## Add Features with Botkit CMS

Bots can be thought of as a series of pre-defined conversations, navigated by users who exchange messages with the bot application. The bot is responsible for replying with the appropriate message, and taking whatever automated actions are necessary to satisfy the user. Each "feature" of your bot will consist of one or more conversations, along with some code to power the related actions.

[Botkit CMS](https://github.com/howdyai/botkit-cms) is an optional add-on for Botkit that enables developers, designers, copywriters and other botmakers to build features for bots without writing any code by providing dialog authoring and content management tools. The visual authoring environment in Botkit CMS can be used to create branching conversations, Q&A systems, complex transactions, or any other type of conversational content.

Conversational content in Botkit CMS can be updated and expanded at any time, without requiring changes to the bot's code.

Then, with just a bit of code, your bot can access and use information from databases,
APIs and third party services as part of the conversation. The business logic
of your bot stays clean and easy to maintain by separating the form from the functionality.

[Botkit CMS](https://github.com/howdyai/botkit-cms)

## The full power of Botkit, in your app or site

Botkit's SDK powers tens-of-thousands of bots, and supports development of chatbots on
all major messaging platforms. Members of the Botkit developer community have created dozens of useful plugins,
including plugins that add compatibility with top A.I. technologies like IBM Watson, DialogFlow, and RASA.

New code-driven features can be added to this starter kit by creating "skills" which are
Javascript modules containing a set of specialized pattern matchers, handler functions and middlewares.

-   **[How to build Botkit Skill Modules](docs/how_to_build_skills.md)**
-   [Full Botkit Documentation](https://github.com/howdyai/botkit/blob/master/docs/readme.md#developing-with-botkit)

## Customizable web-based chat client

Botkit Anywhere includes an easy to customize chat client that can be used as a full-screen web app, built into the structure
of an existing page, or embedded in an entire site with an iframe.

The built-in client uses websocket connections to establish a real time connection
to your Botkit app in order to instantly send and receive messages. It supports bot-friendly
features like quick replies and image attachments. It gracefully handles failed connections
and reconnects.

The chat client is built with HTML, CSS and vanilla Javascript.
Developers can customize the look and feel of the client by modifying the included markup and CSS.
New chat features such as custom cards or actions can be added with just a little bit of code.

-   **[Web Chat Client Overview](docs/botkit_web_client.md)**
-   [How to embed a bot in your website](docs/botkit_web_client.md#embed-botkit-in-a-website-with-iframes)
-   [How to customize the look and feel of your web chat](docs/botkit_web_client.md#customize-the-look-and-feel-of-the-chat-interface)
-   [How to extend the UI of your web chat with custom fields](docs/botkit_web_client.md#using-botkit-studio-custom-fields-to-add-custom-features)
-   [How to share user account/profile info with Botkit](docs/botkit_web_client.md#share-user-accounts--profile-data-with-botkit)

## Chat Server and API

Botkit Anywhere's built-in chat server can handle thousands of simultaneous one-on-one conversations with your users.
The chat server provides both a websocket and a webhook based interface for sending and receiving messages.
It is a great solution for including one-on-one chat in a web site or native app.

Additionally, Botkit Anywhere includes APIs for retrieving a user's conversation history,
and account-linking features that enable you to identify existing users to your bot.

-   **[Chat Server Overview](docs/botkit_chat_server.md)**
-   [Communicating with Websockets](docs/botkit_chat_server.md#using-websockets)
-   [Communicating with Webhooks](docs/botkit_chat_server.md#using-webhooks)
-   [How to enable message history API](docs/botkit_chat_server.md#enable-message-history)
-   [Enable or Disable Learning Mode](docs/botkit_chat_server.md#learning-mode)

# Developer & Support Community

You can find full documentation for Botkit on [our website](https://botkit.ai/docs).

### Need more help?

-   Glitch allows users to ask the community for help directly from the editor! For more information on raising your hand, [read this blog post.](https://medium.com/glitch/just-raise-your-hand-how-glitch-helps-aa6564cb1685)

-   Join our thriving community of Botkit developers and bot enthusiasts at large. Over 9000 members strong, [our open Slack group](http://community.botkit.ai) is _the place_ for people interested in the art and science of making bots.

Come to ask questions, share your progress, and commune with your peers!

-   We also host a [regular meetup and annual conference called TALKABOT.](http://talkabot.ai) Come meet and learn from other bot developers!

[Full video of our 2016 event is available on Youtube.](https://www.youtube.com/playlist?list=PLD3JNfKLDs7WsEHSal2cfwG0Fex7A6aok)

# About Botkit

Botkit is a product of [Howdy](https://howdy.ai) and made in Austin, TX with the help of a worldwide community of botheads.
