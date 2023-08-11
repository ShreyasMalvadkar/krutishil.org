import React from 'react'
import { NavLink } from 'react-router-dom';
import LeftTabMenuData from "./LeftTabMenuData.json";

function LeftSideMenu() {
  return (
        <table className='table table-light table-striped bg-white rounded shadow'>
            <tbody>
                {LeftTabMenuData.map((data,index)=>{
                    return(
                            <tr  key={index} >
                                <td>
                                    <div className="col center">
                                        <NavLink to={data.PageComponentAddress}><b>{data.PageTitle}<br/>{data.PageTitleMarathi}</b></NavLink>
                                    </div>
                                </td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
  )
}

export default LeftSideMenu