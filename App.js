import './App.css';
import User from'./User.jsx';
const userData= [
  {name: "James", City: "New York", des: "Front-end developer",
skills: ["UI / UX", "Front End Development", "HTML" ,
"CSS", "JavaScript", "React", "Node"], online: false, },
{name: "James", City: "New York", des: "Front-end developer",
  skills: ["UI / UX", "Front End Development", "HTML" ,
  "CSS", "JavaScript", "React", "Node"], online: false, }

];


function App() {
  return ( <>
    {userData.map((user,index)=>(
      <User key={index}
      name={user.name}
      city={user.city}
      des={user.des}
      online={user.online}
      skills={user.skills}/>
      
    ))}
    </>
  );
};

      /* <User name="Sivasakthi" city="NYC" des="Full Stack Developer" skills={["Ui/ux","front-end","html","css","js"]} online={false}  /> */
    



export default App;
