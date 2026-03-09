import React, { useState } from "react";
import {
RadarChart,
PolarGrid,
PolarAngleAxis,
PolarRadiusAxis,
Radar
} from "recharts";

function App() {

const [loggedIn, setLoggedIn] = useState(false);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const [language, setLanguage] = useState("EN");

const [students, setStudents] = useState([
{
name: "Emma",
age: 4,
languageSkill: 80,
social: 70,
motor: 85,
cognitive: 75,
emotion: 90
}
]);

const [newStudent, setNewStudent] = useState({
name: "",
age: "",
languageSkill: 0,
social: 0,
motor: 0,
cognitive: 0,
emotion: 0
});

const handleLogin = () => {
if (username === "admin" && password === "admin1234") {
setLoggedIn(true);
} else {
alert("Invalid Login");
}
};

const addStudent = () => {
setStudents([...students, newStudent]);

setNewStudent({
name: "",
age: "",
languageSkill: 0,
social: 0,
motor: 0,
cognitive: 0,
emotion: 0
});
};

if (!loggedIn) {
return (
<div style={styles.container}>

<h1>Kidsfirst Development System</h1>

<h2>Admin Login</h2>

<input
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

</div>
);
}

return (
<div style={styles.container}>

<h1>Kidsfirst Development System</h1>

<div style={{marginBottom:20}}>

<button onClick={()=>setLanguage("EN")}>English</button>

<button onClick={()=>setLanguage("TH")}>ไทย</button>

</div>

<h2>{language === "EN" ? "Add Student" : "เพิ่มนักเรียน"}</h2>

<input
placeholder="Name"
value={newStudent.name}
onChange={(e)=>setNewStudent({...newStudent,name:e.target.value})}
/>

<input
placeholder="Age"
value={newStudent.age}
onChange={(e)=>setNewStudent({...newStudent,age:e.target.value})}
/>

<input
placeholder="Language Skill"
type="number"
onChange={(e)=>setNewStudent({...newStudent,languageSkill:Number(e.target.value)})}
/>

<input
placeholder="Social"
type="number"
onChange={(e)=>setNewStudent({...newStudent,social:Number(e.target.value)})}
/>

<input
placeholder="Motor"
type="number"
onChange={(e)=>setNewStudent({...newStudent,motor:Number(e.target.value)})}
/>

<input
placeholder="Cognitive"
type="number"
onChange={(e)=>setNewStudent({...newStudent,cognitive:Number(e.target.value)})}
/>

<input
placeholder="Emotion"
type="number"
onChange={(e)=>setNewStudent({...newStudent,emotion:Number(e.target.value)})}
/>

<button onClick={addStudent}>
{language === "EN" ? "Add Student" : "เพิ่ม"}
</button>

<hr/>

<h2>{language === "EN" ? "Students" : "รายชื่อนักเรียน"}</h2>

{students.map((s,index)=>{

const data = [
{ skill:"Language", value:s.languageSkill },
{ skill:"Social", value:s.social },
{ skill:"Motor", value:s.motor },
{ skill:"Cognitive", value:s.cognitive },
{ skill:"Emotion", value:s.emotion }
];

return(

<div key={index} style={styles.card}>

<h3>{s.name}</h3>

<p>Age: {s.age}</p>

<RadarChart
outerRadius={90}
width={400}
height={300}
data={data}
>

<PolarGrid />

<PolarAngleAxis dataKey="skill" />

<PolarRadiusAxis />

<Radar
dataKey="value"
stroke="#a78bfa"
fill="#c4b5fd"
fillOpacity={0.6}
/>

</RadarChart>

</div>

);

})}

</div>
);

}

const styles = {

container:{
fontFamily:"Arial",
padding:40,
textAlign:"center"
},

card:{
border:"1px solid #eee",
borderRadius:10,
padding:20,
margin:20
}

};

export default App;