const style = "color: #00B0FF"

module.exports = function yule(target, key, descriptor) {
  const original = descriptor.value;

  descriptor.value = function(...args) {
    const self = this;

    return function() {
      const methodCallback = function() {
        console.log(`%cYule: Starting method ${key} with args`, style, args);

        const result = original.apply(self, args);

        if (result) {
          console.log(`%cYule: Finished method ${key} with result`, style, result);
        } else {
          console.log(`%cYule: Finished method ${key}`, style)
        }

        return result;
      };
      return methodCallback();
    }();
  };

  return descriptor;
}
