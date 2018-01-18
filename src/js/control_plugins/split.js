
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function (controlClass, allControlClasses) {
  let controlHeader = allControlClasses.header;
  /**
   * Trumbowyg control class
   */
  class controlSplit extends controlHeader {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        i18n: {
          default: 'Split'
        }
      };
    }

    /**
     * configure the split editor requirements
     */
    configure() {
      this.config.label = 'abc';
      

    }


    /**
     * When the element is rendered into the DOM, execute the following code to initialise it
     * @param {Object} evt - event
     */
    onRender(evt) {
      // let value = this.config.value || 3.6;
      // $('#'+this.config.name).rateYo({rating: value});
    }
  }

  // register trumbowyg as a richtext control
  controlHeader.register('split', controlSplit, 'header');
});
