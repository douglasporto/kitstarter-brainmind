import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateMessagesBR from 'vee-validate/dist/locale/pt_BR';

Validator.localize('pt_BR', {
  messages: VeeValidateMessagesBR.messages,
  custom: {
    email: {
      required: 'Precisa por o E-mail, né',
      email: 'Não cara, isso não é um E-mail'
    }
  },
  attributes: {
    email: 'E-mail'
  }
});

Vue.use(VeeValidate, {
  locale: 'pt_BR'
});

// VeeValidate.Validator.updateDictionary(dictionary);
// VeeValidate.Validator.setLocale('pt');
