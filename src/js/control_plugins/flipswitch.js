
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
          // default: 'flipswitch',
          // flipswitch: 'flipswitch'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
      this.config.toggle = true;
      // this.config.required = true; 
      // this.required = true;
      // console.log(this)
    }

  }

  controlClass.register(['flipswitch'], controlFlipswitch);

});
