import { mount } from '@vue/test-utils'
import IntroSection from './IntroSection.vue'

it('renders correctly', () => {
    const wrapper = mount(IntroSection)
    expect(wrapper.element).toMatchSnapshot();
  });

test('renders  IntroSection', () => {
  const wrapper = mount(IntroSection)

  const title = wrapper.get('[id="title"]')

  expect(title.text()).toBe('Jose Alvis Pena')
})
