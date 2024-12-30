'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { toast } from 'react-toastify';
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modal({ open, setOpen }) {
    //   const [open, setOpen] = useState(true)


    const schemaOptions = [
        { label: "First Name", value: "first_name", type:"user_traits" },
        { label: "Last Name", value: "last_name",type:"user_traits" },
        { label: "Gender", value: "gender",type:"user_traits" },
        { label: "Age", value: "age",type:"user_traits" },
        { label: "Account Name", value: "account_name",type:"group_traits" },
        { label: "City", value: "city",type:"group_traits" },
        { label: "State", value: "state",type:"group_traits" },
    ];

    const [segmentName, setSegmentName] = useState("");
    const [selectedSchema, setSelectedSchema] = useState("")
    const [selectedSchemas, setSelectedSchemas] = useState([]);
    const [availableOptions, setAvailableOptions] = useState(schemaOptions);

    const handleAddSchema = (selectedValue) => {
        if (!selectedValue) return;

        const selectedOption = availableOptions.find(
            (option) => option.value === selectedValue
        );

        setSelectedSchemas((prev) => [...prev, selectedOption]);

        // Update available options
        setAvailableOptions((prev) =>
            prev.filter((option) => option.value !== selectedValue)
        );

        setSelectedSchema("")
    };

    const handleRemoveSchema = (valueToRemove) => {
        const removedOption = selectedSchemas.find(
            (schema) => schema.value === valueToRemove
        );

        setSelectedSchemas((prev) =>
            prev.filter((schema) => schema.value !== valueToRemove)
        );

        setAvailableOptions((prev) => [...prev, removedOption]);
    };

    const handleSaveSegment = async () => {
        if(segmentName!==""){
            if(selectedSchemas.length!==0){

            }else{
            toast.warning("Please add at least one schema.")

            }

        }else{
            toast.warning("Please enter a Segment Name")
        }
    };


    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-end  text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative border  transform overflow-hidden min-h-screen h-auto rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in  sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                </div> */}
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-xl  py-3 font-semibold text-gray-900">
                                        Saving Segment
                                    </DialogTitle>
                                    <hr />
                                    <div className="mt-3">
                                        <label className='font-semibold' >Enter the Name of the Segment</label>
                                        <input type='text' onChange={(e)=>setSegmentName(e.target.value)} placeholder='Enter Segment Name' className='mt-2 text-base border-2 border-slate-500 px-3 py-1 rounded-md w-full ' />
                                    </div>
                                    <div className='mt-6' >
                                        <p>To save your segment, you need to add your schemas to build the query</p>
                                        <div className='mt-3 flex justify-end items-end' >
                                            <div className='w-1/3 flex text-sm justify-center items-center' >
                                                <div className='w-3 h-3 mr-1 rounded-full bg-green-500' >

                                                </div>
                                                <p>User Traits</p>

                                            </div>
                                            <div className='w-1/3 flex text-sm  justify-center items-center' >
                                                <div className='w-3 h-3 mr-1 rounded-full bg-red-500' >

                                                </div>
                                                <p>Group Traits</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='mt-4' >
                                        <div className="mb-4 text-sm">
                                            {/* <h3 className="font-medium text-lg">Add Schemas to Build the Query</h3> */}
                                            {selectedSchemas.map((schema) => (
                                                <div
                                                    key={schema.value}
                                                    className="flex items-center bg-blue-100 p-2 my-2 rounded"
                                                >
                                                    {schema.type == "user_traits" ? <div className='w-3 h-3 mr-2 rounded-full bg-green-500' >

                                                    </div> : <div className='w-3 h-3 mr-2 rounded-full bg-red-500' >

                                                    </div>}
                                                    <span className="flex-grow">{schema.label}</span>
                                                    <button
                                                        className="text-red-500 font-bold"
                                                        onClick={() => handleRemoveSchema(schema.value)}
                                                    >
                                                        <p className='border bg-red-100 p-1 rounded-md cursor-pointer' >X</p>
                                                    </button>
                                                </div>
                                            ))}
                                            <select
                                                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                                onChange={(e) => setSelectedSchema(e.target.value)}
                                            >
                                                <option value="">Add schema to segment</option>
                                                {availableOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <p onClick={() => handleAddSchema(selectedSchema)} className='mt-3 rounded-md cursor-pointer border px-3 py-1 w-fit text-sm bg-blue-700 text-white' >+ Add new Schema</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" px-4 py-3 h-full sm:px-6">
                            <div className='flex mt-auto absolute bottom-3 gap-3' >
                                <button
                                    type="button"
                                    onClick={() => handleSaveSegment()}
                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                                >
                                    Save the Segment
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
