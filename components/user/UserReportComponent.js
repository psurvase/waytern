import React, { useState , useEffect} from "react";
//import PDF, {Text, AddPage, Line, Image, Table, Html} from 'jspdf-react';
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { CSVLink } from "react-csv";
import Button from "react-bootstrap/Button";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "jspdf-autotable";
const UserReportComponent = ({ users }) => {
  const [report, setReport] = useState();
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    var userArray = [];
    for (var i = 0; i <= users.length - 1; i++){
      userArray.push(Object.values(users[i]));
    }
    setUserData(userArray);
  },[]);

 
  const generatePdfReport=()=>{
    var pdfSize='a2';
    const doc=new jsPDF('landscape','px',pdfSize,'false');
    doc.text("User Report",80,20);
    autoTable(doc,{
      theme:"grid",
      margin: { top: 50, left: 20, right: 20, bottom: 0 }, 
      head:[Object.keys(users[0])], 
      body:userData
    })     
    doc.save(`users-${users[0].id}.pdf`)
  }
  
  return (
    <div>
      <Button>
        <CSVLink data={users} enclosingCharacter={" "}>
          Export to CSV
        </CSVLink>
      </Button>
      <Button onClick={generatePdfReport}>
        Export to PDF
      </Button>
      
      <PivotTableUI data={users} onChange={(s) => setReport(s)} {...report} />
    </div>
  );
};

export default UserReportComponent;
