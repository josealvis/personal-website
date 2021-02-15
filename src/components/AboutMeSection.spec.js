import { mount } from '@vue/test-utils'
import AboutMeSection from './AboutMeSection.vue'

it('renders correctly', () => {
    const wrapper = mount(AboutMeSection)
    expect(wrapper.element).toMatchSnapshot();
  });

it('renders a visiter name in the text about me', async () => {
    const wrapper = mount(AboutMeSection)
    const visiterName = "Robot Test"

    const descriptionText = wrapper.get('[data-test="about-text"]')

    expect(descriptionText.text().includes(visiterName)).toBeFalsy()

    await wrapper.setProps({visiterName: visiterName})
    
    expect(descriptionText.text().includes(visiterName)).toBeTruthy()

})