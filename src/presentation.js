// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            10 Reasons to Use React For UI
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React is the most compelling UI framework of now and the near future.  
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Additionally, any new developments in User Interface development will go through the doors React creates.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
          1.	Component based Architecture
          </Heading>
          <List>
            <ListItem>
            Localize events and state to a section of the layout and eliminate spaghetti messes.
            </ListItem>
            <ListItem>
            Approach layout architecture intuitively and logically, as a hierarchical composition of self-sustaining elements.
            </ListItem>
            <ListItem>
            The way the DOM API should have always been interface with.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={4} textColor="secondary">
        2.	Best-in-class in-memory rendering and VDOM
        </Heading>
          <List>
            <ListItem>Update the DOM asynchronously as needed, limiting wasteful rerenders </ListItem>
            <ListItem>Modern Apps' snappiness relies on SPA feature of client side rendering</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
        <Heading size={4} textColor="primary">
        3. Top of the line performance
        </Heading>
        <List>
            <ListItem>Performance gains seen from VDOM reactive rendering </ListItem>
            <ListItem>Built in Lifecycle methods like shouldComponentUpdate() make performance improvements customizable</ListItem>
          </List>
        </Slide>

       
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
          4. Intuitive Syntax and Semantics
          </Heading>
          <List>
            <ListItem>
            Class based components brings a familiar OOP style for organinzing functionality and simplifying context.
            </ListItem>
            <ListItem>
            Presentational components and data handling containers further simplifies the process of creating compositional interfaces from elements with simplified purposes.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={4} textColor="secondary">
        5. Melds seamlessly with current Javascript 
        </Heading>
          <List>
            <ListItem>Alot of what you write in React is just Javascript</ListItem>
            <ListItem>Javascript (since 1995) has been around for one year less than PHP(since 1994).</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
        <Heading size={4} textColor="primary">
        6. Effective and efficient state management and data interpolation 
        </Heading>
        <List>
            <ListItem>JSX interpolation</ListItem>
            <ListItem>State to Props Data Flow</ListItem>
            <ListItem>Life cycle methods to plug into the stages of component rendering</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
          7. React is just the View
          </Heading>
          <List>
            <ListItem>
            Blends easily with whatever back end structure we choose
            </ListItem>
            <ListItem>
           Unlike Angular, for example, which comes with controllers and routers that cross oer to teh server land
           </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={4} textColor="secondary">
        8. React is the prevailing way to build UI
        </Heading>
          <List>
            <ListItem>It is the most popular library</ListItem>
            <ListItem>used widely in production at tech heavy companies</ListItem>
            <ListItem>has been considered a best practice for several years</ListItem>
          </List>
          <List>
            <ListItem>https://github.com/facebook/react/wiki/sites-using-react</ListItem>
            <ListItem>https://www.thoughtworks.com/radar/languages-and-frameworks/react-js</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
        <Heading size={4} textColor="primary">
        9. Syncs Naturally with Overlying Trend of Future of UI
        </Heading>
        <List>
            <ListItem>the overlying trend in the web toward functional, component-based systems,</ListItem>
            <ListItem>most notably, the uni-directional Flux architecture; the most common implementation of which, is Redux.</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
          10. Facebook has proved its dedication to supporting and optimizing the library in multiple ways
          </Heading>
          <List>
            <ListItem>
            Open sourcing it in the first place
            </ListItem>
            <ListItem>
            amending their open source license to be free of any potential gotchas (last year)https://medium.freecodecamp.org/facebook-just-changed-the-license-on-react-heres-a-2-minute-explanation-why-5878478913b2
            </ListItem>
            
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
          10... supporting groups and projects
          </Heading>
          <List>
          <ListItem>
           These groups have branched out to support and further develop the platform.  People (like Redux creator, Dan Abramov, Andrew Clark, Ryan Florence, Michael Jackson) have come out to help develop React from outside of Facebook.
Even without FB, I think React would be supported by somebody. I dont think FB will walk away from it. React defines the future and the now of building UI.
            </ListItem>
            
           
          </List>
          </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
          10...completed  FB Support
          </Heading>
          <List>
          <ListItem>
            FB uses React on facebook, instagram and other important projects
            </ListItem>
            <ListItem>
            Expanding use into mobile and VR. The paradigm works in any interface.
            </ListItem>
            <ListItem>
            Facebook just recently updated to React Fiber (React 16), a highly improved architecture that provides even more improvements to performance, error handling, &amp; 
            more without adversely affecting the API. React 16.3 alpha hit NPM on February 6 2018.
            </ListItem>
          </List>
          </Slide>
      </Deck>
    );
  }
}
