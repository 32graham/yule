# Yule

Yule is a ES2016 decorator that helps you debug methods by logging information to
the console both before and after invocation.

## Example
When debugging a method it is common to put console log statements at the top and bottom to observe when it is getting called and what parameters were passed to it. Yule makes the process easier, just import Yule and decorate the method(s) you want to observe.

```js
import yule from "yule";

class Cat {
  @yule
  meow(tone) {
    if (tone === "sassy") {
      console.log("me-oooow");
    } else {
      console.log("meow");
    }

    return "purr";
  }
}

let cat = new Cat();
cat.meow("sassy");
```

Open up the console and you will see the following.

```
Yule: Starting method meow with args ["sassy"]
me-oooow
Yule: Finished method meow with result purr
```
