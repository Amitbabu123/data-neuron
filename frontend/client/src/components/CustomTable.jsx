import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Edit from '../Edit';
import { useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from './Helper'

const CustomTable = ({handleUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const[data, setData] = useState([]);

    const openModal = (student) => {
        setIsModalOpen(true);
        setSelectedStudent(student);
    };

    const closeModal = () => {
        fetchStudents();
        setIsModalOpen(false);
    };

    // Function to handle edit button click
    const handleEditClick = (student) => {
        openModal(student);
    };

    const fetchStudents = async () => {
        try {
            console.log('Fetch Students')
            const response = await axios.get(`${BASE_URL}/students`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };


    const handleDelete = async (deletedStudent) => {
        // Delete logic
        try {
            console.log('Delete Students' + deletedStudent._id)
            const response = await axios.delete(`${BASE_URL}/delete/` + deletedStudent._id);
            // setStudents(response.data);
            // console.log(response.data);
            const response2 = await axios.get(`${BASE_URL}/students`);
            setData(response2.data);

            // setStudents(updatedStudents);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);



    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold my-4 text-center">All Students</h2>

            <table className="table-auto w-full border-collapse">
                <thead className="bg-[#11256d] text-white">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Qualification</th>
                        <th className="border px-4 py-2">Phone</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student._id}>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">{student.email}</td>
                            <td className="border px-4 py-2">{student.Qualification}</td>
                            <td className="border px-4 py-2">{student.phone}</td>
                            <td className="border px-4 py-2 flex justify-center">
                                <button className="mr-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full" onClick={() => handleEditClick(student)}>
                                    <FaEdit />
                                </button>
                                <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full" onClick={() => handleDelete(student)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Render Edit component conditionally */}
            {selectedStudent && (
                <Edit isOpen={isModalOpen} closeModal={closeModal} studentDetails={selectedStudent} />
            )}
        </div>
    );
};

export default CustomTable;
