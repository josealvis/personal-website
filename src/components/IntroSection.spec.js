import { mount } from '@vue/test-utils'
import  IntroSection from './IntroSection.vue'

test('renders  IntroSection', () => {
  const wrapper = mount(IntroSection)

  const todo = wrapper.get('[id="title"]')

  expect(todo.text()).toBe('Jose Alvis Pena')
})