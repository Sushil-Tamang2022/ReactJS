// import React from "react";
// import { FaHome } from "react-icons/fa";
// import { FaFacebookMessenger } from "react-icons/fa6";
// import { IoMail } from "react-icons/io5";
// import { IoIosContact } from "react-icons/io";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const App = () => {
//   return (
//     <div>
//       <h1>Messegers</h1>
//       <FaHome size={100} color="blue" />
//       <FaFacebookMessenger size={100} color="blue" />
//       <IoMail size={100} color="blue" />
//       <IoIosContact size={100} color="blue" />
//       <FaInstagram size={100} color="blue"/>
//       <FaLinkedin size={100} color="blue"/>
//       <FaGithub size={100} color="blue"/>
//     </div>
//   );
// };

// export default App;

// const person = {
//   name: "",
//   age: "",
//   location: ""
// }


// const person1 = {
//   ...person, name: "Sushil",
//   age: "25",
//   location: "kathamandu"
// }
// console.log(person1)



import React from "react";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "", 
    age: "", 
    doctor: "", 
    section: "" 
  });
  const [formDatas, setFormDatas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDatas([...formDatas, formData]);
    setFormData({ id: "", name: "", phone: "", age: "", doctor: "", section: "" })
  }
  console.log(formDatas)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, id: Date.now() + Math.random(), [name]: value });
  }

  // to Delete
  const handleDelete = (id) => {
    setFormDatas(formDatas.filter(data => data.id !== id))
  }

  // console.log(formData)


  return (
    <div>
      <h1>Form Handling</h1>
      <form onSubmit={handleSubmit}>
      {/* Name */}
      <label>Name: <input value={formData.name} onChange={handleChange} type="text" name="name"/></label><br />
      {/* Phone */}
      <label>Phone: <input value={formData.phone} onChange={handleChange} type="text" name="phone"/></label><br />
      {/* Age */}
      <label>Age: <input value={formData.age} onChange={handleChange} type="text" name="age"/></label><br />
      {/* Doctor */}
      <label>Doctor: <input value={formData.doctor} onChange={handleChange} type="text" name="doctor"/></label><br />
      {/* Section */}
      <label>Section: <input value={formData.section} onChange={handleChange} type="text" name="section"/></label><br />
      {/* Button */}
      <button type="submit">Add</button>
      <h2>Form List</h2>
      <ul>
        {formDatas.map((data) => (
          <li key={data.id}>Name: {data.name} - Phone: {data.phone} - Age: {data.age} - Doctor: {data.doctor} - Section: {data.section}{" "} <button onClick={() => handleDelete(data.id)}>Delete</button></li>
        ))}
      </ul>
      </form>
    </div>
  )
}

export default App

