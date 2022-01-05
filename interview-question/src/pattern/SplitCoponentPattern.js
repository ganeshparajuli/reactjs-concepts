/*
What is the "Split Component Pattern" in React Js?

Have alreay heard about the split component pattern in React js but you don't know at what it reffers exactly?

It has to do with passing components down tree in the “children” props or as props themselves (less used this last).

The idea is that we can render as many components as we want in a wrapper component and pass them down to another 
component in the children props, which is an array when it comes to more than one component as children props.

In this way, destructuring the children array prop we can modify or style those components passed in the children prop
 in some other wrapper component than the one which takes them as children.
 
*/
const Header = () => <div>Header</div>;
const Sidebar = () => <div>Sidebar</div>;
const Main = () => <div>Main</div>;
const Footer = () => <div>Footer</div>;

const Wrapper = ({ children }) => {
  const [top, left, right, footer] = children;
 
  return (
    <>
      <div style={{ width: '100%', height: '10vh', backgroundColor: 'yellow' }}>
        {top}
      </div>
      <div style={{ display: 'flex', height: '80vh' }}>
        <div style={{ width: '30%', backgroundColor: 'red' }}>{left}</div>
        <div style={{ width: 'auto', backgroundColor: 'pink', flex: 1 }}>
          {right}
        </div>
      </div>
      <div
        style={{ width: '100%', height: '10vh', backgroundColor: 'deeppink' }}
      >
        {footer}
      </div>
    </>
  );
};
function SplitComponentPattern() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}
export default SplitComponentPattern;