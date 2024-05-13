
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';

const Layout = () => {
  return (
    <div className="container mx-auto m-8 h-screen flex justify-center items-center">
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={20} minSize={20} maxSize={75} className="bg-purple-500 border border-red-500">
              <div className="h-full flex flex-col justify-center items-center">
              <h1>BOX-1</h1>
                <h1>I am Amit Kumar</h1>
                <h2>B.Tech from KNIT Sultanpur</h2>
                
              </div>
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={50} minSize={20} maxSize={75} className="bg-blue-500 border border-red-500">
              <div className="h-full flex flex-col justify-center items-center">
              <h1>BOX-2</h1>
                <h1>Skills: HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, Tailwind.css, SQL, MongoDB</h1>
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={40} minSize={20} maxSize={75} className="bg-green-500 border border-red-500">
          <div className="h-full flex flex-col justify-center items-center">
          <h1>BOX-3</h1>
            <h1>Projects:</h1>
            <p>I am a MERN stack developer. I have worked on projects like Qkart, GooFood, Qtrip Dynamic, where I developed full-stack applications using technologies like React.js, Node.js, Express.js, and MongoDB.</p>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Layout;
