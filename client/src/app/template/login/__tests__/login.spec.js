import { shallowMount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import bmLogin from '../main';
import VeeValidate from 'vee-validate';

let localVue = createLocalVue();
localVue.use(VeeValidate);

describe('Login.vue', () => {
  const build = () => {
    const wrapper = shallowMount(bmLogin, { localVue });
    return {
      wrapper
    };
  };

  it('Renders Login', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Expect data', () => {
    const { wrapper } = build();
    expect(wrapper.vm.email).toBe('diego3@rocketseat.com.br');
  });

  // it('Expect error E-mail', () => {
  //   const { wrapper } = build();
  //   wrapper.setData({
  //     email: 'douglas@'
  //   });
  //   console.log('doug', wrapper.find('.teste'));
  //   expect(wrapper.find('.teste')).toContain('Não cara, isso não é um E-mail');
  // });
  it('watches input value on model change', async () => {
    const { wrapper } = build();
    // const wrapper = shallowMount(bmLogin, { localVue });
    expect(wrapper.vm.errors.count()).toBe(0);
    // console.log(wrapper.vm.email);
    const input = wrapper.find('.form-group');
    input.trigger('input');
    console.log(input);
    wrapper.setData({ email: 'douglas' });
    wrapper.trigger('body');
    // console.log(wrapper.vm.errors);
    flushPromises();
    expect(wrapper.vm.errors.has('field')).toBe(true);
  });
});
