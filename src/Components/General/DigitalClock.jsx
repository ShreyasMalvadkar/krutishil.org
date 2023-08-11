import { useState } from "react";
import "react-datetime/css/react-datetime.css";
import "./DigitalClock.css";
import TodayIcon from '@mui/icons-material/Today';
import ScheduleIcon from '@mui/icons-material/Schedule';

const DigitalClock = () =>{
  let time  = new Date().toLocaleTimeString();
  let dateObj=new Date();
  let date=dateObj.getDate()+"/"+dateObj.getMonth()+"/"+dateObj.getFullYear();

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time) }
  setInterval(UpdateTime)
  return <h5  className="center" title="Date & Time">
    {/* <TodayIcon color="primary"/> <b>{date}</b> */}
  <ScheduleIcon color="primary"/> &emsp;<b>{ctime}</b></h5>
}
export default DigitalClock
