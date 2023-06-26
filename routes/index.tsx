import Button from '../components/Button.tsx';
import Card from '../components/Card.tsx';
import Code from '../components/Code.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';
// import Input from '../components/Input.tsx';
import Layout from '../components/Layout.tsx';
import Link from '../components/Link.tsx';
import Linkmap from '../components/Linkmap.tsx';
import Main from '../components/Main.tsx';
// import Menu from '../components/Menu.tsx';
import Navigation from '../components/Navigation.tsx';
// import Page from '../components/Page.tsx';
// import Panel from '../components/Panel.tsx';
// import Select from '../components/Select.tsx';
import Separator from '../components/Separator.tsx';
import Text from '../components/Text.tsx';
// import TextArea from '../components/TextArea.tsx';
import { LAYOUT_TYPES, TEXT_TYPES, BUTTON_TYPES } from '../src/types/enums.ts';

export default function Home() {
  const TestTinyText = (type: TEXT_TYPES) => (
    <Text type={type}>
      Lorem <Code>ipsum</Code> dolor
    </Text>
  );

  const TestSmallText = (type: TEXT_TYPES) => (
    <Text type={type}>
      Lorem ipsum <Code>dolor sit amet</Code> consectetur adipisicing elit.
    </Text>
  );

  const TestLargeText = (type: TEXT_TYPES) => (
    <Text type={type}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe consectetur eaque ipsa
      laborum similique totam aspernatur cupiditate iusto nobis esse facere consequatur quia at quisquam,
      natus alias molestiae accusantium!
      <Code>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Code>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit saepe consectetur eaque ipsa
      laborum similique totam aspernatur cupiditate iusto nobis esse facere consequatur quia at quisquam,
      natus alias molestiae accusantium!
    </Text>
  );

  const TestLinkmap = () => (
    <Linkmap
      links={[
        { name: 'asdfghjkl', url: './' },
        { name: 'asdfghjkl' },
        {
          name: 'asdfghjkl',
          url: './',
          children: [
            { name: 'asdfghjkl', url: './' },
            { name: 'asdfghjkl', url: './', children: [{ name: 'asdfghjkl', url: './' }] },
            { name: 'asdfghjkl' },
          ],
        },
        { name: 'asdfghjkl', url: './' },
      ]}
    />
  );

  return (
    <div>
      <Navigation fixed>
        {TestTinyText(TEXT_TYPES.PARAGRAPH)}
        <div class="flex justify-end">
          <Button>Button</Button>
        </div>
      </Navigation>
      <Header layout_type={LAYOUT_TYPES.LEFT}>
        <div>
          {TestTinyText(TEXT_TYPES.TITLE)}
          {TestLargeText(TEXT_TYPES.PARAGRAPH)}
        </div>
        <TestLinkmap />
      </Header>
      <Main>
        <Layout type={LAYOUT_TYPES.CENTER}>
          <div>
            {TestTinyText(TEXT_TYPES.PARAGRAPH)}
            <Separator />
            {TestTinyText(TEXT_TYPES.SUBHEADING)}
            <Separator />
            {TestTinyText(TEXT_TYPES.HEADING)}
            <Separator />
            {TestTinyText(TEXT_TYPES.TITLE)}
            <Separator />
            {TestTinyText(TEXT_TYPES.DISPLAY)}
            <Card>
              {TestSmallText(TEXT_TYPES.SUBHEADING)}
              {TestLargeText(TEXT_TYPES.PARAGRAPH)}
            </Card>
          </div>
        </Layout>
      </Main>
      <Footer layout_type={LAYOUT_TYPES.LEFT} madeWithFresh>
        {TestTinyText(TEXT_TYPES.SUBHEADING)}
        <Text>
          Powered by&nbsp;
          <Link href="https://github.com/CarcajadaArtificial">myself</Link>.
        </Text>
        {TestLargeText(TEXT_TYPES.PARAGRAPH)}
      </Footer>
    </div>
  );
}
