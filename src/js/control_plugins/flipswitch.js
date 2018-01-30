
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function (controlClass, allControlClasses) {
  let controlCheckbox = allControlClasses.checkbox;
  /**
   * Trumbowyg control class
   */
  class controlFlipswitch extends controlCheckbox {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        i18n: {
          flipswitch: 'Flip Switch'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
      this.config.toggle = true;
    }

  }

  controlClass.register(['flipswitch'], controlFlipswitch);

});
