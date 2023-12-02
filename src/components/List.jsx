import React from 'react'
import ListElement from './ListElement'

const title1 = "What is Frontend Mentor, and how will it help me?"
const title2 = "Is Frontend Mentor free?"
const title3 = "Can I use Frontend Mentor projects in my portfolio?"
const title4 = "How can I get help if I'm stuck on a challenge"
const msg1 = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,CSS and Javascript.It's suitable for all levels and ideal for portfolio building."
let opened = true
const List = () => {
  return (
    <main className='flex flex-col p-8 w-80 bg-white rounded-xl lg:w-1/2 max-w-2xl'>
        <div className='flex gap-4 my-4'>
            <div><img src="./assets/images/icon-star.svg" alt="" /></div>
            <h1 className='text-5xl font-bold'>FAQs</h1>
        </div>
        <ul>
                <ListElement title={title1} msg={msg1} opened={opened}/>
                <ListElement title={title2} msg={msg1} />
                <ListElement title={title3} msg={msg1} />
                <ListElement title={title4} msg={msg1} />
            </ul>
    </main>
  )
}

export default List