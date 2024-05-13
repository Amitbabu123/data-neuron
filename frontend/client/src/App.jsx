import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import CustomTable from './components/CustomTable';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Layout from "./components/Task1/Layout";
import { BASE_URL } from './components/Helper';

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            console.log('Fetch Students')
            const response = await axios.get(`${BASE_URL}/students`);
            setStudents(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleUpdate = async (updatedStudent) => {
        // Update logic
        console.log('Verma')
    };

    const handleDelete = async (deletedStudent) => {
        // Delete logic
        try {
            console.log('Delete Students' + deletedStudent._id)
            const response = await axios.delete(`${BASE_URL}/delete/` + deletedStudent._id);
            // setStudents(response.data);
            // console.log(response.data);
            const response2 = await axios.get(`${BASE_URL}/students`);
            setStudents(response2.data);
            // setStudents(updatedStudents);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleAdd = (newStudent) => {
        setStudents([...students, newStudent]);
    };

    return (
        // <BrowserRouter> {/* Wrap your Routes with BrowserRouter */}
            <Routes>
                <Route path="/" element={ // Wrap your components with a parent element
                    <>
                        <Navbar />
                        <Details handleAdd={handleAdd} />
                        <CustomTable  handleUpdate={handleUpdate} handleDelete={handleDelete} />
                    </>
                } />
                <Route path="/layout" element={<Layout />} />
            </Routes>
        // </BrowserRouter>
    );
}

export default App;
