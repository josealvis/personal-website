import { mount } from '@vue/test-utils'
import Home from './Home.vue'

it('renders correctly', () => {
    const wrapper = mount(Home)
    expect(wrapper.element).toMatchSnapshot();
  });