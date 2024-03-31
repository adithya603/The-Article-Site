import React from 'react'
import Edit from '../images/edit.png';
import Delete from '../images/delete.png'
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

function Single(){
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720' alt='' />

        <div className='user'>
          <img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720' alt='' />
          <div className='info'>
            <span>John</span>
            <p>Posted 3 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit img"></img>
            </Link>
            <img src={Delete} alt="delete img"></img>
          </div>
        </div>
        <h1>Lorem ipsum dolo sit amet consectetur adipisicing</h1>
        <p>
          Pink ponies and purple giraffes roamed the field. Cotton candy grew from the ground as a chocolate river meandered off to the side. What looked like stones in the pasture were actually rock candy. Everything in her dream seemed to be perfect except for the fact that she had no mouth.
          Greg understood that this situation would make Michael terribly uncomfortable.<br></br> <br></br>Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.
          With six children in tow, Catherine raced to the airport departing gate.<br></br> <br></br> This wasn't an easy task as the children had other priorities than to get to the gate. She knew that she was tight on time and the frustration came out as she yelled at the kids to keep up. They continued to test her, pretending not to listen and to move in directions that only slowed them down. They had no idea the wrath they were about to receive when Catherine made it to the gate only to be informed that they had all missed the plane.
          It had been a rough day. <br></br>
        </p>
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </div>

  )
}

export default Single;