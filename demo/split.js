
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
        icon: '↙️',
        i18n: {
          default: 'Split'
        }
      };
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    // build() {
    //   return this.markup('input', null, { id: this.config.name });
    // }
    /**
     * When the element is rendered into the DOM, execute the following code to initialise it
     * @param {Object} evt - event
     */
    onRender(evt) {
      // let value = this.config.value || 3.6;
      // $('#'+this.config.name).rateYo({rating: value});
    }
  }

 // controlClass.register('split', controlSplit);// 'header'

  // controlHeader.register('split', controlSplit, 'header');
});
