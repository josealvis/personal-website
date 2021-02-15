import { mount } from '@vue/test-utils'
import ContactSection from './ContactSection.vue'

it('renders correctly', () => {
    const wrapper = mount(ContactSection)
    expect(wrapper.element).toMatchSnapshot();
  });

it('renders a visiter name in title', async () => {
    const wrapper = mount(ContactSection)
    const visiterName = "Robot Test"

    const titleText = wrapper.get('[data-test="contact-title"]')

    expect(titleText.text().includes(visiterName)).toBeFalsy()

    await wrapper.setProps({visiterName: visiterName})
    
    expect(titleText.text().includes(visiterName)).toBeTruthy()

})