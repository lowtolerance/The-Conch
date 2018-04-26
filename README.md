The Conch
========== 

<blockquote>But there was a stillness about Ralph as he sat that marked him out: there was his size, and attractive appearance; and most obscurely, yet most powerfully, there was <em>The Conch<em>.</blockquote>

What is The Conch
-----------------

The Conch is what I'm calling a "democratizer". Inspired by my frustration with the stubborn refusal of media center devices to cooperate with one another, The Conch is a cross-platform software solution for reconciling the innumerable propietary interfaces of modern televisions, set top boxes, consoles, etc. into a union of them all.

The name "The Conch" comes from my best friend's step-father, who would always refer to the remote controller as "the conch". Whoever had the conch got to decide what the family would watch. I always thought the name "the conch" was just a shortened version of "remote controller", but I later learned that it was actually a reference to the conch shell that the boys in *Lord of the Flies* used to estabilish their own sort of democracy.

Simply put, whoever holds The Conch gets to speak.

How does it work?
-----------------

Very well, thanks.

Ok...So then what does it *do*?
----------------------------------

The short answer is that it takes an input, looks to see if the user has defined a rule for it, looks at the current state of The Conch-connected devices, and outputs the appropriate command (or sequence of commands). For an example, we could define a rule that tells The Conch to ignore power toggle commands issued via infrared unless the targeted device is the active source. Or, for TVs that don't support volume control over HDMI-CEC, we could define a sort of "polyfill" rule that watches for volume control commands and relays the corresponding infrared command to the TV. Rules are simple and declarative. Just tell The Conch what to do, and it will attempt to determine how it can be done.

To make all of this work, The Conch needs to know a lot about your media center setup. To make this easier, it provides a device manager through a web-based front-end. Simply search for your devices in our cloud-based database, and add them to your list of devices. If a device can't be found, the device manager will try to divine the information it needs with minimal interaction from the user. Devices can also be defined and configured manually, but a core philosophy of The Conch is to keep user interactions to the bare minimum.

The Conch takes what it knows about your devices and uses that information to determine its capabilities. Tell The Conch that you've got a Raspberry Pi hooked up, and it will attempt to recruit that device to dispatch and monitor for HDMI-CEC commands. Tell it you've got an IR blaster that accepts commands via websocket, and The Conch will setup up a server to establish a websocket connection with the blaster, and it will use that to dispatch infrared signals.

The Conch also attempts to determine the state of devices in your media center, using whatever tools are at its disposal. Where it cannot say with complete certainty, it attempts to make an educated guess based on its internal state representation. 

Rules
-----

A democracy needs to establish rules in order to effectively govern. The Conch makes defining these rules simple. A rule is simply a JavaScript object that declares what input to look out for, and the output that The Conch should respond with.

```js
let irPowerToggleToCEC = {
  input: {
    command: 'TV_POWER_TOGGLE',
    protocol: 'infrared'
  }, 
  output: {
    command: 'TV_POWER_TOGGLE',
    protocol: 'hdmi-cec'
  }
}
```
In this particular case, The Conch's rule interpreter will load the object, iterate through it's properties, and determine from this what exactly needs to be done to make the mapping work quickly. 

From just these few property declarations, The Conch knows to look in its universal code table for the infrared and HDMI-CEC commands corresponding to the TV power toggle command. Then, it sets up a "listener" for our IR receiver. In my case, it sets up a websocket server that listens for messages prefixed with 'IR_BLAST' followed by the IR code itself in hex format. Finally, The Conch sets up a "talker" that will issue either a power on command or a standby command over CEC, depending on the TV's current state (CEC does not provided a power toggle command).

So from just a few simple declarations, The Conch determines the commands to look listen for, the commands to "speak", and automatically sets up and configures handlers to do all the grunt work. 

Every rule is an object that contains a pair of nested objects: an input object, and an output object. The user can declare as many properties as they'd like, but The Conch will only validate rules that make sense to it. If a mapping is impossible or ambiguous, then The Conch will issue an error. 

The Ocean
---------

The Conch follows an MVC architecture, with The Ocean representing our Model. The ocean is vast, unforgiving and teeming with all sorts of life. Our model (The Ocean) is made up of all the relevant, known data regarding our devices. The Ocean is responsible for keeping track of all of your devices. It knows what devices you have in your setup, as well as what those devices output and what they can take as input. The Ocean is a vast repository of information about home entertainment devices, crowd-sourced by information provided by you and the rest of our users.

The Island
----------
If The Ocean is our Model, then The Island is our View. The island is our paradise, an idealized microcosm of the broader world. Our view (The Island) takes all the necessary information from The Ocean and presents it to the user in a way that is easy to work with, responsive and accessible from a broad range of devices.

The Conch
---------
If The Ocean is our Model and The Island is our View, then The Conch is... you guessed it... our Controller. The Conch is the great democratizer. It is the brains and the reason behind everything. The Conch is responsible for making use of the data from The Ocean, user interactions from The Island, and manipulating that data in such a manner that our devices do our bidding, rather than the converse. The Conch represents control over both The Ocean and The Island.

