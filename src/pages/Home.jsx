import React, { useState } from 'react'
import Modal from '../components/Modal'

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <div className='px-5 sm:px-20 h-[81vh] flex items-center'>
                <div className='' >
                    <p className='text-xs mb-3' >click here</p>
                    <button onClick={()=>setModalOpen(true)} className='border rounded-md px-4 py-2 text-sm bg-slate-600 hover:bg-slate-500 text-slate-50' >Save segment</button>
                    {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen}/>}
                </div>

            </div>

        </>
    )
}

export default Home