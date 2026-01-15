import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CoreConcept } from "./components/CoreConcept";
import coreImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";
import { Card } from "./components/Card";
import { TabComponent } from "./components/TabComponent";
import { EXAMPLES } from './data';

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials Header comp</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
}

export function CourseGoal1(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export function CourseGoal2({ title, description }) {
  {/* object destructring */ }
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const [selectedTab, setSelectedTab] = useState();
  function clickHandler(label) {
    console.log(EXAMPLES[label].description);
    console.log(label);
    setSelectedTab(label);
  }

  const [price, setPrice] = useState('$100');
  function applyDiscount() {
    setPrice('$75');
  }

  return (
    <>
      <div>
        <div>
          <p data-testid="price">{price}</p>
          <button onClick={applyDiscount}>Apply Discount</button>
        </div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className='practice-container'>
        <Card name="Anthony Blake">
          <p>1 description for anthony blake</p>
          <p>2 description for anthony blake</p>
        </Card>

        <TabComponent onClick={() => clickHandler('components')}> components </TabComponent>
        <TabComponent onClick={() => clickHandler('jsx')}> jsx </TabComponent>
        <TabComponent onClick={() => clickHandler('props')}> props </TabComponent>
        <TabComponent onClick={() => clickHandler('state')}> state </TabComponent>

        {!selectedTab && <p>Select a tab</p>}
        {selectedTab && (<div id="tab-content">
          <h4>{EXAMPLES[selectedTab].title}</h4>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            {EXAMPLES[selectedTab].code}
          </pre>

        </div>)}
        <ul>
          <CourseGoal1 title="Learn React" description="in-depth" />
          <CourseGoal1 title="Practice React" description="Via Udemy" />

          <CourseGoal2 title="Practice React destructuring" description="Via Udemy" />

          <div id="core-concepts">
            <h4>Static List Core Concepts</h4>
            <ul><CoreConcept image={coreImage} title="Core Concept Practice React destructuring" description="Via Udemy" />
              <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
            </ul>

            <h4>Dynamic List Core Concepts</h4>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}

            </ul>
          </div>


          {/* OUTPUT AT LEAST TWO CourseGoal components here */}
          {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        </ul>
      </div>
    </>
  )
}

export default App
