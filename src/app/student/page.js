import React from 'react';
import Link from 'next/link';


const Student = () => {
  const containerStyle = {
    display: 'flex',
  };

  const leftSectionStyle = {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
  };

  const rightSectionStyle = {
    flex: 2,
    padding: '20px',
    backgroundColor: '#d3d3d3',
    minHeight: '100vh', // Set a minimum height to fill the viewport height
  };

  const topRightStyle = {
    marginBottom: '20px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
  };

  const bottomRightStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    color: '#007bff', // Light blue color
    backgroundColor: '#fff', // White background
  };

  const studentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #ccc',
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    height: "50px",
    marginTop: "10px",
    padding: "5px"
  };
  const studentStyle1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #ccc',
    backgroundColor: "#007bff",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff"
  };

  const buttonStyle = {
    backgroundColor: '#007bff', // Blue background color
    color: '#fff', // White text color
    borderRadius: '10px',
    padding: '8px 16px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  };

  const userImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div style={containerStyle}>
      {/* Left Section */}
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1eekqHh7GTM51XxGueU7mhqeMjOV3E6ljw&usqp=CAU" alt="Logo" style={{ width: "150px", height: "150px", paddingBottom: "20px",  }} />
        <div style={{ display: "flex", padding: "20px" }}>
          <span>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User" style={userImageStyle} />
            <Link href="/allStudent">
              Students
            </Link>
          </span>
        </div>
        <div style={{ display: "flex", padding: "20px" }}>
          <span>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User" style={userImageStyle} />
            <Link href="/student">
              Attendance
            </Link>
          </span>
        </div>
        <button style={{ paddingTop: "220px", margin: "10px", fontWeight: "bold" }}>Logout</button>
      </div>

      {/* Right Section */}
      <div style={rightSectionStyle}>
        {/* Top of Right Section */}
        <div style={topRightStyle}>
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Attendance</h1>
        </div>

        {/* Bottom of Right Section */}
        <div style={studentStyle1}>
          <p>id</p>
          <p>Profile img</p>
          <p>Name</p>
          <p>Check In Time</p>
          <p>Check Out Time</p>
          {/* Student data */}
        </div>
        <div className="studentData">
          <div style={studentStyle}>
            <p>1</p>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User" style={userImageStyle} />
            <p>Sharjeel</p>
            <p>9:00 17-12-2023</p>
            <span>6:00 PM 17-12-2023</span>
          </div>

          <div style={studentStyle}>
            <p>1</p>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User" style={userImageStyle} />
            <p>Sharjeel</p>
            <p>9:00 17-12-2023</p>
            <span>6:00 PM 17-12-2023</span>
          </div>
          <div style={studentStyle}>
            <p>1</p>
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User" style={userImageStyle} />
            <p>Sharjeel</p>
            <p>9:00 17-12-2023</p>
            <span>6:00 PM 17-12-2023</span>
          </div>
          {/* Add more student data here */}
        </div>
      </div>
    </div>
  );
};

export default Student;