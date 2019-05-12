//https://emojipedia.org
jQuery(function ($) {
  var fields = [
 
    // {
    //   type: 'split',
    //   label: '分割',
    //   subtype: 'h3',
    //   icon: '↪️'
    // },

    // {
    //   type: 'remotecomplete',
    //   label: '自动完成',
    //   subtype: 'psbi',
    //   icon: '🔍'
    // },
    // {
    //   type: 'checkbox-group',
    //   label: '复选框组',
    //   subtype: 'vertical',
    // },
    // {
    //   type: 'radio-group',
    //   label: '单选组',
    //   subtype: 'vertical',
    // }
  ];

  var replaceFields = [
    {
      type: 'header',
      subtype: 'h3',
      label: '表头'
    },
    {
      type: 'split',
      subtype: 'h3',
      label: '分块',
      icon: '↪️'
    },
    {
      type: 'remotecomplete',
      subtype: 'psbi',
      label: '自动完成',
      icon: '🔍'
    },
    {
      type: 'checkbox-group',
      subtype: 'vertical',
      label: '复选框',
    },
    {
      type: 'radio-group',
      subtype: 'vertical',
      label: '单选框',
    },
    {
      type: 'select',
      subtype: 'single',
      label: '下拉框',
    }
  ];


  var actionButtons = [];

  var typeUserDisabledAttrs = {
    autocomplete: ['access'],
    file: ['multiple'],
    'checkbox-group': ['toggle', 'inline'],
    'radio-group': ['inline'],
    remotecomplete: ['options'],
    number: ['step'],
    textarea: ['subtype', 'rows'],
    select:['multiple']
  };

  var typeUserAttrs = {

  };

  // test disabledAttrs
  var disabledAttrs = ['access',
    'placeholder', 'max', 'maxlength', 'min', 'value', 'description', 'other',];//'className',

  var fbOptions = {
    subtypes: {
      //text: ['datetime-local']
    },
    onSave: function (e, formData) {
      toggleEdit();
      $('.render-wrap').formRender({
        formData: formData,
        templates: {}
      });
      window.sessionStorage.setItem('formData', JSON.stringify(formData));
    },
    stickyControls: {
      enable: false
    },
    sortableControls: true,
    fields: fields,
    templates: [], // templates,
    inputSets: [], // inputSets,
    typeUserDisabledAttrs: typeUserDisabledAttrs,
    typeUserAttrs: typeUserAttrs,
    disableInjectedStyle: false,
    actionButtons: actionButtons,
    disableFields: ['button', 'hidden', 'paragraph', 'split', 'header', 'autocomplete', 'remotecomplete', 'checkbox','checkbox-group','radio-group'], //['autocomplete'], , 'header'
    replaceFields: replaceFields,
    disabledFieldButtons: {
      split: ['edit']
    },
    
    controlPosition: 'left',
    disabledAttrs: disabledAttrs,
    locale: 'zh-CN',
    controlOrder: [
      'text',
      'textarea',
      'date',
      'file',
      'number',
      'autocomplete',
      'remotecomplete',
      'button',
      'checkbox',
      'checkbox-group',
      'radio-group',
      'select',
      'flipswitch',
      'header',
      'hidden',
      'paragraph',
      'split'
    ],

  };
  var formData = window.sessionStorage.getItem('formData');
  var editing = true;

  if (formData) {
    fbOptions.formData = JSON.parse(formData);
  }

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing);
    return editing = !editing;
  }

  var setFormData = '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]';


  var formBuilder = $('.build-wrap').formBuilder(fbOptions);
  var fbPromise = formBuilder.promise;

  fbPromise.then(function (fb) {
    var apiBtns = {
      showData: fb.actions.showData,
      clearFields: fb.actions.clearFields,
      getData: function () {
        console.log(fb.actions.getData());
      },
      setData: function () {
        fb.actions.setData(setFormData);
      },
      addField: function () {
        var field = {
          type: 'text',
          class: 'form-control',
          label: 'Text Field added at: ' + new Date().getTime()
        };
        fb.actions.addField(field);
      },
      removeField: function () {
        fb.actions.removeField();
      },
      testSubmit: function () {
        var formData = new FormData(document.forms[0]);
        console.log('Can submit: ', document.forms[0].checkValidity());
        // Display the key/value pairs
        console.log('FormData:', formData);
        for (var pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
        }
      },
      resetDemo: function () {
        window.sessionStorage.removeItem('formData');
        location.reload();
      }
    };

    Object.keys(apiBtns).forEach(function (action) {
      document.getElementById(action)
        .addEventListener('click', function (e) {
          apiBtns[action]();
        });
    });
    //fb.actions.setLang('zh-CN');
    document.getElementById('setLanguage')
      .addEventListener('change', function (e) {
        fb.actions.setLang(e.target.value);
      });

    document.getElementById('getXML').addEventListener('click', function () {
      alert(formBuilder.actions.getData('xml'));
    });
    document.getElementById('getJSON').addEventListener('click', function () {
      alert(formBuilder.actions.getData('json', true));
    });
    document.getElementById('getJS').addEventListener('click', function () {
      alert('check console');
      console.log(formBuilder.actions.getData());
    });
  });

  document.getElementById('edit-form').onclick = function () {
    toggleEdit();
  };
});
