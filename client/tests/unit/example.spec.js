import { shallowMount } from '@vue/test-utils';
import bmApp from '../../src/App';

describe('App.vue', () => {
  it('renders App', () => {
    // arrange
    //const wrapper = shallowMount(App); simple
    const wrapper = shallowMount(bmApp, {
      stubs: ['router-link', 'router-view']
    });

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });
});
