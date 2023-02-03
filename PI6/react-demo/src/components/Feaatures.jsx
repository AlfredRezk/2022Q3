import React from 'react'
import Card from './Card'

const Feaatures = () => {
  return (

    <div className='row'>

        <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <Card>
            
                <i className="fa-sharp fa-solid fa-users fa-3x text-danger mb-3"></i>
                <h4 className='mb-3'> User Friendly</h4>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nemo tenetur saepe libero repellat ad iure labore blanditiis eveniet est aliquam vero eaque at incidunt laudantium, laborum perspiciatis commodi voluptates!</p>
            </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <Card>
            

                <i className="fa-solid fa-location-dot fa-3x text-primary mb-3"></i>
                <h4 className='mb-3'> Easily to be located</h4>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nemo tenetur saepe libero repellat ad iure labore blanditiis eveniet est aliquam vero eaque at incidunt laudantium, laborum perspiciatis commodi voluptates!</p>
            </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <Card>
            
                <i className="fa-solid fa-wifi fa-3x text-info mb-3"></i>
                <h4 className='mb-3'> Connect anywhere</h4>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nemo tenetur saepe libero repellat ad iure labore blanditiis eveniet est aliquam vero eaque at incidunt laudantium, laborum perspiciatis commodi voluptates!</p>
            </Card>
        </div>
        <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <Card>
    
                <i className="fa-solid fa-layer-group fa-3x text-danger mb-3"></i>
                <h4 className='mb-3'> Stack layers</h4>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nemo tenetur saepe libero repellat ad iure labore blanditiis eveniet est aliquam vero eaque at incidunt laudantium, laborum perspiciatis commodi voluptates!</p>
            </Card>
        </div>
    </div>

  )
}

export default Feaatures