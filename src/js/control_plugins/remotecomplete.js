
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function (controlClass, allControlClasses) {
  let controlAutocomplete = allControlClasses.autocomplete;
  /**
   * Trumbowyg control class
   */
  class controlRemotecomplete extends controlAutocomplete {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        // i18n: {
        //   psbi: 'psbi',
        //   psbm: 'psbm',
        //   psbn: 'psbn',
        //   bpid: 'bpid',
        // }
      };
    }



    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
      // return this.markup('span', null, {id: this.config.name});
      return this.markup('input', null, this.config);
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

  //   controlClass.register(['remotecomplete'], controlRemotecomplete);
  controlClass.register(['psbi', 'psbm', 'psbn', 'bpid'], controlRemotecomplete, 'remotecomplete');



  // control.register(['paragraph', 'header','split'], controlParagraph);
  // control.register(['p', 'address', 'blockquote', 'canvas', 'output'], controlParagraph, 'paragraph');
  // control.register(['h1', 'h2', 'h3'], controlParagraph, 'header');
  // control.register(['h1', 'h2', 'h3'], controlParagraph, 'split');

  // psbi: "autocomplete for user id",
  // psbm: "autocomplete for user email",
  // psbn: "autocomplete for user name",
  // bpid: "autocomplete for process definition id"

});
