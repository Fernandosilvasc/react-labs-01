import React from "react";

const StudentListChild = props => {
  //const array = this.props.students ----- for class compoment
  const { students, isLoading } = props;

  if (isLoading) return <div className="msg">Loading students . . . </div>;
  return (
    <div className="msg">
      <ul>
        {students.map(student => (
          <li key={student.toString()}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListChild;
