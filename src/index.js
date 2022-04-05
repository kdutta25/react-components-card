import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App =()=>{

    

    return (

        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Kaus" dateTime="Today at 06:00 PM" blogContent="Nice Post !!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Baby" dateTime="Today at 05:00 PM" blogContent="Great Work !!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Appy" dateTime="Yesterday at 04:30 PM" blogContent="Good Content !!" />
            </ApprovalCard>
            
            
        </div>



    );

};

ReactDOM.render(<App/>, document.querySelector('#root'));