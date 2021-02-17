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

  await wrapper.setProps({ visiterName: visiterName })

  expect(titleText.text().includes(visiterName)).toBeTruthy()

})

it('renders props', async () => {
  const wrapper = mount(ContactSection, {
    data() {
      return {
        inAccount: "testInAccount",
        githubAccount: "testGitAccount",
        email: "testEmail@email.com",
      };
    }
  })

  const inIcon = wrapper.get('[data-test="in-icon"]')
  const githubIcon = wrapper.get('[data-test="github-icon"]')
  const emailIcon = wrapper.get('[data-test="email-icon"]')


  expect(inIcon.attributes().href).toEqual("testInAccount")
  expect(githubIcon.attributes().href).toEqual("testGitAccount")
  expect(emailIcon.attributes().href).toEqual("mailto: testEmail@email.com")
})