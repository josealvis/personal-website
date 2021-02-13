import { mount } from '@vue/test-utils'
import  IntroSection from './IntroSection.vue'

test('renders  IntroSection', () => {
  const wrapper = mount(IntroSection)

  const title = wrapper.get('[id="title"]')

  expect(title.text()).toBe('Jose Alvis Pena')
})