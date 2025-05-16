// import React, { useState } from 'react';
//
// const PhoneBook = () => {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//   });
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUsers([...users, formData]);
//     setFormData({ firstName: '', lastName: '', email: '', phone: '' });
//   };
//
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', width: '100vw' }}>
//       <h1>Телефонна книга</h1>
//       <form onSubmit={handleSubmit}
//             style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
//         <input type="text" name="firstName" placeholder="Ім'я"
//                value={formData.firstName} onChange={handleChange} required
//         />
//         <input
//           type="text" name="lastName" placeholder="Прізвище"
//           value={formData.lastName} onChange={handleChange} required
//         />
//         <input type="email" name="email" placeholder="Електронна адреса"
//           value={formData.email} onChange={handleChange} required
//         />
//         <input type="tel" name="phone" placeholder="Телефон"
//           value={formData.phone} onChange={handleChange} required
//         />
//         <button type="submit">Додати</button>
//       </form>
//
//       <h2>Список користувачів</h2>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             {user.firstName} {user.lastName} - {user.email} - {user.phone}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default PhoneBook;

import React, { useState } from 'react';

const PhoneBook = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = formData;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, formData]);
    }
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <h1>Телефонна книга</h1>
      <form onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
        <input type="text" name="firstName" placeholder="Ім'я"
               value={formData.firstName} onChange={handleChange} required
        />
        <input
          type="text" name="lastName" placeholder="Прізвище"
          value={formData.lastName} onChange={handleChange} required
        />
        <input type="email" name="email" placeholder="Електронна адреса"
          value={formData.email} onChange={handleChange} required
        />
        <input type="tel" name="phone" placeholder="Телефон"
          value={formData.phone} onChange={handleChange} required
        />
        <button type="submit">{editingIndex !== null ? 'Зберегти' : 'Додати'}</button>
      </form>

      <h2>Список користувачів</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.email} - {user.phone}
            <button onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>Редагувати</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneBook;