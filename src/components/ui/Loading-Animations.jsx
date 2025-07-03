import { Circles, CirclesWithBar, LineWave, RotatingLines } from "react-loader-spinner";

export default function CircleLoader(){
    return <RotatingLines
    strokeColor="white"
    strokeWidth="2"
    visible={true}/>
}