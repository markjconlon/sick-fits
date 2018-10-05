import App, { Container } from 'next/app';
import Page from '../components/Page'
class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
        <Component /> {/* the top level component that we are rendering */}
        </Page>
      </Container>
    );
  }
}
export default MyApp;
